import React from 'react'
import styles from "./styles.module.scss";

const Search: React.FC = () => {
  const [value, setValue] = React.useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value);
  };

  return (
    <div className={styles.wrapper}>
      <input value={value} onChange={handleChange} type="text" placeholder="Search"/>
    </div>
  )
}
export default Search;
