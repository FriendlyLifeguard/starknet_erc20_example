import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export const Button = ({ children, onClick, ...props  }: ButtonProps) => {

  return (
    <button
      {...props}
      onClick={onClick}
      className={`px-2 py-1 bg-gray-600 rounded-md text-white disabled:opacity-30 ${props.className}`}
    >
      {children}
    </button>
  );
};
