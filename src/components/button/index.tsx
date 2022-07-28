import React from 'react';

type ButtonProps = {
  children: React.ReactNode;
  handleClick: (event: React.MouseEvent<HTMLElement>) => void;
  className?: string;
  color?: string;
  disabled?: boolean;
};

const Button = ({ className, children, handleClick, disabled, color = 'green' }: ButtonProps) => {
  const buttonConfig: Record<string, string> = {
    green: `bg-green-700 focus:ring-green-300 ${disabled ? '' : `hover:bg-green-800`} `,
    blue: `bg-blue-700 focus:ring-blue-300 ${disabled ? '' : `hover:bg-blue-800`} `,
    red: `bg-red-700 focus:ring-red-300 ${disabled ? '' : `hover:bg-red-800`} `,
  };

  return (
    <button
      className={`text-white ${
        buttonConfig[color]
      } focus:outline-none focus:ring-4  font-medium rounded-full text-2xl px-10 py-5 text-center ${
        disabled ? 'disabled:opacity-25 cursor-not-allowed' : ''
      } ${className} `}
      onClick={handleClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
