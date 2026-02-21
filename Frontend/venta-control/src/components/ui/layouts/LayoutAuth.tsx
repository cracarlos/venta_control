import { Outlet } from "react-router";
export const LayoutAuth = () => {
  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-background">
      <Outlet />
    </div>
  )
}
