import { cn } from "@/lib/utils";

function Skeleton({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div 
      className={cn(
        "rounded-md bg-gradient-to-r from-muted via-muted/50 to-muted bg-[length:200px_100%] animate-skeleton-shimmer", 
        className
      )} 
      {...props} 
    />
  );
}

export { Skeleton };
