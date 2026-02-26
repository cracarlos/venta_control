import { getGroups, getUsers, getUserId, putUsers } from '@/services/usersServices'
import type { Groups } from '@/types/groups';
import type { User, UserRegister } from '@/types/user';
import { useAppDispatch, useAppSelector } from './useStore';
import { cleanUser, setUser } from '@/store/User/userSlice';

export const useUsersStore = () => {
    const userData = useAppSelector(state => state.user);

    const dispatch = useAppDispatch();

    const _getUsers = async (): Promise<User[]> => {
        const resp = await getUsers();
        return resp;
    };
    
    const _getGroups = async (): Promise<Groups[]> => {
        const resp = getGroups();
        return resp;
    };

    const _getUserById = async (userId:number) => {
        const resp = await getUserId(userId);
        dispatch(setUser(resp));
    }
    
    const _editUser = async (user:UserRegister) => {
        const resp = await putUsers(user);
        return resp;
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
        _editUser,

        // Propierty
        userData
    }
}
