import { useState, useEffect } from 'react';
import { FormRow, Alert } from '../components';
import Wrapper from '../assets/wrappers/RegisterPage';
import logo from '../assets/images/logo.png';
import './Register.css';
import { useAppContext } from '../context/appContext';
import { useNavigate } from 'react-router-dom';

// global context and useNavigate later

const initialState = {
  name: '',
  email: '',
  password: '',
  isMember: true,
};
// if possible prefer local state
// global state

function Register() {
  const [values, setValues] = useState(initialState);
  // global context and useNavigate
  const navigate = useNavigate();

  const {
    user,
    isLoading,
    showAlert,
    displayAlert,
    registerUser,
    loginUser,
    setupUser,
  } = useAppContext();

  const toggleMember = () => {
    setValues({ ...values, isMember: !values.isMember });
  };

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const { name, email, password, isMember } = values;
    if (!email || !password || (!isMember && !name)) {
      displayAlert();
      return;
    }
    const currentUser = { name, email, password };
    if (isMember) {
      setupUser({
        currentUser,
        endPoint: 'login',
        alertText: 'Login Successful! Redirecting...',
      }); // invoke setupUser password and pass in current user
    } else {
      setupUser({
        currentUser,
        endPoint: 'register',
        alertText: 'User Created! Redirecting...',
      });
    }
  };
  useEffect(() => {
    if (user) {
      setTimeout(() => {
        navigate('/');
      }, 3000);
    }
  }, [user, navigate]);
  return (
    <Wrapper className='full-page'>
      <form className='form' onSubmit={onSubmit}>
        <img src={logo} alt='Gojobs' className='logo-form' />
        <h3>{values.isMember ? 'Login' : 'Register'}</h3>
        {showAlert && <Alert />}

        {/* name field */}
        {!values.isMember && (
          <FormRow
            type='text'
            name='name'
            value={values.name}
            handleChange={handleChange}
          />
        )}
        {/* email */}
        <FormRow
          type='email'
          name='email'
          value={values.email}
          handleChange={handleChange}
        />
        {/* password*/}
        <FormRow
          type='password'
          name='password'
          value={values.password}
          handleChange={handleChange}
        />

        <button type='submit' className='btn btn-block' disabled={isLoading}>
          submit
        </button>
        <button
          type='button'
          className='btn btn-block btn-hipster'
          disabled={isLoading}
          onClick={() => {
            setupUser({
              currentUser: { email: 'testuser@gmail.com', password: 'secret' },
              endPoint: 'login',
              alertText: 'Login Successful! Redirecting...',
            });
          }}
        >
          {isLoading ? 'loading...' : 'demo app'}
        </button>
        <p>
          {values.isMember ? 'Not a member yet?' : 'Already a member?'}

          <button type='button' onClick={toggleMember} className='member-btn'>
            {values.isMember ? 'Register' : 'Login'}
          </button>
        </p>
      </form>
    </Wrapper>
  );
}

export default Register;
