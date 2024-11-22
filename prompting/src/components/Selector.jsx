import React from 'react';

const Selector = ({ label, options, value, onChange }) => {
  return (
    <div style={{ marginBottom: '20px' }}>
      <label htmlFor={label} style={{ marginRight: '10px' }}>
        {label}:
      </label>
      <select
        id={label}
        value={value}
        onChange={onChange}
        style={{ padding: '5px', fontSize: '16px' }}
      >
        <option value="">-- Select --</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Selector;
