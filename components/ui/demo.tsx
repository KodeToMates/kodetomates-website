'use client'

import React from 'react'
import Component from "@/components/ui/blogs"
import { NotFoundPage } from "@/components/ui/404-page-not-found"
import { DropdownNavigation } from "@/components/ui/dropdown-navigation"
import {
  Cpu,
  Globe,
  Eye,
  Shield,
  Rocket,
  Box,
  Search,
  Palette,
  BookOpen,
  FileText,
  Newspaper,
} from "lucide-react"

export default function DemoOne() {
  return <Component />
}

export function PageNotFoundDemo() {
  return (
    <div className="w-full">
      <NotFoundPage />
    </div>
  )
}

export function DropdownNavigationDemo() {
  const NAV_ITEMS = [
    {
      id: 1,
      label: "Products",
      subMenus: [
        {
          title: "DX Platform",
          items: [
            {
              label: "Previews",
              description: "Helping teams ship 6× faster",
              icon: Cpu,
            },
            {
              label: "AI",
              description: "Powering breakthroughs",
              icon: Search,
            },
          ],
        },
        {
          title: "Managed Infrastructure",
          items: [
            {
              label: "Rendering",
              description: "Fast, scalable, and reliable",
              icon: Globe,
            },
            {
              label: "Observability",
              description: "Trace every step",
              icon: Eye,
            },
            {
              label: "Security",
              description: "Scale without compromising",
              icon: Shield,
            },
          ],
        },
        {
          title: "Open Source",
          items: [
            {
              label: "Next.js",
              description: "The native Next.js platform",
              icon: Rocket,
            },
            {
              label: "Turborepo",
              description: "Speed with Enterprise scale",
              icon: Box,
            },
            {
              label: "AI SDK",
              description: "The AI Toolkit for TypeScript",
              icon: Palette,
            },
          ],
        },
      ],
    },
    {
      id: 2,
      label: "Solutions",
      subMenus: [
        {
          title: "Use Cases",
          items: [
            {
              label: "AI Apps",
              description: "Deploy at the speed of AI",
              icon: Cpu,
            },
            {
              label: "Composable Commerce",
              description: "Power storefronts that convert",
              icon: Box,
            },
            {
              label: "Marketing Sites",
              description: "Launch campaigns fast",
              icon: Rocket,
            },
            {
              label: "Multi-tenant Platforms",
              description: "Scale apps with one codebase",
              icon: Globe,
            },
            {
              label: "Web Apps",
              description: "Ship features, not infrastructure",
              icon: Search,
            },
          ],
        },
        {
          title: "Users",
          items: [
            {
              label: "Platform Engineers",
              description: "Automate away repetition",
              icon: Cpu,
            },
            {
              label: "Design Engineers",
              description: "Deploy for every idea",
              icon: Palette,
            },
          ],
        },
      ],
    },
    {
      id: 3,
      label: "Resources",
      subMenus: [
        {
          title: "Tools",
          items: [
            {
              label: "Resource Center",
              description: "Today's best practices",
              icon: BookOpen,
            },
            {
              label: "Marketplace",
              description: "Extend and automate workflows",
              icon: Search,
            },
            {
              label: "Templates",
              description: "Jumpstart app development",
              icon: FileText,
            },
            {
              label: "Guides",
              description: "Find help quickly",
              icon: BookOpen,
            },
            {
              label: "Partner Finder",
              description: "Get help from solution partners",
              icon: Search,
            },
          ],
        },
        {
          title: "Company",
          items: [
            {
              label: "Customers",
              description: "Trusted by the best teams",
              icon: Newspaper,
            },
            {
              label: "Blog",
              description: "The latest posts and changes",
              icon: FileText,
            },
            {
              label: "Changelog",
              description: "See what shipped",
              icon: BookOpen,
            },
            {
              label: "Press",
              description: "Read the latest news",
              icon: Newspaper,
            },
          ],
        },
      ],
    },
    {
      id: 4,
      label: "Enterprise",
      link: "#",
    },
    {
      id: 5,
      label: "Docs",
      link: "#",
    },
    {
      id: 6,
      label: "Pricing",
      link: "#",
    },
  ]

  return <DropdownNavigation navItems={NAV_ITEMS} />
}

export { DropdownNavigationDemo as Demo }

// ==========================================
// Team Lanyard Rail Demo
// ==========================================
import TeamLanyardRail, { type LanyardMember } from "@/components/ui/team-lanyard-rail";

export const LANYARD_DEMO_TEAM: LanyardMember[] = [
  {
    id: "ada",
    name: "Ada Lindqvist",
    role: "Head of Design",
    team: "Acme · Design",
    tone: 1,
    image: "https://cdn.21st.dev/assets/mirror/01/0129a921379e99ffcfab45433afaff19fce694d988053594aca9f81bdc84030b.jpg",
    bio: "Turns fuzzy product ideas into calm, honest interfaces. Runs the Friday design crit.",
    tags: ["Design systems", "Since 2019"],
    links: [{ label: "Email", href: "#" }, { label: "Portfolio", href: "#" }],
  },
  {
    id: "ravi",
    name: "Ravi Menon",
    role: "Engineering Lead",
    team: "Acme · Platform",
    tone: 2,
    image: "https://cdn.21st.dev/assets/mirror/b3/b30528dd471f65d68c0a32c02007e30235fb6f0292b70cee0b8ce8efc65a0370.jpg",
    bio: "Keeps the build green and the on-call quiet. Happiest deleting old code.",
    tags: ["Platform", "Rust", "Since 2020"],
    links: [{ label: "Email", href: "#" }, { label: "Calendar", href: "#" }],
  },
  {
    id: "imani",
    name: "Imani Okafor",
    role: "Product Manager",
    team: "Acme · Product",
    tone: 3,
    image: "https://cdn.21st.dev/assets/mirror/31/3192d5cfd93963226a5f4c8a6a8cbc6913f975b44ac4e39299fe57ee85367f1e.jpg",
    bio: "Talks to five customers a week and writes the one-page plan everyone actually reads.",
    tags: ["Research", "Since 2021"],
    links: [{ label: "Email", href: "#" }, { label: "Notes", href: "#" }],
  },
  {
    id: "kenji",
    name: "Kenji Arata",
    role: "iOS Engineer",
    team: "Acme · Mobile",
    tone: 4,
    image: "https://cdn.21st.dev/assets/mirror/3c/3cfeb559f917fcbdf360c177307aff2a9ea4db2f283175f2079d152d8e66a16e.jpg",
    bio: "Sweats the last 10% of every animation. Ships the app with a 99.9% crash-free rate.",
    tags: ["Swift", "Motion", "Since 2022"],
    links: [{ label: "Email", href: "#" }, { label: "Portfolio", href: "#" }],
  },
  {
    id: "lucia",
    name: "Lucia Ferreira",
    role: "People & Culture",
    team: "Acme · People",
    tone: 5,
    image: "https://cdn.21st.dev/assets/mirror/7c/7c4026ddb84a32bdc2c78f11ef8f6ba8f9f88e4f716c9d3c8bf06fb3690c9a7e.jpg",
    bio: "Hires kind, curious people and makes sure their first week feels like a welcome.",
    tags: ["Hiring", "Since 2018"],
    links: [{ label: "Email", href: "#" }, { label: "Open roles", href: "#" }],
  },
  {
    id: "mateo",
    name: "Mateo Ruiz",
    role: "Backend Engineer",
    team: "Acme · Platform",
    tone: 2,
    image: "https://cdn.21st.dev/assets/mirror/3f/3f7507b8577ffc6f2647006f918735f239d409fe50c5e74c70b924bf618fbcd9.jpg",
    bio: "Designs the APIs other teams love to call. Writes the docs before the code.",
    tags: ["APIs", "Go", "Since 2021"],
    links: [{ label: "Email", href: "#" }, { label: "Calendar", href: "#" }],
  },
  {
    id: "mila",
    name: "Mila Novak",
    role: "Brand Designer",
    team: "Acme · Design",
    tone: 1,
    image: "https://cdn.21st.dev/assets/mirror/a2/a23846f7e9338b8b753b523dcb11db8cb275e76e13eaf1bb738590728f892970.jpg",
    bio: "Draws the illustrations, picks the type and guards the brand from clip art.",
    tags: ["Illustration", "Since 2023"],
    links: [{ label: "Email", href: "#" }, { label: "Portfolio", href: "#" }],
  },
  {
    id: "noah",
    name: "Noah Mensah",
    role: "Customer Success",
    team: "Acme · Support",
    tone: 3,
    image: "https://cdn.21st.dev/assets/mirror/86/86f167053b1fc186b169482c15450834272b8a55993e9f0fb465f047de4b26a6.jpg",
    bio: "Answers within the hour and turns every tricky ticket into a help-center article.",
    tags: ["Support", "Since 2020"],
    links: [{ label: "Email", href: "#" }, { label: "Calendar", href: "#" }],
  },
];

export function TeamLanyardRailDemo({ autoplay = true }: { autoplay?: boolean }) {
  return (
    <div data-lanyard-demo className="flex min-h-svh w-full items-center justify-center bg-background text-foreground">
      <TeamLanyardRail
        items={LANYARD_DEMO_TEAM}
        eyebrow="Meet the team · Eight people"
        heading="A team wall you can flip through, right on the page."
        caption="Brush along the rail to meet someone, pull a badge down, click to flip it."
        autoplay={autoplay}
        action={
          <button type="button" className="inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background shadow-sm outline-none transition-[transform,box-shadow] hover:-translate-y-px hover:shadow-md focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background motion-reduce:transition-none">
            <span aria-hidden="true" className="size-1.5 rounded-full bg-chart-2" />
            We&apos;re hiring
          </button>
        }
      />
    </div>
  );
}

