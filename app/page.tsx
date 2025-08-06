import { Button } from "@/components/ui/button";
import { SignedIn, SignedOut, SignInButton } from "@clerk/nextjs";
//import Link from "next/link";
export default function Home() {
  return (
    <div className=" flex-col min-h-screen">
      <header className="bg-white border-b border-gray-500 py-4">
        <div className="container mx-auto px-4 flex items-center justify-between item-center">
          <h1 className="text-2xl font-bold">Form Builder</h1>
          <div className="bg-blue">
            <SignedOut>
              <SignInButton>
                <Button variant="outline">Sign In</Button>
              </SignInButton>
            </SignedOut>
            <SignedIn>
              <Button asChild>
                <a href="/dashboard">Dashboard</a>
              </Button>
              {/*<UserButton />*/}
            </SignedIn>
          </div>
        </div>
      </header>
      <div className="bg-blue-100 flex -1">
        <div className="container mx-auto px-4 py-20 text-center">
          <h2 className="text-4xl md:text-xl font-bold mb-6">
            Create Custom forms with Ease
          </h2>
          <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-2xl">
            Build forms, collect responses, and analyze data - all with this
            platform.
          </p>
            <SignedOut>
              <SignInButton>
                <Button variant="outline">Get Started</Button>
              </SignInButton>
            </SignedOut>
            <SignedIn></SignedIn>
        </div>
      </div>
    </div>
  );
}
