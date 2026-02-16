import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import type { AlertProps } from "@/types/alert"
import { AlertCircleIcon } from "lucide-react"

export function AlertPerson({ ok, message }: AlertProps) {
  return (
    <Alert variant={ ok?"default":"destructive" } className="max-w-md">
      <AlertCircleIcon />
      { ok && <AlertTitle>Success</AlertTitle> }
      { !ok && <AlertTitle>Error login</AlertTitle> }
      <AlertDescription>
        {message}
      </AlertDescription>
    </Alert>
  )
}
