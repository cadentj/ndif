import { Button } from "./ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

import { Triangle, Book, SquareTerminal, Settings2, LogOut } from "lucide-react"
import Link from "next/link"

import { SignOut } from "./auth-components"
export default function Sidebar() {
  return <aside className="inset-y fixed left-0 z-20 flex h-full flex-col border-r">
      <TooltipProvider>
    <div className="border-b p-2">
      <Link href="/dashboard/user ">
      <Button variant="outline" size="icon" aria-label="Home">
        <Triangle className="size-5 fill-foreground" />
      </Button>
      </Link>
    </div>
    <nav className="grid gap-1 p-2">
      <Tooltip>
        <TooltipTrigger asChild>
          <Link
            href="/dashboard/chat"
          >
          <Button
            variant="ghost"
            size="icon"
            className="rounded-lg bg-muted"
            aria-label="Playground"
          >
            <SquareTerminal className="size-5" />
          </Button>
          </Link>
        </TooltipTrigger>
        <TooltipContent side="right" sideOffset={5}>
          Playground
        </TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            className="rounded-lg"
            aria-label="Documentation"
          >
            <Book className="size-5" />
          </Button>
        </TooltipTrigger>
        <TooltipContent side="right" sideOffset={5}>
          Documentation
        </TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            className="rounded-lg"
            aria-label="Settings"
          >
            <Settings2 className="size-5" />
          </Button>
        </TooltipTrigger>
        <TooltipContent side="right" sideOffset={5}>
          Settings
        </TooltipContent>
      </Tooltip>
    </nav>
    <nav className="mt-auto grid gap-1 p-2">
      <Tooltip>
        <TooltipTrigger asChild>
          <SignOut/>
        </TooltipTrigger>
        <TooltipContent side="right" sideOffset={5}>
          Account
        </TooltipContent>
      </Tooltip>
    </nav>
    </TooltipProvider >
  </aside >
}