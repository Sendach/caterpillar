import styles from '../../styles/navbar.module.scss';
import Button from '../Buttons/Button';

const Navbar = ({ toggleSignUpPopUpForm }) => {
  return (
    <div className={styles.navbar}>
      <div className={styles.navContainer}>
        <div className={styles.logo}>LOGO</div>
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
          <Button text="Login" />
          <Button text="Sign Up" onClick={toggleSignUpPopUpForm}/>
        </div>
      </div>
    </div>
  );
}

export default Navbar;