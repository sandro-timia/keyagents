import { ReactNode } from 'react';

interface SectionProps {
  id?: string;
  children: ReactNode;
  className?: string;
  background?: 'white' | 'light-gray' | 'dark';
}

export default function Section({ 
  id, 
  children, 
  className = '', 
  background = 'white' 
}: SectionProps) {
  const bgClasses = {
    'white': 'bg-pure-white',
    'light-gray': 'bg-light-gray',
    'dark': 'bg-dark-gray text-white'
  };

  return (
    <section 
      id={id}
      className={`py-16 px-4 md:px-8 ${bgClasses[background]} ${className}`}
    >
      <div className="container mx-auto">
        {children}
      </div>
    </section>
  );
} 