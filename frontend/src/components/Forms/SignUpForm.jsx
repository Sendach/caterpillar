import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import userService from '../../services/users.js';
import styles from '../../styles/form.module.scss';
import Button from '../Buttons/Button';
import Submit from '../Buttons/Submit';
import { IoClose, IoCheckmarkSharp } from 'react-icons/io5';

const SignUpForm = () => {
  let navigate = useNavigate();
  
  const [userSignUp, setUserSignUp] = useState({ email: '', username: '', name: '', password: ''});
  const [duplicateEmail, setDuplicateEmail] = useState(null);
  const [duplicateUsername, setDuplicateUsername] = useState(null);

  const addUser = async (event) => {
    event.preventDefault();

    Object.keys(userSignUp).forEach(key => {
      userSignUp[key] = userSignUp[key].toLowerCase();
    })

    if (userSignUp.password.length < 10 || userSignUp.username.length < 3) return;

    const result = await userService.addUser(userSignUp);
    if (result) {
      setUserSignUp({ email: '', username: '', name: '', password: ''});
      navigate('/account-created', { state: {email: userSignUp.email}});
    } else console.log('Account creation error')
  }

  const handleSignupChange = (event) => {
    const value = event.target.value;
    
    setUserSignUp({
      ...userSignUp,
      [event.target.name]: value
    });
  }

  const isEmailDuplicate = async () => {
    if (userSignUp.email.length === 0) return;
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
    <div className={styles.signUpFormContainer}>
      <div className={styles.form}>
        <div className={styles.formHeader}>
          <h1>Welcome!</h1>
          <p>Let's create your account</p>
        </div>
        <div className={styles.formInput}>
          <form onSubmit={addUser}>
            <input
              className={styles.input}
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
            <p className={styles.inputFieldSubtext}>never shown to the public</p>
            <input
              className={styles.input}
              type="text"
              name="username"
              value={userSignUp.username}
              onChange={handleSignupChange}
              placeholder="Username *"
              onBlur={isUsernameDuplicate}
            />
            {userSignUp.username.length === 0
              ? null 
              : userSignUp.username.length < 3
                ? <div className={styles.error}><IoClose size="1.1rem" className={styles.errorIcon}/> <p className={styles.errorMessage}>Your username is too short</p></div>
              : duplicateUsername 
                ? <div className={styles.error}><IoClose size="1.1rem" className={styles.errorIcon}/> <p className={styles.errorMessage}>Your username is not available</p></div>
                : <div className={styles.success}><IoCheckmarkSharp size="1.1rem" className={styles.successIcon}/> <p className={styles.successMessage}>Your username is available</p></div>
            }
            <p className={styles.inputFieldSubtext}>unique, no spaces, short</p>
            <input
              className={styles.input}
              type="text"
              name="name"
              value={userSignUp.name}
              onChange={handleSignupChange}
              placeholder="Name"
            />
            <p className={styles.inputFieldSubtext}>your full name, optional</p>
            <input
              className={styles.input}
              type="text"
              name="password"
              value={userSignUp.password}
              onChange={handleSignupChange}
              placeholder="Password *"
            />
            {userSignUp.password.length === 0
              ? null
              : userSignUp.password.length < 10 
                ? <div className={styles.error}><IoClose size="1.1rem" className={styles.errorIcon}/> <p className={styles.errorMessage}>Your password is too short</p></div>
                : <div className={styles.success}><IoCheckmarkSharp size="1.1rem" className={styles.successIcon}/> <p className={styles.successMessage}>Your password looks good</p></div>
              }
            <p className={styles.inputFieldSubtext}>at least 10 characters</p>
            <div className={styles.formFooter}>
              
              <Submit text="Create Account" />
              <Link to="/login"><Button text="Login"></Button></Link>
            </div>
          </form>
        </div>
      </div>
    </div>

  );
}

export default SignUpForm;