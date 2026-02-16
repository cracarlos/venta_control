import { ProtectedRoute } from "@/components/ProtectedRoute";
import { AuthPage } from "@/pages/AuthPage";
import { DashboardPage } from "@/pages/DashboardPage";
import { BrowserRouter, Routes, Route } from "react-router";


export const RoutesApp = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route element={<ProtectedRoute />} >
              <Route path="/" element={<AuthPage />} />
              <Route path="/dashboard" element={<DashboardPage />} />
            </Route>
            {/* Ruta 404 */}
            <Route path="*" element={<div>No encontrado 🚫</div>} />
        </Routes>
    </BrowserRouter>
  )
}
