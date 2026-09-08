"use client";

import { useState, FormEvent } from "react";

type Status = "idle" | "sending" | "sent" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <p className="eyebrow">Or send a message</p>
      <input
        required
        name="name"
        placeholder="Your name"
        className="border-b border-line bg-transparent py-2 font-body text-sm text-paper outline-none placeholder:text-graphite focus:border-brass"
      />
      <input
        required
        type="email"
        name="email"
        placeholder="Your email"
        className="border-b border-line bg-transparent py-2 font-body text-sm text-paper outline-none placeholder:text-graphite focus:border-brass"
      />
      <textarea
        required
        name="message"
        rows={3}
        placeholder="What are you working on?"
        className="resize-none border-b border-line bg-transparent py-2 font-body text-sm text-paper outline-none placeholder:text-graphite focus:border-brass"
      />
      <button
        type="submit"
        disabled={status === "sending"}
        className="mt-2 w-fit border border-paper px-6 py-3 font-mono text-[11px] uppercase tracking-wide2 transition-colors hover:bg-paper hover:text-ink disabled:opacity-50"
      >
        {status === "sending" && "Sending…"}
        {status === "idle" && "Send message"}
        {status === "sent" && "Sent — thank you"}
        {status === "error" && "Something went wrong — try again"}
      </button>
    </form>
  );
}
