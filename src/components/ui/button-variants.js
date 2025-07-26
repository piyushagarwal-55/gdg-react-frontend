import { cva } from "class-variance-authority";

export const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default:
          "bg-orange text-white rounded-[24px] text-[16px] font-medium shadow-[0_4px_16px_rgba(244,140,6,0.3)] hover:bg-orange/90 transition-all duration-300",
        primary:
          "bg-primary-blue text-white rounded-[24px] text-[16px] font-medium shadow-[0_4px_16px_rgba(60,75,220,0.3)] hover:bg-primary-blue/90 transition-all duration-300",
        outline:
          "border-2 border-orange bg-transparent text-orange rounded-[24px] text-[16px] font-medium hover:bg-orange hover:text-white transition-all duration-300",
        ghost:
          "bg-transparent text-dark-navy rounded-[24px] text-[16px] font-medium hover:bg-dark-navy/10 transition-all duration-300",
        link: "text-orange underline-offset-4 hover:underline text-[16px] font-medium",
      },
      size: {
        default: "px-8 py-4 text-[16px] rounded-[24px]",
        sm: "px-5 py-2.5 text-sm rounded-[24px]",
        lg: "px-10 py-5 text-[16px] font-medium rounded-[24px]",
        icon: "size-12 rounded-[24px]",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);
