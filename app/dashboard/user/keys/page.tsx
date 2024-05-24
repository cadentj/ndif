import { Metadata } from "next"
import Image from "next/image"

import { Separator } from "@/components/ui/separator"
import { Input } from "@/components/ui/input"

import { Button } from "@/components/ui/button"
import { CopyIcon, TrashIcon, PlusCircledIcon } from "@radix-ui/react-icons"

export const metadata: Metadata = {
    title: "Forms",
    description: "Advanced form example using react-hook-form and Zod.",
}

export default function Keys() {
    return (
        <div className="space-y-6">
            <div>
                <h3 className="text-lg font-medium">Keys</h3>
                <p className="text-sm text-muted-foreground">
                    Generate an API key.
                </p>
            </div>
            <Separator />
            <div className="flex w-full max-w-md items-center space-x-2">
                <Input disabled placeholder="YOUR API KEY" />
                <Button variant="outline" size="icon">
                  <CopyIcon className="h-4 w-20" />
                </Button>
                <Button variant="outline" size="icon">
                  <TrashIcon className="h-4 w-20" />
                </Button>
                <Button variant="outline" size="icon">
                  <CopyIcon className="h-4 w-20" />
                </Button>
            </div>
        </div>
    )
}
