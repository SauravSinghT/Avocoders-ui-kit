import React from 'react';

const Card = ({ children, className = '', style = {} }) => {
  const baseClasses = `p-4 m-2 bg-white border rounded-lg shadow-md ${className}`; 

  return (
    <div className={baseClasses} style={style}>
      {children}
    </div>
  );
};

export default Card;