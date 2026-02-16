import { useAuthStore } from "@/hooks/useAuthStore";
import { Navigate, Outlet, useLocation } from "react-router";

// 1. Definimos una interfaz sencilla para el estado de autenticación
interface AuthState {
  isAuthenticated: boolean;
}

export const ProtectedRoute = () => {
    const location = useLocation();
    
    const { isAuthenticated }: AuthState = useAuthStore(); 

//   if (isLoading) {
//     return <div>Cargando sesión... ⏳</div>;
//   }

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

  return <Outlet />;
};