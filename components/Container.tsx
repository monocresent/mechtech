interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
}

const sizeMap = {
  sm: "max-w-2xl",
  md: "max-w-3xl",
  lg: "max-w-6xl",
  xl: "max-w-[1400px]",
};

export default function Container({
  children,
  className = "",
  size = "lg",
}: ContainerProps) {
  return (
    <div className={`mx-auto ${sizeMap[size]} px-6 ${className}`}>
      {children}
    </div>
  );
}
