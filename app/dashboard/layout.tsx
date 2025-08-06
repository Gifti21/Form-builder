import React from "react";
import Header from "@/components/layout/header";
import { auth } from "@clerk/nextjs/server";
export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { userId, redirectToSignIn } = await auth();
  if (!userId) return redirectToSignIn();
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 p-6 bg-gray-100 container mx-auto">
        {children}
      </main>
    </div>
  );
}
