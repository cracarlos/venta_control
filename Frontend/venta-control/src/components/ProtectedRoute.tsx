import { useAuthStore } from "@/hooks/useAuthStore";
import { useUiStore } from "@/hooks/useUiStore";
import { Navigate, Outlet, useLocation } from "react-router";

// 1. Definimos una interfaz sencilla para el estado de autenticación
interface AuthState {
  isAuthenticated: boolean;
  passwordUpdate: boolean;
}

export const ProtectedRoute = () => {
    const location = useLocation();
    
    const { isAuthenticated, passwordUpdate }: AuthState = useAuthStore(); 
    const { isLoading } = useUiStore();

    // if (isLoading) {
    //     return <div>Cargando sesión... ⏳</div>;
    // }

    // si no está autenticado
    if (!isAuthenticated && location.pathname !== "/") {
        // Guardamos la ruta a la que intentaba ir el usuario para volver luego
        return <Navigate to="/" state={{ from: location }} replace />;
    }
    // si está autenticado
    if (isAuthenticated && location.pathname === "/") {
            
        // Guardamos la ruta a la que intentaba ir el usuario para volver luego
        return <Navigate to="/dashboard" state={{ from: location }} replace />;
    }

    // Si el usuario no a actualizado su contraseña
    if (isAuthenticated && !passwordUpdate && location.pathname !== "/password-update" ) return <Navigate to="/password-update" replace />
    // Si el usuario esta autenticado y yá actualizó su contraseña
    if (isAuthenticated && passwordUpdate && location.pathname == "/password-update" ) return <Navigate to="/dashboard" replace />
    
    return <Outlet />;

};