"use client";
import React from "react";
import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
export default function FormBuilder() {
  const [form, setForm] = useState({
    title: String,
    description: String,
    questions: [
      {
        id: "1",
        text: "",
      },
    ],
  });
  return (
    <form className="space-y-8">
      <div className="space-y-4">
        <div>
          <label htmlFor="title">Title</label>
          <Input
            id="title"
            value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
            placeholder="Enter form title"
            className="mt-2"
          />
        </div>
        <br></br>
        <div>
          <label htmlFor="description">Description (Optional)</label>
          <Textarea
            id="description"
            value={form.description}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
            placeholder="Enter form description"
            className="mt-2"
          />
        </div>
      </div>
    </form>
  );
}
