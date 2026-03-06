import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "accent";
  children: ReactNode;
}

export function Button({ variant = "primary", children, className = "", ...props }: ButtonProps) {
  const baseStyles = "px-6 py-3 rounded-lg font-medium transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "bg-[#1E3A8A] text-white hover:bg-[#1e40af] shadow-md hover:shadow-lg",
    secondary: "bg-[#6D28D9] text-white hover:bg-[#7c3aed] shadow-md hover:shadow-lg",
    accent: "bg-[#F97316] text-white hover:bg-[#ea6c0f] shadow-md hover:shadow-lg",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
