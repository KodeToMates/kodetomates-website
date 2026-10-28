"use client";

import React from "react";
import Timeline, { TimelineItem } from "@/components/ui/timeline-01-utils/timeline";
import { Badge } from "@/components/ui/badge";
import { SlitHeading, BrandAccentLine } from "@/components/ui";

export const SEO_APPROACH_TIMELINE_DATA: TimelineItem[] = [
  {
    title: "Understand",
    description:
      "Learn about your business, audience, services, competitors, and goals.",
    date: "01 • Understand",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200",
  },
  {
    title: "Review",
    description:
      "Assess the existing website and identify practical opportunities.",
    date: "02 • Review",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200",
  },
  {
    title: "Prioritise",
    description:
      "Agree on the changes that matter most and fit the project scope.",
    date: "03 • Prioritise",
    image:
      "https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=1200",
  },
  {
    title: "Improve",
    description:
      "Make or recommend the agreed technical, content, and page-level changes.",
    date: "04 • Improve",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200",
  },
  {
    title: "Measure",
    description:
      "Review available data and refine the approach as more information becomes available.",
    date: "05 • Measure",
    image:
      "https://images.unsplash.com/photo-1551288049-bbda38a10ad5?q=80&w=1200",
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
