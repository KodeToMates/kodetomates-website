"use client";

import React, { useState } from "react";

const INQUIRY_TYPES = [
  "Join a Cohort",
  "Mentorship & Coaching",
  "Hire Developers / Talent",
  "Partnership & Sponsoring",
  "General Support",
];

const PREFERRED_METHODS = ["Email", "Discord", "WhatsApp / Phone"];

export function ContactForm() {
  const [selectedType, setSelectedType] = useState("Join a Cohort");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [socialLink, setSocialLink] = useState("");
  const [preferredMethod, setPreferredMethod] = useState("Email");
  const [message, setMessage] = useState("");
  const [agreeConsent, setAgreeConsent] = useState(true);
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim() || !email.trim() || !subject.trim() || !message.trim()) return;

    setStatus("submitting");

    // Simulate reliable form submission
    setTimeout(() => {
      setStatus("success");
    }, 800);
  };

  const handleReset = () => {
    setFullName("");
    setEmail("");
    setPhone("");
    setSubject("");
    setSocialLink("");
    setPreferredMethod("Email");
    setMessage("");
    setSelectedType("Join a Cohort");
    setAgreeConsent(true);
    setStatus("idle");
  };

  if (status === "success") {
    return (
      <div className="bg-white border border-[var(--color-brand-border)] rounded-3xl p-8 md:p-12 text-center flex flex-col items-center justify-center min-h-[520px] shadow-xl">
        <div className="w-16 h-16 rounded-full bg-[var(--color-brand-primary)]/15 text-[var(--color-brand-primary)] flex items-center justify-center text-3xl mb-6 shadow-inner animate-fade-up">
          ✓
        </div>
        <h3 className="text-2xl md:text-3xl font-bold text-[#17202A] mb-3">
          Message Received!
        </h3>
        <p className="text-[var(--color-brand-secondary-text)] max-w-md mx-auto mb-6 text-base leading-relaxed">
          Thanks for reaching out, <span className="text-[#17202A] font-semibold">{fullName}</span>! We&apos;ve logged your inquiry regarding <span className="text-[var(--color-brand-primary)] font-semibold">{selectedType}</span>. Our team will contact you via <span className="text-[#17202A] font-semibold">{preferredMethod}</span> ({preferredMethod === "WhatsApp / Phone" && phone ? phone : email}) within 24 hours.
        </p>
        <div className="bg-[#F8F7F4] border border-[var(--color-brand-border)] rounded-2xl px-6 py-4 mb-8 text-left text-xs text-[var(--color-brand-secondary-text)] max-w-sm w-full">
          <div className="flex justify-between py-1 border-b border-[var(--color-brand-border)]/60">
            <span>Subject:</span> <strong className="text-[#17202A]">{subject}</strong>
          </div>
          <div className="flex justify-between py-1">
            <span>Ticket Status:</span> <span className="text-emerald-600 font-semibold">● Open & Assigned</span>
          </div>
        </div>
        <button
          onClick={handleReset}
          className="inline-flex items-center gap-2 bg-white hover:bg-[#F8F7F4] text-[#17202A] font-bold px-7 py-3 rounded-full border border-[var(--color-brand-border)] transition-all cursor-pointer shadow-sm"
        >
          Send another message &rarr;
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white border border-[var(--color-brand-border)] rounded-3xl p-8 md:p-10 shadow-xl">
      <div className="mb-8">
        <h3 className="text-2xl font-bold text-[#17202A] mb-2">Send us a message</h3>
        <p className="text-[var(--color-brand-secondary-text)] text-sm">
          Please fill out the details below so we can direct your request to the right team.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        {/* Inquiry Type Pill Selector */}
        <div>
          <label className="block text-xs font-bold text-[var(--color-brand-secondary-text)] uppercase tracking-wider mb-3">
            Inquiry Category <span className="text-[var(--color-brand-primary)]">*</span>
          </label>
          <div className="flex flex-wrap gap-2">
            {INQUIRY_TYPES.map((type) => {
              const isSelected = selectedType === type;
              return (
                <button
                  type="button"
                  key={type}
                  onClick={() => setSelectedType(type)}
                  className={`text-xs md:text-sm font-semibold px-4 py-2 rounded-full border transition-all cursor-pointer ${
                    isSelected
                      ? "bg-[var(--color-brand-primary)] text-white border-[var(--color-brand-primary)] shadow-md shadow-[var(--color-brand-primary)]/20"
                      : "bg-[#F8F7F4] text-[#17202A]/80 border-[var(--color-brand-border)] hover:border-[var(--color-brand-primary)]/40 hover:text-[#17202A]"
                  }`}
                >
                  {type}
                </button>
              );
            })}
          </div>
        </div>

        {/* Name and Email */}
        <div className="grid sm:grid-cols-2 gap-5">
          <div>
            <label htmlFor="fullName" className="block text-xs font-bold text-[var(--color-brand-secondary-text)] uppercase tracking-wider mb-2">
              Full Name <span className="text-[var(--color-brand-primary)]">*</span>
            </label>
            <input
              id="fullName"
              type="text"
              required
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="e.g. Alex Chen"
              className="w-full bg-[#F8F7F4] border border-[var(--color-brand-border)] rounded-2xl px-4 py-3.5 text-[#17202A] placeholder-[var(--color-brand-secondary-text)] focus:outline-none focus:border-[var(--color-brand-primary)] focus:ring-2 focus:ring-[var(--color-brand-primary)]/20 transition-all text-sm"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-xs font-bold text-[var(--color-brand-secondary-text)] uppercase tracking-wider mb-2">
              Email Address <span className="text-[var(--color-brand-primary)]">*</span>
            </label>
            <input
              id="email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="alex@example.com"
              className="w-full bg-[#F8F7F4] border border-[var(--color-brand-border)] rounded-2xl px-4 py-3.5 text-[#17202A] placeholder-[var(--color-brand-secondary-text)] focus:outline-none focus:border-[var(--color-brand-primary)] focus:ring-2 focus:ring-[var(--color-brand-primary)]/20 transition-all text-sm"
            />
          </div>
        </div>

        {/* Phone & Subject */}
        <div className="grid sm:grid-cols-2 gap-5">
          <div>
            <label htmlFor="phone" className="block text-xs font-bold text-[var(--color-brand-secondary-text)] uppercase tracking-wider mb-2">
              Phone / WhatsApp Number <span className="text-xs font-normal text-[var(--color-brand-secondary-text)]/60">(Optional)</span>
            </label>
            <input
              id="phone"
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="+1 (555) 019-2834"
              className="w-full bg-[#F8F7F4] border border-[var(--color-brand-border)] rounded-2xl px-4 py-3.5 text-[#17202A] placeholder-[var(--color-brand-secondary-text)] focus:outline-none focus:border-[var(--color-brand-primary)] focus:ring-2 focus:ring-[var(--color-brand-primary)]/20 transition-all text-sm"
            />
          </div>

          <div>
            <label htmlFor="subject" className="block text-xs font-bold text-[var(--color-brand-secondary-text)] uppercase tracking-wider mb-2">
              Subject Line <span className="text-[var(--color-brand-primary)]">*</span>
            </label>
            <input
              id="subject"
              type="text"
              required
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              placeholder="e.g. Inquiring about Cohort 03 timeline"
              className="w-full bg-[#F8F7F4] border border-[var(--color-brand-border)] rounded-2xl px-4 py-3.5 text-[#17202A] placeholder-[var(--color-brand-secondary-text)] focus:outline-none focus:border-[var(--color-brand-primary)] focus:ring-2 focus:ring-[var(--color-brand-primary)]/20 transition-all text-sm"
            />
          </div>
        </div>

        {/* Profile / Portfolio Link & Preferred Contact Channel */}
        <div className="grid sm:grid-cols-2 gap-5">
          <div>
            <label htmlFor="socialLink" className="block text-xs font-bold text-[var(--color-brand-secondary-text)] uppercase tracking-wider mb-2">
              LinkedIn / GitHub / Portfolio <span className="text-xs font-normal text-[var(--color-brand-secondary-text)]/60">(Optional)</span>
            </label>
            <input
              id="socialLink"
              type="url"
              value={socialLink}
              onChange={(e) => setSocialLink(e.target.value)}
              placeholder="https://github.com/username"
              className="w-full bg-[#F8F7F4] border border-[var(--color-brand-border)] rounded-2xl px-4 py-3.5 text-[#17202A] placeholder-[var(--color-brand-secondary-text)] focus:outline-none focus:border-[var(--color-brand-primary)] focus:ring-2 focus:ring-[var(--color-brand-primary)]/20 transition-all text-sm"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-[var(--color-brand-secondary-text)] uppercase tracking-wider mb-2">
              Preferred Reply Channel
            </label>
            <div className="grid grid-cols-3 gap-2">
              {PREFERRED_METHODS.map((method) => {
                const isSelected = preferredMethod === method;
                return (
                  <button
                    type="button"
                    key={method}
                    onClick={() => setPreferredMethod(method)}
                    className={`py-3 px-2 rounded-2xl border text-xs font-semibold transition-all text-center cursor-pointer truncate ${
                      isSelected
                        ? "bg-[var(--color-brand-primary)] text-white border-[var(--color-brand-primary)] shadow-sm"
                        : "bg-[#F8F7F4] border-[var(--color-brand-border)] text-[#17202A]/80 hover:text-[#17202A]"
                    }`}
                  >
                    {method}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Message */}
        <div>
          <div className="flex justify-between items-center mb-2">
            <label htmlFor="message" className="block text-xs font-bold text-[var(--color-brand-secondary-text)] uppercase tracking-wider">
              Your Message <span className="text-[var(--color-brand-primary)]">*</span>
            </label>
            <span className="text-[10px] text-[var(--color-brand-secondary-text)]/60">
              {message.length} characters
            </span>
          </div>
          <textarea
            id="message"
            required
            rows={5}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Tell us what you'd like to build, what skills you bring, or details about the project you're proposing..."
            className="w-full bg-[#F8F7F4] border border-[var(--color-brand-border)] rounded-2xl p-4 text-[#17202A] placeholder-[var(--color-brand-secondary-text)] focus:outline-none focus:border-[var(--color-brand-primary)] focus:ring-2 focus:ring-[var(--color-brand-primary)]/20 transition-all text-sm resize-none"
          />
        </div>

        {/* Consent Checkbox */}
        <div className="flex items-start gap-3">
          <input
            type="checkbox"
            id="consent"
            checked={agreeConsent}
            onChange={(e) => setAgreeConsent(e.target.checked)}
            required
            className="mt-1 h-4 w-4 rounded border-[var(--color-brand-border)] bg-white text-[var(--color-brand-primary)] focus:ring-[var(--color-brand-primary)] focus:ring-offset-0 cursor-pointer accent-[#DD6E42]"
          />
          <label htmlFor="consent" className="text-xs text-[var(--color-brand-secondary-text)] leading-relaxed cursor-pointer select-none">
            I agree to allow KodeToMates to store and process my information to reply to this inquiry. We respect your privacy and never spam.
          </label>
        </div>

        {/* Submit Button */}
        <div className="pt-2">
          <button
            type="submit"
            disabled={status === "submitting"}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[var(--color-brand-primary)] hover:bg-[var(--color-brand-primary-hover)] disabled:opacity-60 text-white font-bold px-9 py-4 rounded-full shadow-lg shadow-[var(--color-brand-primary)]/25 hover:shadow-xl transition-all cursor-pointer"
          >
            {status === "submitting" ? (
              <>
                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                Sending message...
              </>
            ) : (
              <>
                Send Message &rarr;
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
