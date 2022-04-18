import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import styles from './titleCard.module.scss';

export const TitleCard = ({ id, title, img }) => {
  const location = useLocation();
  const moviePage = location.pathname.includes('movie');

  return (
    <div className={styles.titleCardContainer}>
      <Link to={ moviePage ? `/movie/${id}` : `/tv/${id}`} stuff="stuff"><img src={img} className={styles.img}/></Link>
      <div className={styles.content}>
        <h5>{title}</h5>
        <h6>Feb 12, 2020</h6>
      </div>
    </div>
  )
}

export default TitleCard;
