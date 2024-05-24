import { signIn, signOut } from "@/auth"
import { Button } from "./ui/button"
import { LogOut } from "lucide-react"
export function SignIn({
  provider,
}: { provider?: string } & React.ComponentPropsWithRef<typeof Button>) {
  return (
    <form
      action={async () => {
        "use server"
        await signIn(provider)
      }}
    >
      <Button>Sign In</Button>
    </form>
  )
}

export function SignOut(props: React.ComponentPropsWithRef<typeof Button>) {
  return (
    <form
      action={async () => {
        'use server';
        await signOut();
      }}
    >
      <Button
            variant="ghost"
            size="icon"
            className="mt-auto rounded-lg"
            aria-label="Account"
          >
            <LogOut className="size-5" />
          </Button>
    </form>
  )
}