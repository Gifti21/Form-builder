import { Button } from "@/components/ui/button";
import Link from "next/dist/client/link";
import React from "react";

export default function Dashboard() {
  return (
    <div className="space-y-6 ">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Welcome...</h1>
        <p className="text-gray-500 mt-1 ">Manage your forms and responses.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-pink-200 rounded-lg shadow p-6 border">
          <h2 className="text-xl font-medium">Your Forms</h2>
          <p className="text-3xl font-bold mt-2">
            Here you can manage your forms.
          </p>
          <Button className="mt-4" asChild>
            <Link href="/dashboard/forms">View All Forms</Link>
          </Button>
        </div>
        <div className="bg-pink-200 rounded-lg shadow p-6 border">
          <h2 className="text-xl font-medium">Total response</h2>
          <p className="text-3xl font-bold mt-2">100</p>
        </div>
        <div className="bg-pink-200 rounded-lg shadow p-6 border">
          <h2 className="text-xl font-medium">Create New</h2>
          <p className="text-gray-500  mt-2">Start building a new form</p>
          <Button className="mt-4" asChild>
            <Link href="/dashboard/forms">Create Form</Link>
          </Button>
        </div>
      </div>
      <div className="bg-purple-300 rounded-lg shadow p-6 border mt-8">
        <h2 className="text-xl font-medium">Recent Forms</h2>
        <div className="flex items-center justify-between pb-4"> </div>
        <div>
          <h3>
            <b>This is the title</b>
          </h3>
          <p>
            <em>responses. Created on 6 August 2025</em>
          </p>
        </div>
        <div className="flex gap-2">
          <Button>
            <Link href={"/dashboard/forms/123"}>View Details</Link>
          </Button>
          <Button>
            <Link href={"/dashboard/forms/123/responses"}>Responses</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
