"use client";
import React, { useState, useEffect, useRef } from "react";

export interface TimelineItem {
  id: number;
  title: string;
  date: string;
  content: string;
  category: string;
  icon: React.ElementType;
  relatedIds: number[];
  status: "completed" | "in-progress" | "pending";
  energy: number;
}

export interface RadialOrbitalTimelineProps {
  timelineData: TimelineItem[];
  className?: string;
  theme?: "light" | "dark";
  selectedId?: number | null;
  onSelectNode?: (item: TimelineItem) => void;
  showPopup?: boolean;
}

export default function RadialOrbitalTimeline({
  timelineData,
  className = "",
  selectedId = null,
  onSelectNode,
}: RadialOrbitalTimelineProps) {
  const [internalActiveId, setInternalActiveId] = useState<number | null>(
    selectedId ?? (timelineData[0]?.id ?? 1)
  );
  const [rotationAngle, setRotationAngle] = useState<number>(() => {
    const initialId = selectedId ?? (timelineData[0]?.id ?? 1);
    const nodeIndex = timelineData.findIndex((item) => item.id === initialId);
    if (nodeIndex === -1) return 0;
    return 270 - (nodeIndex / (timelineData.length || 1)) * 360;
  });
  const [autoRotate, setAutoRotate] = useState<boolean>(true);
  const containerRef = useRef<HTMLDivElement>(null);
  const orbitRef = useRef<HTMLDivElement>(null);
  const nodeRefs = useRef<Record<number, HTMLDivElement | null>>({});

  const activeNodeId = selectedId !== undefined && selectedId !== null ? selectedId : internalActiveId;

  const [prevSelectedId, setPrevSelectedId] = useState(selectedId);
  if (selectedId !== prevSelectedId) {
    setPrevSelectedId(selectedId);
    if (selectedId !== null && selectedId !== undefined) {
      const nodeIndex = timelineData.findIndex((item) => item.id === selectedId);
      if (nodeIndex !== -1) {
        setRotationAngle(270 - (nodeIndex / (timelineData.length || 1)) * 360);
      }
    }
  }

  const centerViewOnNode = React.useCallback(
    (nodeId: number) => {
      const nodeIndex = timelineData.findIndex((item) => item.id === nodeId);
      if (nodeIndex === -1) return;
      const totalNodes = timelineData.length;
      const targetAngle = (nodeIndex / (totalNodes || 1)) * 360;
      setRotationAngle(270 - targetAngle);
    },
    [timelineData]
  );

  const pulseEffect = React.useMemo<Record<number, boolean>>(() => {
    if (!activeNodeId) return {};
    const currentItem = timelineData.find((i) => i.id === activeNodeId);
    if (!currentItem) return {};
    const newPulse: Record<number, boolean> = { [activeNodeId]: true };
    currentItem.relatedIds?.forEach((relId) => {
      newPulse[relId] = true;
    });
    return newPulse;
  }, [activeNodeId, timelineData]);

  const getRelatedItems = (itemId: number): number[] => {
    const currentItem = timelineData.find((item) => item.id === itemId);
    return currentItem ? currentItem.relatedIds : [];
  };

  const isRelatedToActive = (itemId: number): boolean => {
    if (!activeNodeId) return false;
    const relatedItems = getRelatedItems(activeNodeId);
    return relatedItems.includes(itemId);
  };

  const handleNodeClick = (item: TimelineItem) => {
    setAutoRotate(false);
    setInternalActiveId(item.id);
    centerViewOnNode(item.id);
    onSelectNode?.(item);
  };

  useEffect(() => {
    let rotationTimer: NodeJS.Timeout;

    if (autoRotate) {
      rotationTimer = setInterval(() => {
        setRotationAngle((prev) => {
          const newAngle = (prev + 0.2) % 360;
          return Number(newAngle.toFixed(3));
        });
      }, 50);
    }

    return () => {
      if (rotationTimer) {
        clearInterval(rotationTimer);
      }
    };
  }, [autoRotate]);

  const calculateNodePosition = (index: number, total: number) => {
    const angle = ((index / total) * 360 + rotationAngle) % 360;
    // Increased radius for larger circles
    const radius = 240;
    const radian = (angle * Math.PI) / 180;

    const x = radius * Math.cos(radian);
    const y = radius * Math.sin(radian);

    const zIndex = Math.round(100 + 50 * Math.cos(radian));
    const opacity = Math.max(
      0.65,
      Math.min(1, 0.5 + 0.5 * ((1 + Math.sin(radian)) / 2))
    );

    return { x, y, angle, zIndex, opacity };
  };

  return (
    <div
      className={`relative w-full h-[540px] sm:h-[580px] lg:h-[620px] flex flex-col items-center justify-center overflow-hidden select-none font-sans ${className}`}
      ref={containerRef}
      onMouseEnter={() => setAutoRotate(false)}
      onMouseLeave={() => setAutoRotate(true)}
    >
      {/* Background ambient subtle warm lighting */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
        <div className="w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-[#E4521B]/10 via-[#FF914D]/8 to-transparent blur-[100px]" />
        <div className="w-[660px] h-[660px] rounded-full border border-black/[0.04]" />
        <div className="w-[480px] h-[480px] rounded-full border border-[#E4521B]/15 border-dashed" />
      </div>

      <div className="relative w-full max-w-4xl h-full flex items-center justify-center">
        <div
          className="absolute w-full h-full flex items-center justify-center"
          ref={orbitRef}
          style={{
            perspective: "1000px",
          }}
        >
          {/* Central Sun / Core Orb - Increased Size (w-24 sm:w-28) */}
          <div className="absolute w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-gradient-to-br from-[#E4521B] via-[#FF914D] to-[#AB003E] shadow-[0_0_55px_rgba(228,82,27,0.5)] flex items-center justify-center z-10 transition-transform duration-500">
            <div className="absolute w-32 h-32 sm:w-36 sm:h-36 rounded-full border border-[#E4521B]/40 animate-ping opacity-60" />
            <div
              className="absolute w-40 h-40 sm:w-44 sm:h-44 rounded-full border border-[#FF914D]/30 animate-ping opacity-35"
              style={{ animationDelay: "0.6s" }}
            />
            {/* Core Dark Emblem Center */}
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#161413] border-2 border-white/20 backdrop-blur-md flex items-center justify-center shadow-inner">
              <span className="text-[#FF914D] font-bold text-sm tracking-tight">KTM</span>
            </div>
          </div>

          {/* Orbit guide ring - Increased diameter (480px) */}
          <div className="absolute w-[480px] h-[480px] rounded-full border border-black/10" />

          {/* Orbital Nodes - Increased Size (w-16 h-16) with Dark Finish */}
          {timelineData.map((item, index) => {
            const position = calculateNodePosition(index, timelineData.length);
            const isActive = activeNodeId === item.id;
            const isRelated = isRelatedToActive(item.id);
            const isPulsing = pulseEffect[item.id];
            const Icon = item.icon;

            const nodeStyle = {
              transform: `translate(${position.x}px, ${position.y}px)`,
              zIndex: isActive ? 200 : position.zIndex,
              opacity: isActive ? 1 : position.opacity,
            };

            return (
              <div
                key={item.id}
                ref={(el) => {
                  nodeRefs.current[item.id] = el;
                }}
                className="absolute transition-all duration-500 cursor-pointer group"
                style={nodeStyle}
                onClick={(e) => {
                  e.stopPropagation();
                  handleNodeClick(item);
                }}
              >
                {/* Node ambient pulsing energy aura */}
                <div
                  className={`absolute rounded-full -inset-2 ${
                    isPulsing || isActive ? "animate-pulse duration-1000" : ""
                  }`}
                  style={{
                    background: `radial-gradient(circle, rgba(228,82,27,0.45) 0%, rgba(228,82,27,0) 70%)`,
                    width: `${item.energy * 0.45 + 64}px`,
                    height: `${item.energy * 0.45 + 64}px`,
                    left: `-${(item.energy * 0.45 + 64 - 60) / 2}px`,
                    top: `-${(item.energy * 0.45 + 64 - 60) / 2}px`,
                  }}
                />

                {/* Node Icon Circle - Increased to w-15 h-15 / w-16 h-16 */}
                <div
                  className={`
                  w-15 h-15 sm:w-16 sm:h-16 rounded-full flex items-center justify-center
                  ${
                    isActive
                      ? "bg-gradient-to-br from-[#E4521B] to-[#FF914D] text-white shadow-[0_0_35px_rgba(228,82,27,0.75)] scale-115"
                      : isRelated
                      ? "bg-[#E4521B]/30 text-white border-[#FF914D]"
                      : "bg-[#161413] text-[#F3EFEA] group-hover:text-white group-hover:border-[#FF914D] group-hover:scale-105 shadow-[0_6px_20px_rgba(0,0,0,0.35)]"
                  }
                  border-2 
                  ${
                    isActive
                      ? "border-white"
                      : isRelated
                      ? "border-[#FF914D] animate-pulse"
                      : "border-[#302824]"
                  }
                  transition-all duration-300 transform
                `}
                >
                  <Icon size={24} className="transition-transform duration-300 group-hover:scale-110" />
                </div>

                {/* Node Label Below */}
                <div
                  className={`
                  absolute top-18 left-1/2 -translate-x-1/2 whitespace-nowrap
                  text-[12px] sm:text-[13px] font-sans font-medium tracking-[-0.01em]
                  transition-all duration-300 pointer-events-none px-3 py-1 rounded-full
                  ${
                    isActive
                      ? "text-white scale-110 bg-[#161413] border border-[#E4521B] shadow-xl font-bold"
                      : "text-white bg-[#161413]/90 border border-white/10 shadow-md backdrop-blur-sm group-hover:border-white/30"
                  }
                `}
                >
                  {item.title}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
export { RadialOrbitalTimeline };
