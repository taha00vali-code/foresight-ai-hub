import { cn } from "@/lib/utils";

interface AlertBadgeProps {
  level: "critical" | "warning" | "stable";
  children: React.ReactNode;
  className?: string;
}

const AlertBadge = ({ level, children, className }: AlertBadgeProps) => {
  const variants = {
    critical: "alert-critical",
    warning: "alert-warning", 
    stable: "alert-stable",
  };

  return (
    <div className={cn(
      "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium",
      variants[level],
      className
    )}>
      {children}
    </div>
  );
};

export default AlertBadge;