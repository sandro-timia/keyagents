import { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  fullWidth?: boolean;
}

export default function Input({
  label,
  error,
  fullWidth = false,
  className = '',
  ...props
}: InputProps) {
  return (
    <div className={`${fullWidth ? 'w-full' : ''}`}>
      {label && (
        <label className="block text-dark-gray font-medium mb-1">
          {label}
        </label>
      )}
      <input
        className={`rounded-md border ${
          error ? 'border-red-500' : 'border-light-gray'
        } bg-white text-dark-gray px-4 py-2 focus:outline-none focus:ring-2 focus:ring-electric-blue ${
          fullWidth ? 'w-full' : ''
        } ${className}`}
        {...props}
      />
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
} 