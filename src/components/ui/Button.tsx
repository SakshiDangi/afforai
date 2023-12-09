import { ButtonHTMLAttributes, ReactNode } from 'react'
import { VariantProps, cva } from 'class-variance-authority'
import cn from '../../utility/cn';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  children: ReactNode;
}
  
export default function Button({ children, className, variant, size, ...props }: ButtonProps) {
  return(
    <button
      className={cn(buttonVariants({variant, size, className}))}
      {...props}
    >
      {children}
    </button>
  );
}

const buttonVariants = cva("rounded-3xl", {
  variants: {
    variant: {
      primary: "opacity-100 bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%",
      secondary: "black border-2 bg-white",
    },
    size: {
      sm: "text-sm px-1 py-0",
      md: "text-base px-2 py-1",
      lg: "text-xl px-4 py-2",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "md",
  },
});