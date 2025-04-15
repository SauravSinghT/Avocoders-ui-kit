import React from 'react';

const TextArea = ({ value, onChange, placeholder, className = '' }) => (
  <textarea
    className={`p-2 m-2 border ${className}`}
    value={value}
    onChange={onChange}
    placeholder={placeholder}
  />
);

export default TextArea;
