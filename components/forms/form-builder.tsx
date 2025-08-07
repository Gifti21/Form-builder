"use client";
import React from "react";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { FormEvent, useState } from "react";

export default function FormBuilder() {
  const [form, setForm] = useState({
    title: "",
    description: "",
    questions: [
      {
        id: "1",
        text: "",
      },
      {
        id: "2",
        text: "",
      },
    ],
  });

  const addQuestion = () => {
    setForm((prev) => ({
      ...prev,
      questions: [...prev.questions, { id: Date.now().toString(), text: "" }],
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(form);
  };

  const handleQuestionChange = (id: string, value: string) => {
    setForm((prev) => ({
      ...prev,
      questions: prev.questions.map((question) =>
        question.id === id ? { ...question, text: value } : question
      ),
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
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
          <label htmlFor="description">
            <b> Description (Optional)</b>
          </label>
          <Textarea
            id="description"
            value={form.description}
            onChange={(e) => setForm({ ...form, description: e.target.value })}
            placeholder="Enter form description"
            className="mt-2"
          />
        </div>
      </div>
      <div className="space-p-6 font-bold">
        <div className="flex items-center justify-between">
          <h3>Questions</h3>
          <Button
            variant="outline"
            type="button"
            className=" hover:text-blue-500"
            onClick={addQuestion}
          >
            Add Question
          </Button>
        </div>
        {form.questions.map((question, index) => (
          <div key={question.id} className="space-y-2 p-4 border rounded-md">
            <div className="flex items-center justify-between">
              <Label htmlFor={`Question-${index}`}>Question {index + 1} </Label>
              <Button
                variant="outline"
                type="button"
                size="sm"
                className="text-black-500 hover:text-gray-500"
              >
                Remove
              </Button>
            </div>
            <Textarea
              id={`Question-${index}`}
              value={question.text}
              onChange={(e) =>
                handleQuestionChange(question.id, e.target.value)
              }
              placeholder="Enter your question"
              className="mt-1"
            />
          </div>
        ))}
      </div>
      <div className="flex gap-2 mt-2">
        <Button
          className="hover:text-red-500"
          type="button"
          variant="outline"
          onClick={() => {}}
        >
          Cancel
        </Button>
        <Button
          type="submit"
          className="hover:text-blue-500 bg-blue-400 text-white-500"
          variant="outline"
        >
          Save
        </Button>
      </div>
    </form>
  );
}
