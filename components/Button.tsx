import React from 'react';

type ButtonProps = {
  type: "button" | "submit" | "reset";
  title: string;
  icon?: React.ReactNode;
  onClick?: () => void;
  full?: boolean;
  className?: string;
};

const Button = ({ type, title, icon, onClick, full, className }: ButtonProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`group relative flex items-center justify-center px-8 py-3.5 overflow-hidden font-medium tracking-wide text-white bg-accent rounded-full shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 ${full ? 'w-full' : ''} ${className || ''}`}
    >
      <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-white/20 via-transparent to-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
      <div className="relative flex items-center gap-2">
        {icon && <span className="transform transition-transform duration-300 group-hover:scale-110">{icon}</span>}
        <span className="font-sans font-semibold uppercase text-sm tracking-wider">{title}</span>
      </div>
    </button>
  );
};

export default Button;
