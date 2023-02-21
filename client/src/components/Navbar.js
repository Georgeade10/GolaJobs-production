import Wrapper from '../assets/wrappers/Navbar';
import { FaAlignLeft, FaUserCircle, FaCaretDown } from 'react-icons/fa';
import { useAppContext } from '../context/appContext';
import Logo from './Logo';
import { useState } from 'react';
const Navbar = () => {
  const [showLogOut, setShowLogOut] = useState(false);
  const { toggleSidebar, logoutUser, user } = useAppContext();
  return (
    <Wrapper>
      <div className='nav-center'>
        <button type='button' className='toggle-btn' onClick={toggleSidebar}>
          <FaAlignLeft />
        </button>
        <div>
          <Logo />
          <h3 className='logo-text'>Dashboard</h3>
        </div>
        <div className='btn-container'>
          <button
            type='button'
            className='btn'
            onClick={() => setShowLogOut(!showLogOut)}
          >
            <FaUserCircle />
            {user?.name}
            <FaCaretDown />
          </button>
          <div className={showLogOut ? 'dropdown show-dropdown' : 'dropdown'}>
            <button type='button' className='dropdown-btn' onClick={logoutUser}>
              Logout
            </button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Navbar;
