import React from "react";

interface InputProps {
  darkMode: boolean;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

const Input: React.FC<InputProps> = ({
  darkMode,
  value,
  onChange,
  placeholder = ""
}) => {
  return (
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className={`${
        darkMode ? "bg-gray-800 text-white" : "bg-white text-black"
      } border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:border-blue-500`}
    />
  );
};

export default Input;
