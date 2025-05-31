
import { cn } from '@/lib/utils';
import { Slot } from '@radix-ui/react-slot';
import { cva } from 'class-variance-authority';
import React from 'react';

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 rounded-lg text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none relative',
  {
    variants: {
      variant: {
        default: 'bg-payper-blue-default text-white active:scale-[0.98] shadow-lg',
        destructive: 'bg-destructive text-destructive-foreground active:scale-[0.98] shadow-lg',
        outline: 'border-2 border-input bg-background active:scale-[0.98]',
        secondary: 'bg-payper-green-default text-white active:scale-[0.98] shadow-lg',
        ghost: 'active:scale-[0.98]',
        link: 'text-primary underline-offset-4',
        gradient: 'payper-gradient-bg text-white active:scale-[0.98] shadow-lg',
      },
      size: {
        default: 'h-10 px-4 py-2',
        sm: 'h-9 rounded-md px-3 text-xs',
        lg: 'h-11 rounded-md px-8 text-base',
        xl: 'h-12 rounded-md px-8 text-lg',
        icon: 'h-10 w-10',
        full: 'h-12 w-full px-6 text-base',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);

const Button = React.forwardRef(({ 
  className, 
  variant, 
  size, 
  asChild = false,
  loading = false,
  children,
  ...props 
}, ref) => {
  const Comp = asChild ? Slot : 'button';
  
  return (
    <Comp
      className={cn(
        buttonVariants({ variant, size, className }),
        loading && 'relative text-transparent cursor-wait'
      )}
      disabled={loading || props.disabled}
      ref={ref}
      {...props}
    >
      {children}
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
        </div>
      )}
      {/* Removed hover:opacity-100 from the span below */}
      <span className="absolute inset-0 bg-white/10 opacity-0 transition-opacity duration-200" />
    </Comp>
  );
});

Button.displayName = 'Button';

export { Button, buttonVariants };

Button.displayName = 'Button';

export { Button, buttonVariants };
