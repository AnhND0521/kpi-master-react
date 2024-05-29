import React, { useState } from 'react';
import NavItem from './NavItem';

const Navbar = (props) => {
  const {tab} = props;
  const [activeTab, setActiveTab] = useState(tab || 0);
  console.log(tab);

  return (
    <div className='fixed left-0 top-20 h-full w-60 flex flex-col bg-gray shadow-md py-5'>
      {[0,1,2,3,4].map(i => (
        <NavItem index={i} activeTab={activeTab} setActiveTab={setActiveTab} />
      ))}
    </div>
  )
}

export default Navbar