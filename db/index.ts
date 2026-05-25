import { drizzle } from "drizzle-orm/netlify-db";
import * as schema from "../shared/schema.js";

export const db = drizzle({ schema });
