// app/components/Navbar.tsx
"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, Search, ShoppingCart } from "lucide-react";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { ModeToggle } from '@/Shadcn-component/darktheme/darktheme_toggle';
import '@/app/globals.css';


export default function Navbar() {
  return (
    <nav className="w-full flex items-center justify-between p-4 bg-white dark:bg-black text-black dark:text-white">
      {/* Left: Logo + Nav Links */}
      <div className="flex items-center gap-6">
        <Link href="/" className="text-xl font-bold">CareSkin</Link>
        <div className="hidden md:flex gap-4 items-center">
          <Link href="/home"><Button variant="ghost">Home</Button></Link>
          <Link href="/about"><Button variant="ghost">About</Button></Link>
          <Link href="/shop"><Button variant="ghost">Shop</Button></Link>
        </div>
      </div>

      {/* Right: Search, Cart, Dark Mode (desktop) */}
      <div className="hidden md:flex items-center gap-4">
        <Button variant="ghost" size="icon">
          <Search className="w-5 h-5" />
        </Button>
        <Button variant="ghost" size="icon">
          <ShoppingCart className="w-5 h-5" />
        </Button>
        <ModeToggle />
      </div>

      {/* Mobile: Search, Cart, Dark Mode, Hamburger */}
      <div className="md:hidden flex items-center gap-2">
        <Button variant="ghost" size="icon">
          <Search className="w-5 h-5" />
        </Button>
        <Button variant="ghost" size="icon">
          <ShoppingCart className="w-5 h-5" />
        </Button>

        {/* Dark mode toggle next to hamburger */}
        <ModeToggle />

        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon">
              <Menu className="w-5 h-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <div className="flex flex-col gap-4 mt-8">
              <Link href="/home"><Button variant="ghost" className="w-full">Home</Button></Link>
              <Link href="/about"><Button variant="ghost" className="w-full">About</Button></Link>
              <Link href="/shop"><Button variant="ghost" className="w-full">Shop</Button></Link>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}
