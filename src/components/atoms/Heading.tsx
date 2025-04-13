import { ReactNode } from 'react';

interface HeadingProps {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  children: ReactNode;
  className?: string;
  centered?: boolean;
}

export default function Heading({ 
  level = 2, 
  children, 
  className = '',
  centered = false 
}: HeadingProps) {
  const sizeStyles = {
    1: "text-4xl md:text-5xl lg:text-6xl",
    2: "text-3xl md:text-4xl",
    3: "text-2xl md:text-3xl",
    4: "text-xl md:text-2xl",
    5: "text-lg md:text-xl",
    6: "text-base md:text-lg",
  };
  
  const baseStyles = "font-bold";
  
  switch (level) {
    case 1:
      return (
        <h1 className={`${baseStyles} ${sizeStyles[1]} ${centered ? 'text-center' : ''} ${className}`}>
          {children}
        </h1>
      );
    case 3:
      return (
        <h3 className={`${baseStyles} ${sizeStyles[3]} ${centered ? 'text-center' : ''} ${className}`}>
          {children}
        </h3>
      );
    case 4:
      return (
        <h4 className={`${baseStyles} ${sizeStyles[4]} ${centered ? 'text-center' : ''} ${className}`}>
          {children}
        </h4>
      );
    case 5:
      return (
        <h5 className={`${baseStyles} ${sizeStyles[5]} ${centered ? 'text-center' : ''} ${className}`}>
          {children}
        </h5>
      );
    case 6:
      return (
        <h6 className={`${baseStyles} ${sizeStyles[6]} ${centered ? 'text-center' : ''} ${className}`}>
          {children}
        </h6>
      );
    default:
      return (
        <h2 className={`${baseStyles} ${sizeStyles[2]} ${centered ? 'text-center' : ''} ${className}`}>
          {children}
        </h2>
      );
  }
} 