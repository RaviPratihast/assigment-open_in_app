import React from 'react';

function InputWithLabel({ label, type, placeholder }) {
  return (
    <div className="mb-4">
      <label htmlFor={label} className="block text-xs text-gray-700 font-bold mb-2">{label}</label>
      <input
        type={type}
        id={label}
        name={label}
        placeholder={placeholder}
        className="border rounded-lg w-full text-sm p-1 focus:outline-none focus:border-blue-400"
      />
    </div>
  );
}

export { InputWithLabel};
