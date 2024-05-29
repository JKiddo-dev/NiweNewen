import Image from "next/image";
import { ReactElement } from "react";

type ButtonProps = {
    type: 'button' | 'submit'
    title: string;
    icon: any;
}

const Button = ({type, title, icon}: ButtonProps) => {
  return (
    <button type={type} className="flex items-center justify-center gap-2 rounded-3xl border bg-green-90 px-8 py-3 text-white">
      {icon && <span className="icon">{icon}</span>}
      <label className="bold-16 whitespace-nowrap">
        {title}
      </label>
    </button>
  )
}

export default Button