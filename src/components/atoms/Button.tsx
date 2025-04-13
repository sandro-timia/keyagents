import { ButtonHTMLAttributes, ReactNode } from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'outline';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: ButtonVariant;
  fullWidth?: boolean;
}

export default function Button({
  children,
  variant = 'primary',
  fullWidth = false,
  className = '',
  ...props
}: ButtonProps) {
  const baseStyles = 'rounded-full font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 px-6 py-3';
  
  const variantStyles = {
    primary: 'bg-[#A8FF60] text-[#2F2F2F] hover:opacity-90 focus:ring-[#A8FF60]',
    secondary: 'bg-[#3A8DFF] text-[#2F2F2F] hover:opacity-90 focus:ring-[#3A8DFF]',
    outline: 'border border-[#3A8DFF] text-[#3A8DFF] hover:bg-[#3A8DFF]/10 focus:ring-[#3A8DFF]',
  };
  
  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
} 