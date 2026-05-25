import { Switch, Route } from "wouter";
import { TooltipProvider } from "@radix-ui/react-tooltip";
import { FrameScreen } from "@/pages/FrameScreen";

function Router() {
  return (
    <Switch>
      <Route path="/" component={FrameScreen} />
      <Route component={() => <div className="min-h-screen flex items-center justify-center text-white">404 - Page Not Found</div>} />
    </Switch>
  );
}

function App() {
  return (
    <TooltipProvider>
      <Router />
    </TooltipProvider>
  );
}

export default App;
