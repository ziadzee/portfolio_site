import { cn } from "@/lib/utils";

interface RetroButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export const RetroButton = ({ children, className, ...props }: RetroButtonProps) => {
  return (
    <button
      className={cn(
        "px-4 py-2 bg-retro-silver shadow-retro active:translate-y-px",
        "hover:bg-gray-300 transition-colors",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};