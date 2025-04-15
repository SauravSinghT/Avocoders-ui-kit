import React from 'react';

const Input = ({ placeholder, value, onChange, className = '' }) => (
  <input
    type="text"
    className={`p-2 m-2 border ${className}`}
    value={value}
    onChange={onChange}
    placeholder={placeholder}
  />
);

export default Input;