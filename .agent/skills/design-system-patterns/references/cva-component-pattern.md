# CVA (Class Variance Authority) Pattern

Use this pattern for building strongly typed, variant-based components (like Button, Badge, Card).

```tsx
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils"; // Assumes you have a tailwind-merge util

const buttonVariants = cva(
  // Base classes (applied to all variants)
  "inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        ghost: "hover:bg-accent hover:text-accent-foreground",
      },
      size: {
        sm: "h-9 px-3 text-sm",
        md: "h-10 px-4 py-2",
        lg: "h-11 px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  }
);

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

export function Button({ className, variant, size, ...props }: ButtonProps) {
  return (
    <button
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}
```
