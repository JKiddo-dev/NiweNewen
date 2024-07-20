import React from 'react';

type ButtonProps = {
  type: "button" | "submit" | "reset";
  title: string;
  icon?: React.ReactNode;
  onClick?: () => void;
};

const Button = ({ type, title, icon, onClick }: ButtonProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className="bg-[#84BF04] text-black flex items-center justify-center px-6 py-3 rounded"
    >
      {icon && <span className="mr-2">{icon}</span>}
      {title}
    </button>
  );
};

export default Button;
