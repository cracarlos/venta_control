import { SidebarProvider, SidebarTrigger, SidebarInset } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/AppSidebar"
import { SiteHeader } from "../SiteHeader"

export const LayoutMain = ( {children}: any) => {
  return (
    <SidebarProvider>
      <AppSidebar />
        <SidebarInset>
            <SiteHeader />
                <div className="flex flex-1 flex-col">
                    <div className="@container/main flex flex-1 flex-col gap-2">
                        {/* <SidebarTrigger /> */}
                        <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6 px-2">
                            {children}
                            {/* <div className="px-4 lg:px-6">
                                <ChartAreaInteractive />
                                </div> */}
                        </div>
                    </div>
                </div>
        </SidebarInset>
    </SidebarProvider>
  )
}
