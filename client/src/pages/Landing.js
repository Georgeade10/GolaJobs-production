import React from 'react';
import { Logo } from '../components';
import heroImage from '../assets/images/hero.png';
import Wrapper from '../assets/wrappers/LandingPage';
import './Landing.css';
import { Link, Navigate } from 'react-router-dom';
import { useAppContext } from '../context/appContext';

const Landing = () => {
  const { user } = useAppContext();
  return (
    <React.Fragment>
      {user && <Navigate to='/' />}
      <Wrapper>
        <nav>
          <Logo />
        </nav>
        <section>
          <div className='container'>
            <div>
              <img src={heroImage} alt='Gojobs' className='hero' />
            </div>
            <div>
              <h4>Manage Your Job Applications</h4>
              <p>
                Register and Log in to manage your Job applications in just one
                dashboard.
              </p>
              <p>Keep track of your dream job</p>
              <Link to='/register' className='button'>
                Login/Register
              </Link>
            </div>
          </div>
        </section>
      </Wrapper>
    </React.Fragment>
  );
};

export default Landing;
