import React from 'react';
const Loader = ({ className = '', style = {} }) => (
    <div
      className={`loader m-2 ${className}`}
      style={{
        width: '2rem',
        height: '2rem',
        border: '4px solid var(--color-neutral-200)',
        borderTop: '4px solid var(--color-primary-500)',
        borderRadius: '50%',
        animation: 'spin 1s linear infinite',
      }}
    />
  );
export default Loader;