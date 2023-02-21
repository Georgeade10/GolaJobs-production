import React from 'react';
import { Link } from 'react-router-dom';
import Wrapper from '../assets/wrappers/ErrorPage';
import img from '../assets/images/undraw_page_not_found_re_e9o6.svg';

const Error = () => {
  return (
    <Wrapper className='full-page'>
      <div>
        <img src={img} alt='not found' />
        <p>Page Not Found</p>
        <Link to='/'>Back Home</Link>
      </div>
    </Wrapper>
  );
};

export default Error;
