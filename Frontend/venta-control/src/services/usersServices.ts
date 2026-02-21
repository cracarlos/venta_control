import api from "@/api/Api";
import type { ApiResponseNew } from "@/types/apiResponse";
import type { Groups } from "@/types/groups";
import type { User, UserByID, UserRegister } from "@/types/user";

export const getUsers = async (): Promise<User[]> => {
    try {
        const { data } = await api.get<User[]>('users/');
        return data;

    } catch (error: any) {
        if (error.response) {
            throw error.response.data;
        }
        throw new Error("Error de red o servidor no disponible");
    }
};

export const getUserId = async (id: number): Promise<UserByID> => {
    try {
        const { data } = await api.get<UserByID>(`users/${id}/`);
        return data;

    } catch (error: any) {
        if (error.response) {
            throw error.response.data;
        }
        throw new Error("Error de red o servidor no disponible");
    }
};

export const postUsers = async (userData: UserRegister): Promise<ApiResponseNew<User>> => {
    try {
        const resp = await api.post<User>('users/', userData);
        return resp;

    } catch (error: any) {
        if (error.response) {
            // throw error.response.data;
            return error.response;
        }
        throw new Error("Error de red o servidor no disponible");
    }
};

export const getGroups = async (): Promise<Groups[]> => {
    try {
        const { data } = await api.get<Groups[]>('groups/');
        return data;

    } catch (error: any) {
        if (error.response) {
            throw error.response.data;
        }
        throw new Error("Error de red o servidor no disponible");
    }
};