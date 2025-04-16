import React from 'react';

export function Button({ children, className = '', ...props }) {
  return (
    <button
      className={`inline-flex items-center justify-center font-medium transition-colors duration-200 focus:outline-none px-3 h-9 cursor-pointer ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
