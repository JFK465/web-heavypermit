interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
  from?: string;
  to?: string;
  via?: string;
}

export function GradientText({
  children,
  className = "",
  from = "from-blue-700",
  to = "to-orange-500",
  via,
}: GradientTextProps) {
  const viaClass = via ? ` ${via}` : "";
  return (
    <span
      className={`bg-gradient-to-r ${from}${viaClass} ${to} bg-clip-text text-transparent ${className}`}
    >
      {children}
    </span>
  );
}
