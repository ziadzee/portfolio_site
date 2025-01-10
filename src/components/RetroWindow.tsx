import { cn } from "@/lib/utils";

interface RetroWindowProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

export const RetroWindow = ({ title, children, className }: RetroWindowProps) => {
  return (
    <div className={cn("bg-retro-silver border-2 shadow-retro mb-6", className)}>
      <div className="bg-retro-navy text-white px-2 py-1 flex items-center">
        <div className="w-3 h-3 bg-retro-silver mr-2" />
        <h2 className="font-bold">{title}</h2>
      </div>
      <div className="p-4">{children}</div>
    </div>
  );
};