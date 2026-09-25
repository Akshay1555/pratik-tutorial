"use client";

import { useState } from "react";
import { CheckCircle, ArrowRight } from "@/components/Icons";

const courseOptions = ["NEET (UG)", "MHT-CET (PCB)", "PT-SAT (Scholarship Test)", "Career Guidance", "Other"];

const initialState = { name: "", phone: "", email: "", course: courseOptions[0], message: "" };

export default function EnquiryForm() {
  const [values, setValues] = useState(initialState);
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [errorMsg, setErrorMsg] = useState("");

  function update(field, value) {
    setValues((v) => ({ ...v, [field]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const data = await res.json();

      if (!res.ok || !data.ok) {
        throw new Error(data.error || "Please check the form and try again.");
      }

      setStatus("success");
      setValues(initialState);
    } catch (err) {
      setStatus("error");
      setErrorMsg(err.message);
    }
  }

  if (status === "success") {
    return (
      <div className="card flex flex-col items-center gap-3 p-10 text-center">
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-teal-soft text-teal">
          <CheckCircle className="h-7 w-7" />
        </span>
        <h3 className="font-heading text-xl font-bold text-navy">
          Thank you! Your enquiry has been received.
        </h3>
        <p className="max-w-sm text-sm text-navy/60">
          Our team will get in touch with you shortly. For anything urgent, feel free to
          call or WhatsApp us directly.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="btn-outline mt-2"
        >
          Send another enquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="card space-y-5 p-6 sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-semibold text-navy">
            Full name
          </label>
          <input
            id="name"
            required
            value={values.name}
            onChange={(e) => update("name", e.target.value)}
            placeholder="Your name"
            className="w-full rounded-lg border border-black/10 px-4 py-2.5 text-sm text-navy outline-none focus:border-teal"
          />
        </div>
        <div>
          <label htmlFor="phone" className="mb-1.5 block text-sm font-semibold text-navy">
            Phone number
          </label>
          <input
            id="phone"
            type="tel"
            required
            value={values.phone}
            onChange={(e) => update("phone", e.target.value)}
            placeholder="10-digit mobile number"
            className="w-full rounded-lg border border-black/10 px-4 py-2.5 text-sm text-navy outline-none focus:border-teal"
          />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm font-semibold text-navy">
            Email address
          </label>
          <input
            id="email"
            type="email"
            value={values.email}
            onChange={(e) => update("email", e.target.value)}
            placeholder="you@example.com"
            className="w-full rounded-lg border border-black/10 px-4 py-2.5 text-sm text-navy outline-none focus:border-teal"
          />
        </div>
        <div>
          <label htmlFor="course" className="mb-1.5 block text-sm font-semibold text-navy">
            Interested in
          </label>
          <select
            id="course"
            value={values.course}
            onChange={(e) => update("course", e.target.value)}
            className="w-full rounded-lg border border-black/10 bg-white px-4 py-2.5 text-sm text-navy outline-none focus:border-teal"
          >
            {courseOptions.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-semibold text-navy">
          Message (optional)
        </label>
        <textarea
          id="message"
          rows={4}
          value={values.message}
          onChange={(e) => update("message", e.target.value)}
          placeholder="Tell us a bit about what you're looking for..."
          className="w-full resize-none rounded-lg border border-black/10 px-4 py-2.5 text-sm text-navy outline-none focus:border-teal"
        />
      </div>

      {status === "error" && (
        <p className="rounded-lg bg-red-50 px-4 py-2.5 text-sm text-red-600">{errorMsg}</p>
      )}

      <button type="submit" disabled={status === "loading"} className="btn-primary w-full sm:w-auto">
        {status === "loading" ? "Sending..." : "Send Enquiry"}
        {status !== "loading" && <ArrowRight className="h-4 w-4" />}
      </button>
    </form>
  );
}
