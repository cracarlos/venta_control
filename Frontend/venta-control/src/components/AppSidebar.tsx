import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { UserAvatarInfo} from '@/components/UserAvatarInfo';
import { Barcode, DollarSign, NotebookTabs, UserPlus, Users } from "lucide-react";

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:!p-1.5"
            >
              <a href="#">
                <NotebookTabs />
                <span className="text-base font-semibold">Venta Control</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
            <SidebarGroupLabel>Ventas</SidebarGroupLabel>
            <SidebarMenu>
                <SidebarMenuItem key="dashboard">
                    <SidebarMenuButton asChild>
                        <a href="#">
                            <DollarSign />
                            <span>Caja</span>
                        </a>
                    </SidebarMenuButton>
                </SidebarMenuItem>
            </SidebarMenu>
        </SidebarGroup>
        <SidebarGroup>
            <SidebarGroupLabel>Inventario</SidebarGroupLabel>
            <SidebarMenu>
                <SidebarMenuItem key="inventarios-produtos">
                    <SidebarMenuButton asChild>
                        <a href="#">
                        <Barcode />
                        <span>Productos</span>
                        </a>
                    </SidebarMenuButton>
                </SidebarMenuItem>
            </SidebarMenu>
        </SidebarGroup>
        <SidebarGroup>
            <SidebarGroupLabel>Usuarios</SidebarGroupLabel>
            <SidebarMenu>
                <SidebarMenuItem key="user-listado">
                    <SidebarMenuButton asChild>
                        <a href="#">
                        <Users />
                        <span>Listado</span>
                        </a>
                    </SidebarMenuButton>
                </SidebarMenuItem>
            </SidebarMenu>
            <SidebarMenu>
                <SidebarMenuItem key="user-registro">
                    <SidebarMenuButton asChild>
                        <a href="#">
                        <UserPlus />
                        <span>Registro</span>
                        </a>
                    </SidebarMenuButton>
                </SidebarMenuItem>
            </SidebarMenu>
        </SidebarGroup>
        <SidebarGroup />
      </SidebarContent>
      <SidebarFooter>
        <UserAvatarInfo />
      </SidebarFooter>
    </Sidebar>
  )
}