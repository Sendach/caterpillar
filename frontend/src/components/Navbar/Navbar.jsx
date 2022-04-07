import { Link } from 'react-router-dom'
import styles from '../../styles/navbar.module.scss';
import Button from '../Buttons/Button';
import { IoLogoReact } from 'react-icons/io5'

const Navbar = ({ toggleSignUpPopUpForm }) => {
  return (
    <div className={styles.navbar}>
      <div className={styles.navContainer}>
        <Link to="/" className={styles.logoSection}>
          <IoLogoReact size="2rem" />
          <h1 className={styles.logoText}>LOGO</h1>
        </Link>
        <div className={styles.navLinks}>
          <li className={styles.navLink}>
            <a>Home</a>
          </li>
          <li className={styles.navLink}>
            <a>Store</a>
          </li>
          <li className={styles.navLink}>
            <a>Support</a>
          </li>
          <li className={styles.navLink}>
            <a>Blog</a>
          </li>
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