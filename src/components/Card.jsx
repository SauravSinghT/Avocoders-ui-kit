import React from 'react';
const Card = ({ children, className = '', style = {} }) => (
    <div
      className={`p-4 m-2 ${className}`}
      style={{
        background: '#fff',
        borderRadius: '12px',
        // border:'2px solid var(--color-primary)',
        boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
        // padding:'10px',
        ...style,
      }}
    >
      {children}
    </div>
  );
export default Card;