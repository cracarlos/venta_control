import { useEffect, useState } from "react";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { useUsersStore } from "@/hooks/useUsersStore";
import type { User, UserRegister } from "@/types/user";
import { UserTabletCard } from "./UserTabletCard";
import { useUiStore } from "@/hooks/useUiStore";
import { Button } from "./ui/button";
import { UserRoundPen } from "lucide-react";

export const UserTableList = () => {
    const { _getUsers, _getUserById } = useUsersStore();
    const { _setModalOpen } = useUiStore();
    const { isLoading } = useUiStore();

    const [users, setUsers] = useState<User[]>([]);

    const getUserList = async () => {
        const resp =  await _getUsers();
        setUsers(resp);
        return resp;
    };

    const getUserById = (userId:any) => {
        _getUserById(userId);
        return userId;
    };


    useEffect(() => {
        getUserList();
    }, [isLoading]);
    
  return (
    <UserTabletCard>
        <Table>
            <TableCaption>Usuarios del sistema</TableCaption>
            <TableHeader>
                <TableRow>
                <TableHead className="w-[100px]">ID</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Nombre Completo</TableHead>
                <TableHead>Grupo</TableHead>
                <TableHead></TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {users.map((user) => (
                    <TableRow key={user.id}>
                        <TableCell className="font-medium">{user.id}</TableCell>
                        <TableCell>{user.email}</TableCell>
                        <TableCell>{`${user.first_name} ${user.middle_name} ${user.last_name}`}</TableCell>
                        <TableCell>{user.groups[0]?.name || "Super Usuario"}</TableCell>
                        <TableCell onClick={() => getUserById(user.id)}>
                            <Button variant="outline" onClick={() => _setModalOpen(true)}>
                                <UserRoundPen />
                            </Button>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    </UserTabletCard>
  )
}
