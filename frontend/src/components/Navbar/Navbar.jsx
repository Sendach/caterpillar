import { Link } from 'react-router-dom';
import styles from './navbar.module.scss';
import Button from '../Buttons/Button';
import { IoLogoReact } from 'react-icons/io5'

const Navbar = ({ toggleSignUpPopUpForm }) => {
  return (
    <div className={styles.navbar}>
      <div className={styles.navContainer}>
        <Link to="/" className={styles.logoSection}>
          <IoLogoReact size="2rem" />
          <h1 className={styles.logoText}>MovieApp</h1>
        </Link>
        <div className={styles.navLinks}>
          <Link to="/movie" >
            <li className={styles.navLink}>
              <a>Movies</a>
            </li>
          </Link>
          <Link to="/tv" >
            <li className={styles.navLink}>
              <a>TV</a>
            </li>
          </Link>
        </div>
        <div className={styles.panel}>
          <Link to="/register"><Button text="Sign Up" /></Link>
          <Link to="/login"><Button text="Log In" /></Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;