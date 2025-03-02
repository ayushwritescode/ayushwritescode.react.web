import React, { forwardRef } from 'react';

interface EGInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

const EGInput = forwardRef<HTMLInputElement, EGInputProps>(({ label, error, className, ...props }, ref) => {
  return (
    <div className="input-group">
      <label htmlFor={props.id} className="auth-label">{label}</label>
      <input
        ref={ref}
        className={`${error ? 'auth-input-error' : 'auth-input'} ${className}`}
        {...props}
      />
        {error && <p className="text-red-500 text-xs text-right">{error}</p>}
    </div>
  );
});

export { EGInput };
