import { ReactNode } from 'react';

interface SocialIconProps {
  href: string;
  icon: ReactNode;
  label: string;
}

export default function SocialIcon({ href, icon, label }: SocialIconProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="flex items-center justify-center w-10 h-10 rounded-full bg-electric-blue text-white hover:bg-digital-violet transition-colors duration-300"
    >
      {icon}
    </a>
  );
} 