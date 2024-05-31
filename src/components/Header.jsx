import { Input, Menu, MenuHandler, MenuItem, MenuList, Typography } from '@material-tailwind/react'
import React from 'react'
import logo from '../assets/logo.png';
import profilePic from '../assets/avatar.png'
import BackButton from './BackButton'
import { ArrowRightEndOnRectangleIcon, Cog6ToothIcon, MagnifyingGlassIcon, UserCircleIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';

const Header = (props) => {
  const { backDestination, state } = props;
  return (
    <header className='fixed top-0 flex items-center justify-between w-full h-20 px-3 py-3 bg-purple z-50'>
      <Link to='/dashboard' className='flex items-center justify-start gap-4'>
          <img src={logo} className='h-10 ml-3' />
          <div>
            <Typography variant='h5' color='white' className='font-inter'>
              KPI Master
            </Typography>
          </div>
      </Link>
      <div className='w-96'>
        <Input type="text"
        placeholder="Search"
        className="!border !border-gray-300 bg-white text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 placeholder:opacity-100 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10"
        labelProps={{
          className: "hidden",
        }} icon={<MagnifyingGlassIcon className='w-5'/>}/>
      </div>
      <div className='flex items-center justify-right gap-12 text-white pe-8'>
        <Link to='/dashboard'><Typography className='text-base font-medium cursor-pointer'>Trang chủ</Typography></Link>
        <Typography className='text-base font-medium cursor-pointer'>Về chúng tôi</Typography>
        <Typography className='text-base font-medium cursor-pointer'>Liên hệ</Typography>
        <Menu placement='bottom-end'>
          <MenuHandler>
            <img className='rounded-full w-10 cursor-pointer' src={profilePic}/>
          </MenuHandler>
          <MenuList>
            <Link to='/settings/profile'>
              <MenuItem className='flex gap-4 items-center justify-start'><UserCircleIcon className='w-5'/>Hồ sơ</MenuItem>
            </Link>
            <Link to='/settings'>
              <MenuItem className='flex gap-4 items-center justify-start'><Cog6ToothIcon className='w-5'/>Cài đặt</MenuItem>
            </Link>
            <Link to='/'>
              <MenuItem className='flex gap-4 items-center justify-start text-red'><ArrowRightEndOnRectangleIcon className='w-5'/>Đăng xuất</MenuItem>
            </Link>
          </MenuList>
        </Menu>
      </div>
    </header>
  )
}

export default Header