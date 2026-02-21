import { postLogin, postLogout } from "@/services/authService"
import type { AuthApi, AuthLogin } from "@/types/auth";
import { useAppDispatch, useAppSelector } from "./useStore";
import { loginSlice, logoutSlice } from "@/store/Auth/authSlice";

export const useAuthStore = () => {

    const { fullName, email, isAuthenticated } = useAppSelector((state) => state.auth); 
    
    const dispatch = useAppDispatch();
    
    const Login = async (data: AuthLogin) => {
        try {
            const resp: AuthApi = await postLogin(data);

            localStorage.setItem("token", resp.access);
            localStorage.setItem("refresh", resp.refresh);

            dispatch(
                loginSlice({
                    isAuthenticated: true,
                    email: resp.email,
                    userId: resp.user_id,
                    fullName: resp.full_name,
                    passwordUpdate: resp.password_update
                })
            )

            return resp;
            
        } catch (error: any) {

            console.log(error)
            
            return error;
        }
    }

    const Logout = async () => {
        try {
            const resp = await postLogout();
            
            localStorage.removeItem("token");
            localStorage.removeItem("refresh");
            
            dispatch(logoutSlice());

            return resp;
            
        } catch (error: any) {

            console.log(error);
            // Revisar
            localStorage.removeItem("token");
            localStorage.removeItem("refresh");
            dispatch(logoutSlice());
            
            return error;
        }
    }

  return {
    // Methods
    Login,
    Logout,

    // Properties
    email,
    fullName,
    isAuthenticated,
  }
}