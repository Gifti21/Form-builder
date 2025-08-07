import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
//import { UserButton } from "@clerk/clerk-react";

export default function Header() {
  return (
    <header className="bg-background border-b ">
      <div className="container flex h-16 items-center justify-between px-4 mx-auto ">
        <div className="flex items-center gap-6">
          <Link href="/" className="text-2xl font-bold">
            Form Builder
          </Link>
          <nav className="flex gap-6">
            <Link
              href="/dashboard"
              className="text-muted-foreground hover:text-foreground transition-colors "
            >
              Dashboard
            </Link>
            <Link
              href="/dashboard/forms"
              className="text-muted-foreground hover:text-foreground transition-colors "
            >
              My Forms
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-4 text-bold">
          <Button asChild variant="outline" size="sm">
            <Link href="/dashboard/forms/create">Create Form</Link>
          </Button>
          <UserButton />
        </div>
      </div>
    </header>
  );
}
