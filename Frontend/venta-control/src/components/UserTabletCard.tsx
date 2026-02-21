import {
  Card,
  CardAction,
  CardContent,
  CardHeader,
} from "@/components/ui/card"
import { Button } from "./ui/button"
import { UserRoundPlus } from "lucide-react"
import { UserModal } from "./UserModal"

export const UserTabletCard = ({children}:any) => {
  return (
    <Card>
        <CardHeader>
            <CardAction>
                <UserModal />
            </CardAction>
        </CardHeader>
        <CardContent>
            {children}
        </CardContent>
    </Card>
  )
}
