import React from 'react'
import styles from "./styles.module.scss";


interface IInputProps {
  value: string
  onChange: (e:React.ChangeEvent<HTMLInputElement>) => void;
  type?: string
  placeholder?: string
}

function Input({
    value,
    onChange,
    type = 'text',
    placeholder
  }: IInputProps) {

  return (
    <div className={styles.wrapper}>
      <input
        value={value}
        onChange={onChange}
        type={type}
        placeholder={placeholder}
      />
    </div>
  )
}

export default Input;

