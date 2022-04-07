import { useState, useEffect } from 'react';
import userService from '../../services/users.js';
import styles from '../../styles/form.module.scss';
import Button from '../Buttons/Button';
import { IoClose, IoCheckmarkSharp } from 'react-icons/io5';

const SignUpForm = () => {
  const [userSignUp, setUserSignUp] = useState({ email: '', username: '', name: '', password: ''});
  const [duplicateEmail, setDuplicateEmail] = useState(false);
  const [duplicateUsername, setDuplicateUsername] = useState(false);

  const addUser = (event) => {
    event.preventDefault();

    Object.keys(userSignUp).forEach(key => {
      userSignUp[key] = userSignUp[key].toLowerCase();
    })

    userService
      .addUser(userSignUp)
      .then(res => {
        console.log('User successfully added to the database!');
        setUserSignUp({ email: '', username: '', name: '', password: ''});
      }).catch(err => console.log('User unable to be added to the database, the name is probably a duplicate.'));
  }

  const handleSignupChange = (event) => {
    const value = event.target.value;
    
    setUserSignUp({
      ...userSignUp,
      [event.target.name]: value
    });
  }

  const isEmailDuplicate = async () => {
    const result = await userService.getUserByEmail(userSignUp.email);
    if (result) {
      setDuplicateEmail(true);
    } else {
      setDuplicateEmail(false);
    }
  }

  const isUsernameDuplicate = async () => {
    const result = await userService.getUserByUsername(userSignUp.email);
    if (result) {
      setDuplicateUsername(true);
    } else {
      setDuplicateUsername(false);
    }
  }

  return (
    <div className={styles.signUpForm}>
      <div className={styles.signUpFormHeader}>
        <h1>Welcome!</h1>
        <p>Let's create your account</p>
      </div>
      <div className={styles.signUpFormInput}>
        <form>
          <input
            type="text"
            name="email"
            value={userSignUp.email}
            onChange={handleSignupChange}
            placeholder="Email *"
            onBlur={isEmailDuplicate}
          />
          {userSignUp.email.length === 0 
            ? null 
            : duplicateEmail 
              ? <div className={styles.error}><IoClose size="1.1rem" className={styles.errorIcon}/> <p className={styles.errorMessage}>Email has already been taken</p></div>
              : <div className={styles.success}><IoCheckmarkSharp size="1.1rem" className={styles.successIcon}/> <p className={styles.successMessage}>We will email you to confirm</p></div>
          }
          <input
            type="text"
            name="username"
            value={userSignUp.username}
            onChange={handleSignupChange}
            placeholder="Username *"
            onBlur={isUsernameDuplicate}
          />
          {userSignUp.username.length < 3
            ? <div className={styles.error}><IoClose size="1.1rem" className={styles.errorIcon}/> <p className={styles.errorMessage}>Your username is too short</p></div>
            : duplicateUsername 
              ? <div className={styles.error}><IoClose size="1.1rem" className={styles.errorIcon}/> <p className={styles.errorMessage}>Your username is not available</p></div>
              : <div className={styles.success}><IoCheckmarkSharp size="1.1rem" className={styles.successIcon}/> <p className={styles.successMessage}>Your username is available</p></div>
          }
          <input
            type="text"
            name="name"
            value={userSignUp.name}
            onChange={handleSignupChange}
            placeholder="Name"
          />
          <input
            type="text"
            name="password"
            value={userSignUp.password}
            onChange={handleSignupChange}
            placeholder="Password *"
          />
        </form>
      </div>
      <div className={styles.signUpFormFooter}>
        <Button text="Create Account" onClick={addUser}></Button>
        <Button text="Login" onClick={addUser}></Button>
      </div>
    </div>
  );
}

export default SignUpForm;