import React from "react";
import styles from "./index.module.css";

interface DropdownType {
  label?: string;
  options: Array<number | string>;
  value: number | string;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const Dropdown = ({ label, options, value, onChange }: DropdownType) => {
  return (
    <label className={styles.dropdown}>
      <div className={styles.dropdown__label}>{label}</div>
      <select value={value} onChange={onChange}>
        {options.map((option, idx) => (
          <option key={idx}>{option}</option>
        ))}
      </select>
    </label>
  );
};

export default Dropdown;
