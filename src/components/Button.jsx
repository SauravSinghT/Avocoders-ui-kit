import React from 'react';
const Button = ({ children, onClick, className = '' }) => (
  <button className={`p-2 m-2 text-base ${className}`} onClick={onClick} style={{ background: 'var(--color-primary)', color: 'white', border: 'none', borderRadius: '4px' }}>
    {children}
  </button>
);
export default Button;