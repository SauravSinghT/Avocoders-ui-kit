import React from 'react';
const Button = ({ children, onClick, className = '' }) => {
  const baseClasses = ` rounded-md ${className}`;

  return (
    <button className={baseClasses} onClick={onClick}>
      {children}
    </button>
);};
export default Button;
