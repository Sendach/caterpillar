import React from 'react'
import styles from '../../styles/button.module.scss';

const Submit = ({ text }) => {
  return (
    <input className={styles.button} type="submit" value={text}></input>
  )
}

export default Submit