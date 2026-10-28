"use client";
import * as React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

export interface GooeyLoaderProps extends Omit<
  HTMLMotionProps<"div">,
  "children"
> {
  size?: number;
  color?: string;
  duration?: number;
}

export type LoaderGooeyBlobsProps = GooeyLoaderProps;

export function GooeyLoader({
  className,
  size = 20,
  color = "#E4521B",
  duration = 1.5,
  ...props
}: GooeyLoaderProps) {
  const filterId = React.useId().replace(/:/g, "-") + "-gooey";

  return (
    <motion.div className={cn("relative flex items-center justify-center p-2", className)} {...props}>
      <svg width="0" height="0" className="absolute w-0 h-0 pointer-events-none">
        <defs>
          <filter id={filterId}>
            <feGaussianBlur in="SourceGraphic" stdDeviation="3" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
              result="gooey"
            />
            <feBlend in="SourceGraphic" in2="gooey" />
          </filter>
        </defs>
      </svg>
      <div
        style={{ filter: `url(#${filterId})` } as React.CSSProperties}
        className="flex gap-1"
      >
        {[0, 1, 2].map((index) => (
          <motion.div
            key={index}
            className="rounded-full"
            style={{
              width: size,
              height: size,
              backgroundColor: color,
            }}
            animate={{
              x: [0, 15, 0, -15, 0],
              scale: [1, 1.2, 1, 1.2, 1],
            }}
            transition={{
              duration,
              ease: "easeInOut",
              repeat: Infinity,
              delay: index * 0.2,
            }}
          />
        ))}
      </div>
    </motion.div>
  );
}

export const LoaderGooeyBlobs = GooeyLoader;
export default GooeyLoader;
