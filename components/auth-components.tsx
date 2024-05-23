import { signIn, signOut } from "@/auth"
import { Button } from "./ui/button"

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
      <Button>Sign Out</Button>
    </form>
  )
}