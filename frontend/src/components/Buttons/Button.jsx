import React from 'react';
import styles from '../../styles/button.module.scss';

export const Button = ({ text, onClick }) => {
  return (
    <button className={styles.button} onClick={onClick}>
      {text}
    </button>
  );
}

export default Button;