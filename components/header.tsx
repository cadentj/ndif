// components/Header.tsx

import Link from "next/link";
import { Bell, CircleUser, Home, LineChart, Menu, Package, Search, ShoppingCart, Waypoints, Users } from "lucide-react";
import { SignOut } from "@/components/auth-components";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

interface HeaderProps {
  children?: React.ReactNode;
}

export default function Header({ children }: HeaderProps) {
  return (
    <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="shrink-0 md:hidden">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="flex flex-col">
          <nav className="grid gap-2 text-lg font-medium">
            <Link href="#" className="flex items-center gap-2 text-lg font-semibold">
              <Waypoints className="h-6 w-6" />
              <span className="sr-only">National Deep Inference Fabric</span>
            </Link>
            <Link href="/dashboard" className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground">
              <Package className="h-5 w-5" />
              Profile
            </Link>
            <Link href="/dashboard/chat" className="mx-[-0.65rem] flex items-center gap-4 rounded-xl bg-muted px-3 py-2 text-foreground hover:text-foreground">
              <ShoppingCart className="h-5 w-5" />
              Chat
            </Link>
          </nav>
        </SheetContent>
      </Sheet>
      <div className="w-full flex-1">
        {children}
      </div>
      <SignOut />
    </header>
  );
}