import { getGroups, getUsers, getUserId } from '@/services/usersServices'
import type { Groups } from '@/types/groups';
import type { User, UserRegister } from '@/types/user';
import { useAppDispatch } from './useStore';
import { cleanUser, setUser } from '@/store/User/userSlice';

export const useUsersStore = () => {
    const dispatch = useAppDispatch();
    const _getUsers = async (): Promise<User[]> => {
        const resp = getUsers();
        return resp;
    };
    
    const _getGroups = async (): Promise<Groups[]> => {
        const resp = getGroups();
        return resp;
    };

    const _getUserById = async (userId:number) => {
        const resp = await getUserId(userId);
        console.log(resp);
        dispatch(setUser(resp));
    }
    
    const _cleanUser = async () => {
        dispatch(cleanUser());
    }

    return {
        // Methods
        _getUsers,
        _getGroups,
        _getUserById,
        _cleanUser,
    }
}
