"use client";

interface GlowBackgroundProps {
  intensity?: number;
  className?: string;
  children?: React.ReactNode;
  orbs?: number;
}

export function GlowBackground({
  intensity = 5,
  className = "",
  children,
  orbs = 2,
}: GlowBackgroundProps) {
  const opacity = intensity / 100;

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Orb 1: Primary glow oben links */}
      <div
        className="pointer-events-none absolute -top-1/4 -left-1/4 w-1/2 h-1/2 rounded-full"
        style={{
          background: `radial-gradient(circle, oklch(0.55 0.18 220 / ${opacity * 3}) 0%, transparent 70%)`,
          filter: "blur(60px)",
        }}
      />
      {/* Orb 2: Accent glow unten rechts */}
      {orbs >= 2 && (
        <div
          className="pointer-events-none absolute -bottom-1/4 -right-1/4 w-1/2 h-1/2 rounded-full"
          style={{
            background: `radial-gradient(circle, oklch(0.65 0.18 30 / ${opacity * 2}) 0%, transparent 70%)`,
            filter: "blur(80px)",
          }}
        />
      )}
      {/* Orb 3: Subtle center glow */}
      {orbs >= 3 && (
        <div
          className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/3 h-1/3 rounded-full"
          style={{
            background: `radial-gradient(circle, oklch(0.60 0.15 220 / ${opacity * 1.5}) 0%, transparent 70%)`,
            filter: "blur(50px)",
          }}
        />
      )}
      {children && <div className="relative z-10">{children}</div>}
    </div>
  );
}
