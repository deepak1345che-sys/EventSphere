import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-[#E65100] text-white hover:bg-[#D84315] shadow-sm",
        primary:
          "bg-[#E65100] text-white hover:bg-[#D84315] shadow-sm active:scale-[0.98]",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        danger:
          "bg-rose-50 hover:bg-rose-100 text-rose-700 border border-rose-200 active:scale-[0.98]",
        outline:
          "border border-[#CCC8BA] bg-transparent hover:bg-[#F2F1EC] text-[#222] active:scale-[0.98]",
        secondary:
          "bg-[#F2F1EC] hover:bg-[#E7E5DC] text-[#222] border border-[#DDD9CE] active:scale-[0.98]",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        dark: "bg-[#191919] hover:bg-[#2b2b2b] text-white shadow-sm active:scale-[0.98]",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "px-3 py-1.5 text-xs rounded-lg gap-1.5",
        md: "h-10 px-4 py-2 text-sm rounded-xl gap-2",
        lg: "px-5 py-2.5 text-base font-semibold rounded-xl gap-2.5",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

const Button = React.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };