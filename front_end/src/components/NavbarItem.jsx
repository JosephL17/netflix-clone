import React from 'react'
import PropTypes from 'prop-types';

function NavbarItem({label, clickFunc}) {
  return (
    <div onClick={clickFunc} className='text-white cursor-pointer hover:text-gray-300 transition'>{label}</div>
    
  )
}

NavbarItem.propTypes = {
    label: PropTypes.string.isRequired, 
  };

export default NavbarItem