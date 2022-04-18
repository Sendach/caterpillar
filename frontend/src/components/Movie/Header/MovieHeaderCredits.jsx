import React from 'react';
import styles from './movieHeader.module.scss';

const MovieHeaderCredits = ({ credits }) => {
  const TV = () => {
    const creators = credits.length > 1;
    return (
      <div className={styles.creditList}>
        {creators ? <h4>Creators</h4> : <h4>Creator</h4>}
        <span>{ credits.length > 1 ? credits.join('\n') : credits[0]}</span>
      </div>
    );
  }

  const Movie = () => {
    return (
      <>
        <div className={styles.creditList}>
          {credits.directors.length > 1 ? <h4>Directors</h4> : <h4>Director</h4>}
          <span>{ credits.directors.length > 1 ? credits.directors.join('\n') : credits.directors[0]}</span>
        </div>
        <div className={styles.creditList}>
          {credits.writers.length > 1 ? <h4>Writers</h4> : <h4>Writer</h4>}
          <span>{ credits.writers.length > 1 ? credits.writers.join('\n') : credits.writers[0]}</span>
        </div>
        <div className={styles.creditList}>
          <h4>Stars</h4>
          <span>{ credits.stars.join('\n') }</span>
        </div>
      </>
    );
  }

  return (
    <div className={styles.credits}>
      {credits.directors ? <Movie /> : <TV />}
    </div>
  );
}

export default MovieHeaderCredits;