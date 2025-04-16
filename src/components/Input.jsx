import React from 'react';

const Input = ({ placeholder, value, onChange, className = '' }) => (
  <input
    type="text"
    className={`input ${className}`}
    value={value}
    onChange={onChange}
    placeholder={placeholder}
  />
);

export default Input;
