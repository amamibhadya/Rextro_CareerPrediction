import { type InputHTMLAttributes, forwardRef } from "react";
import { cn } from "../utils/cn";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const ModernSimpleInput = forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        className={cn(
          "flex h-20 w-full rounded-xl border px-3 py-2 text-sm ring-0 transition focus:ring-0 focus-visible:outline-hidden disabled:cursor-not-allowed disabled:opacity-50",

          "border-neutral-400/20 bg-neutral-800 hover:bg-neutral-800/50",
          "placeholder:text-neutral-400 focus-visible:border-neutral-400/50",
          // File
          "font-fredoka file:text-foreground file:border-0 file:bg-transparent file:text-sm file:font-medium",
          className,
        )}
        ref={ref}
        type={type}
        {...props}
      />
    );
  },
);
ModernSimpleInput.displayName = "Modern Simple Input";

export { ModernSimpleInput };
