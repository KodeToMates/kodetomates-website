import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/sections/Footer";
import { Container } from "../../components/ui/Container";
import { ContactForm } from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact Us — KodeToMates",
  description: "Get in touch with the KodeToMates team. Let's discuss developer cohorts, mentorship, or hiring partnerships.",
};

const CONTACT_INFO = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="16" x="2" y="4" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    ),
    title: "Direct Email",
    value: "hello@kodetomates.com",
    description: "For admissions, inquiries, or support.",
    href: "mailto:hello@kodetomates.com",
    cta: "Send email",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 6 6 18" />
        <path d="m6 6 12 12" />
      </svg>
    ),
    title: "Discord Community",
    value: "discord.gg/kodetomates",
    description: "Chat with 500+ builders in real time.",
    href: "https://discord.gg",
    cta: "Join Discord",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    title: "Response Time",
    value: "Within 24 Hours",
    description: "Monday through Friday • Remote First",
    href: null,
    cta: null,
  },
];

export default function ContactPage() {
  return (
    <main className="w-full min-h-screen flex flex-col bg-[#F8F7F4] text-[#17202A]">
      <Navbar />

      {/* Main Content Area */}
      <div className="pt-32 pb-24 md:pt-36 md:pb-28 relative">
        {/* Glow ambient background effects */}
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[70vw] h-[350px] bg-[var(--color-brand-primary)]/10 blur-[150px] pointer-events-none rounded-full" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-[var(--color-brand-accent-soft)]/20 blur-[100px] pointer-events-none rounded-full" />

        <Container className="relative z-10">
          {/* Header */}
          <div className="max-w-3xl mb-14 md:mb-20">
            <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-[var(--color-brand-border)] mb-4 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[var(--color-brand-primary)] animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-wider text-[var(--color-brand-primary)]">
                Get In Touch
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#17202A] mb-6">
              Let&apos;s start a conversation.
            </h1>
            <p className="text-lg md:text-xl text-[var(--color-brand-secondary-text)] leading-relaxed">
              Have questions about pairing cohorts, community demos, or partnering with our engineering talent? Reach out to us directly.
            </p>
          </div>

          {/* Grid Layout */}
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            {/* Left Column: Direct Info Cards */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              <div className="flex flex-col gap-4">
                {CONTACT_INFO.map((info, idx) => (
                  <div
                    key={idx}
                    className="bg-white border border-[var(--color-brand-border)] hover:border-[var(--color-brand-primary)]/40 rounded-2xl p-6 transition-all shadow-sm"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-[var(--color-brand-primary)]/10 text-[var(--color-brand-primary)] flex items-center justify-center shrink-0">
                        {info.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <span className="text-xs font-semibold text-[var(--color-brand-secondary-text)] uppercase tracking-wider">
                          {info.title}
                        </span>
                        <h4 className="text-lg font-bold text-[#17202A] mt-0.5 truncate">
                          {info.value}
                        </h4>
                        <p className="text-sm text-[var(--color-brand-secondary-text)] mt-1">
                          {info.description}
                        </p>

                        {info.href && info.cta && (
                          <a
                            href={info.href}
                            target={info.href.startsWith("http") ? "_blank" : undefined}
                            rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                            className="inline-flex items-center gap-1.5 text-xs font-bold text-[var(--color-brand-primary)] hover:underline mt-3"
                          >
                            {info.cta} &rarr;
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Quick FAQ Callout Box */}
              <div className="bg-white border border-[var(--color-brand-border)] rounded-2xl p-6 text-sm shadow-sm">
                <h5 className="font-bold text-[#17202A] mb-1.5 flex items-center gap-2">
                  <span>💡</span> Looking for quick answers?
                </h5>
                <p className="text-[var(--color-brand-secondary-text)] mb-4">
                  Check out our curated list of frequently asked questions about cohorts, pairing, and schedules.
                </p>
                <Link
                  href="/#faq"
                  className="inline-flex items-center gap-2 text-xs font-bold text-[var(--color-brand-primary)] hover:underline transition-colors"
                >
                  View FAQ on Homepage &rarr;
                </Link>
              </div>
            </div>

            {/* Right Column: Contact Form */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>
          </div>
        </Container>
      </div>

      <Footer />
    </main>
  );
}
