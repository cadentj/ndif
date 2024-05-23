import { auth } from "@/auth"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

import { CopyIcon, TrashIcon, PlusCircledIcon } from "@radix-ui/react-icons"

import { fetchApiKey } from "../api/users/data"

import { complete } from "../api/ndif/completions"

export default async function Profile() {
  const session = await auth()

  if (!session.user) return null

  const apiKey = fetchApiKey(session.user.email)

  // const response = await complete("Hello, world!")

  return (
    <div className="space-y-6 lg:max-w-2xl">
      <div>
        <h3 className="text-lg font-medium">Welcome {session.user?.name}</h3>
        <p className="text-sm text-muted-foreground">
          {/* {response} */}
        </p>
      </div>

      <Separator />

      <Table>
        <TableCaption>
          <Button variant="ghost" size="sm">
            <PlusCircledIcon className="mr-2 h-4 w-4" />
            Create a new key
          </Button>
        </TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Key</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>{apiKey}</TableCell>
            <TableCell>
              <Button variant="outline" size="icon" className="mr-2">
                <CopyIcon className="h-4 w-4"/>
              </Button>
              <Button variant="outline" size="icon">
                <TrashIcon className="h-4 w-4"/>
              </Button>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  )
}
