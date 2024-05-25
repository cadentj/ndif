"use client";

import * as React from "react"

import { Button } from "./ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

import { useTheme } from "next-themes"


import { Toggle } from "@/components/ui/toggle"

import { Triangle, Book, SquareTerminal, Settings2, LogOut, Moon, Sun} from "lucide-react"
import Link from "next/link"

// import { SignOut } from "./auth-components"
export default function Sidebar() {
  const { setTheme } = useTheme()
  const [isDark, setIsDark] = React.useState("light")

  const toggleTheme = () => {
    setIsDark((prev) => (prev === "dark" ? "light" : "dark"))
    setTheme(isDark)
  }

  return <aside className="inset-y fixed left-0 z-20 flex h-full flex-col border-r">
      <TooltipProvider>
    <div className="border-b p-2">
      <Link href="/dashboard/chat ">
      <Button variant="outline" size="icon" aria-label="Home">
        {/* <Triangle className="size-5 fill-foreground" /> */}
        <SquareTerminal className="size-5" />
      </Button>
      </Link>
    </div>
    <nav className="grid gap-1 p-2">
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
            aria-label="Documentation"
            onClick={toggleTheme}
          >
            {isDark === "dark" ? <Sun className="size-5" /> : <Moon className="size-5" />}
          </Button>
        </TooltipTrigger>
        <TooltipContent side="right" sideOffset={5}>
          {isDark === "dark" ? "Light Mode" : "Dark Mode"}
        </TooltipContent>
      </Tooltip>
    </nav>
    </TooltipProvider >
  </aside >
}