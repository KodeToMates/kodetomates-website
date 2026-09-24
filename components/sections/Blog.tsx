import React from "react";
import { Section } from "../ui/Section";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { Reveal } from "../ui/Reveal";
import { BLOG } from "../../lib/content";

export function Blog() {
  return (
    <Section id="blog" background="cream">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <SectionHeading 
            eyebrow="Resources" 
            heading={BLOG.heading} 
          />
          <Reveal delay={200}>
            <button className="px-7 py-3.5 rounded-full inline-flex items-center gap-2 font-bold bg-white text-[var(--color-brand-deep-green)] border border-[var(--color-brand-light-sage)]/30 hover:bg-[var(--color-brand-cream)] shadow-sm transition-all whitespace-nowrap">
              Read all posts &rarr;
            </button>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {BLOG.posts.map((post, i) => (
            <Reveal key={i} delay={i * 150} className="flex">
              <a href="#" className="group flex flex-col bg-white rounded-3xl border border-[var(--color-brand-tan)]/40 overflow-hidden shadow-sm hover:shadow-md transition-all hover:-translate-y-1.5 w-full">
                <div className="w-full h-48 bg-gradient-to-tr from-[var(--color-brand-clay)]/40 to-[var(--color-brand-cream)] group-hover:scale-105 transition-transform duration-500" />
                
                <div className="p-6 flex flex-col flex-1 bg-white relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-[var(--color-brand-light-sage)]/20 text-[var(--color-brand-sage)] uppercase tracking-wide">
                      {post.tag}
                    </span>
                    <span className="text-xs text-[var(--color-brand-deep-green)]/50">{post.readTime}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-[var(--color-brand-deep-green)] mb-6 group-hover:text-[var(--color-brand-sage)] transition-colors">
                    {post.title}
                  </h3>
                  
                  <div className="mt-auto pt-4 border-t border-[var(--color-brand-light-sage)]/20 text-sm text-[var(--color-brand-deep-green)]/60 font-medium">
                    {post.date}
                  </div>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
