import { cn } from "@/lib/utils";

export default function Container({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={cn("w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20", className)}>
      {children}
    </div>
  );
}