import React from 'react';
const Button = ({ children, onClick, className = '' }) => {
  const baseClasses = `p-2 m-2 text-base bg-[var(--color-primary-500)] border rounded-md ${className}`;

  return (
    <button className={baseClasses} onClick={onClick}>
      {children}
    </button>
);};
export default Button;
