"use client";

import React from "react";
import Timeline, { TimelineItem } from "@/components/ui/timeline-01-utils/timeline";
import { Badge } from "@/components/ui/badge";
import { SlitHeading, BrandAccentLine } from "@/components/ui";

export const SEO_APPROACH_TIMELINE_DATA: TimelineItem[] = [
  {
    title: "Understand",
    description:
      "We begin with an in-depth discovery into your business model, customer journey, core services, and commercial growth objectives. By analyzing competitive search dynamics and market demand, we uncover how your target audience searches, what questions they need answered, and where your current digital presence has untapped potential. This strategic foundation ensures every SEO initiative directly supports customer acquisition, pipeline revenue, and long-term brand authority rather than superficial vanity metrics.",
    date: "01 • Understand",
    image:
      "/Image-v1/seo_page/our_approuch/understand.jpg",
  },
  {
    title: "Review",
    description:
      "We conduct a comprehensive technical, architectural, and on-page audit across your entire website ecosystem. This includes evaluating crawl efficiency, indexing health, Core Web Vitals, mobile responsiveness, semantic tag structures, and internal linking networks. We also review historical ranking trajectories, existing content depth, and competitive search gaps to pinpoint technical bottlenecks that prevent search engine crawlers from accurately discovering, indexing, and ranking your high-value pages.",
    date: "02 • Review",
    image:
      "/Image-v1/seo_page/our_approuch/review.jpg",
  },
  {
    title: "Prioritise",
    description:
      "Rather than handing over an overwhelming, generic punch list of hundreds of minor tasks, we distill our audit findings into a focused, high-impact implementation roadmap. Every recommendation is scored by commercial impact, search intent value, and implementation complexity. Together, we establish a transparent, phased sprint plan that aligns with your engineering capacity, marketing goals, and priority business milestones for maximum return on effort.",
    date: "03 • Prioritise",
    image:
      "/Image-v1/seo_page/our_approuch/prioritize.jpg",
  },
  {
    title: "Improve",
    description:
      "Our team executes and collaborates on the agreed-upon technical enhancements, structured data schemas, Core Web Vitals performance tuning, and on-page content refinements. We optimize page titles, meta descriptions, content hierarchy, and semantic keyword coverage to satisfy both user intent and Google algorithms. Every update is systematically tested across production environments to safeguard site stability, speed, and search compliance.",
    date: "04 • Improve",
    image:
      "/Image-v1/seo_page/our_approuch/Improve.jpg",
  },
  {
    title: "Measure",
    description:
      "Sustainable SEO thrives on continuous measurement, data validation, and iterative refinement. Using Google Search Console, Google Analytics 4, and enterprise rank tracking tools, we monitor organic impressions, click-through rates, keyword shifts, and conversion events. As performance data matures, we identify emerging search opportunities, refine landing pages, and proactively adapt your SEO roadmap to algorithm updates and evolving market behavior.",
    date: "05 • Measure",
    image:
      "/Image-v1/seo_page/our_approuch/Measure.jpg",
  },
];

export interface TimelineBlock01Props {
  items?: TimelineItem[];
  eyebrow?: string;
  title?: string;
  description?: string;
  className?: string;
}

export const TimelineBlock01 = ({
  items = SEO_APPROACH_TIMELINE_DATA,
  eyebrow,
  title = "Our SEO approach",
  description = "A disciplined 5-stage framework designed to uncover practical search opportunities, prioritise impactful changes, and deliver sustained organic performance.",
  className,
}: TimelineBlock01Props) => {
  return (
    <section className={`overflow-hidden bg-background py-16 sm:py-24 lg:py-28 ${className || ""}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Block without rigid grid borders */}
        <div className="max-w-3xl mb-12 sm:mb-16 lg:mb-20 space-y-3.5">
          {eyebrow && (
            <Badge
              variant="outline"
              className="rounded-full px-3.5 py-1 text-xs font-semibold tracking-wider uppercase text-primary-orange border-primary-orange/30 bg-primary-orange/5"
            >
              {eyebrow}
            </Badge>
          )}
          <SlitHeading
            id="timeline-approach-heading"
            align="left"
            lines={[title]}
            slit={0}
            textColor="#161413"
            dotColor="#E4521B"
            className="text-3xl md:text-4xl lg:text-5xl leading-[1.12] tracking-[-0.03em]"
          />
          <BrandAccentLine align="left" className="my-3.5" />
          <p className="text-sm md:text-base text-muted-foreground leading-relaxed font-sans max-w-2xl">
            {description}
          </p>
        </div>

        {/* Timeline Items Track */}
        <div className="w-full">
          <Timeline items={items} />
        </div>
      </div>
    </section>
  );
};

export default TimelineBlock01;
