const minToMovieDuration = (minutes) => {
  const min = parseInt(minutes);

  if (min < 60) return `${min}m`;

  const h = Math.floor(min / 60);
  const m = min % 60;

  return `${h}h ${m}m`;
}

export { minToMovieDuration };