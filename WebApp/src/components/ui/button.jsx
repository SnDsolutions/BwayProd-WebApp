
import { cn } from '@/lib/utils';
import { Slot } from '@radix-ui/react-slot';
import { cva } from 'class-variance-authority';
import React from 'react';

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap font-medium transition-all duration-300 ease-out disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-full',
  {
    variants: {
      variant: {
        default: 'border border-white/30 bg-white/10 text-white backdrop-blur-sm hover:bg-white/20 hover:border-white/50 hover:shadow-[0_0_20px_rgba(255,255,255,0.2)]',
        destructive: 'border border-red-500/50 bg-red-500/10 text-white hover:bg-red-500/20 hover:border-red-500 hover:shadow-[0_0_20px_rgba(220,38,38,0.4)]',
        outline: 'border border-white/30 bg-transparent text-white hover:bg-white/10 hover:border-white/60 hover:shadow-[0_0_15px_rgba(255,255,255,0.1)]',
        secondary: 'border border-white/20 bg-white/5 text-white hover:bg-white/15 hover:border-white/40',
        ghost: 'border border-transparent hover:bg-white/10 text-white',
        link: 'text-white underline-offset-4 hover:underline',
        hero: 'border border-white/40 bg-white/10 text-white backdrop-blur-md hover:bg-white/20 hover:border-white/60 hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] uppercase tracking-wider',
        pill: 'border border-white/30 bg-white/10 text-white backdrop-blur-sm hover:bg-white/20 hover:border-white/50 hover:shadow-[0_0_15px_rgba(255,255,255,0.15)]',
        'header-login': 'bg-transparent text-white border border-white/30 hover:bg-white/10 hover:border-white/60',
        'header-signup': 'bg-white/10 text-white border border-white/30 hover:bg-white/20 hover:border-white/60',
      },
      size: {
        default: 'h-12 px-8 py-2 text-sm md:text-base',
        sm: 'h-10 px-6 text-xs',
        lg: 'h-14 px-10 text-lg',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);

const Button = React.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
	const Comp = asChild ? Slot : 'button';
	return (
		<Comp
			className={cn(buttonVariants({ variant, size, className }))}
			ref={ref}
			{...props}
		/>
	);
});
Button.displayName = 'Button';

export { Button, buttonVariants };
