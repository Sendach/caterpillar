import { useEffect, useState } from 'react';
import userService from './services/users.js';
import { Navbar, SignUpPopup, LoginPopup } from './components/index';
import styles from './styles/globals.module.scss';

function App() {
  const [users, setUsers] = useState([]);
  const [toggleSignUpPopupForm, setToggleSignUpPopupForm] = useState(false);
 
  useEffect(() => {
    userService
      .getAll()
      .then(users => {
      setUsers(users);
    })
  }, [])
  
  const toggleSignUpPopUpForm = () => {
    setToggleSignUpPopupForm(!toggleSignUpPopupForm);
  }

  return (
    <div className={styles}>
      <Navbar toggleSignUpPopUpForm={toggleSignUpPopUpForm}/>
      {toggleSignUpPopupForm 
        ? <SignUpPopup />
        : null
      }
    </div>
  );
}

export default App;
