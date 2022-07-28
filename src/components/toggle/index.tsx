import React from 'react';

type ToggleProps = {
  uuid: string;
  value: boolean;
  handleChange: () => void;
  label: string;
  className?: string;
};

const Toggle = ({ uuid, value, handleChange, label, className }: ToggleProps) => {
  return (
    <div className={className}>
      <label
        htmlFor={`toggle-${uuid}`}
        className="inline-flex relative items-center cursor-pointer"
      >
        <input
          type="checkbox"
          value=""
          checked={value}
          onChange={handleChange}
          id={`toggle-${uuid}`}
          className="sr-only peer"
        />
        <div className="w-14 h-9 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[4px] after:left-[3px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-blue-600" />
        <span className="ml-3 text-2xl font-medium text-grey-900">{label}</span>
      </label>
    </div>
  );
};

export default Toggle;
