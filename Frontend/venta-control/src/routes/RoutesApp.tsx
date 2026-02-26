import { ProtectedRoute } from "@/components/ProtectedRoute";
import { LayoutAuth } from "@/components/ui/layouts/LayoutAuth";
import { LayoutMain } from "@/components/ui/layouts/LayoutMain";
import { UserPasswordUpdate } from "@/components/UserPasswordUpdate";
import { AuthPage } from "@/pages/AuthPage";
import { DashboardPage } from "@/pages/DashboardPage";
import { UsersPage } from "@/pages/UsersPage";
import { BrowserRouter, Routes, Route } from "react-router";


export const RoutesApp = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route element={<ProtectedRoute />}>
              <Route element={<LayoutAuth />}>
                <Route path="/" element={<AuthPage />} />
                <Route path="/password-update" element={<UserPasswordUpdate />} />
              </Route>
              <Route element={<LayoutMain />}>
                <Route path="/dashboard" element={<DashboardPage />} />
                <Route path="/users" element={<UsersPage />} />
              </Route>
            </Route>
            {/* Ruta 404 */}
            <Route path="*" element={<div>Te la tiras de gracioso, ¿eh? 🚫</div>} />
        </Routes>
    </BrowserRouter>
  )
}
