import React from 'react';
import './index.css';

const Input = ({
  name,
  value,
  placeholder,
  type = 'text',
  onChange,
  onBlur,
  ...rest
}) => {
  return (
    <input
      {...rest}
      className="input"
      type={type}
      name={name}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      onBlur={onBlur}
    />
  );
};

const Textarea = ({
  name,
  value,
  placeholder,
  rows,
  onChange,
  onBlur,
  ...rest
}) => {
  return (
    <textarea
      {...rest}
      className="input"
      name={name}
      value={value}
      placeholder={placeholder}
      rows={rows}
      onChange={onChange}
      onBlur={onBlur}
    />
  );
};

export { Input, Textarea };
