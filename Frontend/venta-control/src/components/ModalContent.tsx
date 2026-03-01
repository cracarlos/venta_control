import { ModalResetPassword } from "./ModalResetPassword"
import { UserModal } from "./UserModal"

export const ModalContent = ({ name }: { name: string }) => {
  return (
    <>
        { name == 'user' && <UserModal />}
        { name == 'resetPassword' && <ModalResetPassword />}
    </>
  )
}
