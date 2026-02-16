import { BrowserRouter } from "react-router";
import { ThemeProvider } from "@/components/ui/layouts/ThemeProvider"
import { AuthPage } from "./pages/AuthPage"
import { DashboardPage } from "./pages/DashboardPage"
import { RoutesApp } from "./routes/RoutesApp";

function App() {

  return (
      <ThemeProvider>
        <RoutesApp/>
        {/* <AuthPage /> */}
        {/* <DashboardPage /> */}
      </ThemeProvider>

  )
}

export default App
