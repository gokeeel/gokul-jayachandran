import { type User, type InsertUser } from "@shared/schema";
import { randomUUID } from "crypto";
import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";
import * as schema from "@shared/schema";

// modify the interface with any CRUD methods
// you might need

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;

  constructor() {
    this.users = new Map();
  }

  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }
}

export class DbStorage implements IStorage {
  private db: ReturnType<typeof drizzle>;

  constructor(db: ReturnType<typeof drizzle>) {
    this.db = db;
  }

  async getUser(id: string): Promise<User | undefined> {
    const result = await this.db.query.users.findFirst({
      where: (users, { eq }) => eq(users.id, id),
    });
    return result;
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const result = await this.db.query.users.findFirst({
      where: (users, { eq }) => eq(users.username, username),
    });
    return result;
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const result = await this.db
      .insert(schema.users)
      .values(insertUser)
      .returning();
    return result[0];
  }
}

// Initialize storage based on environment
let storage: IStorage;

if (process.env.DATABASE_URL) {
  const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
  });
  const db = drizzle(pool, { schema });
  storage = new DbStorage(db);
} else {
  storage = new MemStorage();
}

export { storage };
