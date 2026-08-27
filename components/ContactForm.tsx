"use client";

import { useState, FormEvent } from "react";
import { FiCheckCircle, FiSend } from "react-icons/fi";

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const INITIAL_STATE: FormState = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(INITIAL_STATE);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  function handleChange(
    field: keyof FormState
  ): (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void {
    return (e) => setForm((prev) => ({ ...prev, [field]: e.target.value }));
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSubmitting(true);

    // Prototype only: simulate a network call instead of hitting a real API.
    window.setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      setForm(INITIAL_STATE);
    }, 900);
  }

  if (submitted) {
    return (
      <div className="bg-[#F3EEE6] rounded-lg p-8 text-center">
        <FiCheckCircle className="mx-auto text-4xl text-[#3f5c3a]" />
        <h3 className="font-serif text-2xl text-[#1F2617] mt-4">
          Message Sent
        </h3>
        <p className="text-[#5B6152] text-sm mt-2 max-w-sm mx-auto">
          Thanks for reaching out &ndash; our team typically replies within
          one business day.
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="mt-6 text-sm text-[#2B3222] underline underline-offset-4 decoration-[#2B3222]/40 hover:decoration-[#2B3222]"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-sm text-[#2B3222] mb-1.5">
            Full Name
          </label>
          <input
            id="name"
            type="text"
            required
            value={form.name}
            onChange={handleChange("name")}
            placeholder="Jane Doe"
            className="w-full bg-white border border-[#2B3222]/20 rounded-sm px-4 py-3 text-sm focus:outline-none focus:border-[#2B3222]"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm text-[#2B3222] mb-1.5">
            Email Address
          </label>
          <input
            id="email"
            type="email"
            required
            value={form.email}
            onChange={handleChange("email")}
            placeholder="jane@example.com"
            className="w-full bg-white border border-[#2B3222]/20 rounded-sm px-4 py-3 text-sm focus:outline-none focus:border-[#2B3222]"
          />
        </div>
      </div>

      <div>
        <label htmlFor="subject" className="block text-sm text-[#2B3222] mb-1.5">
          Subject
        </label>
        <input
          id="subject"
          type="text"
          required
          value={form.subject}
          onChange={handleChange("subject")}
          placeholder="Order question, design help, etc."
          className="w-full bg-white border border-[#2B3222]/20 rounded-sm px-4 py-3 text-sm focus:outline-none focus:border-[#2B3222]"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm text-[#2B3222] mb-1.5">
          Message
        </label>
        <textarea
          id="message"
          required
          rows={5}
          value={form.message}
          onChange={handleChange("message")}
          placeholder="Tell us a bit about what you're looking for..."
          className="w-full bg-white border border-[#2B3222]/20 rounded-sm px-4 py-3 text-sm focus:outline-none focus:border-[#2B3222] resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={submitting}
        className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#2B3222] hover:bg-[#3a4530] disabled:opacity-60 transition-colors text-white text-sm px-7 py-3.5 rounded-sm"
      >
        {submitting ? (
          "Sending..."
        ) : (
          <>
            Send Message <FiSend />
          </>
        )}
      </button>
    </form>
  );
}
