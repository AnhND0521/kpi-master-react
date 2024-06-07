import {
  Button,
  Card,
  Drawer,
  IconButton,
  List,
  ListItem,
  Typography,
} from "@material-tailwind/react";
import React, { useState } from "react";
import logo from "../assets/logoblue.png";
import kpi from "../assets/landingpage.png";
import hust from "../assets/hust.png";
import googlecalendar from "../assets/googlecalendar.png";
import notion from "../assets/notion.png";
import jira from "../assets/jira.png";
import sun from "../assets/sun.png";
import fpt from "../assets/fpt.png";
import screenshot from "../assets/screenshot.png";
import { XMarkIcon, Bars3Icon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import Login from "./auth/Login";
import Register from "./auth/Register";
import ForgotPassword from "./auth/ForgotPassword";
import ConfirmCode from "./auth/ConfirmCode";
import ResetPassword from "./auth/ResetPassword";

const LandingPage = () => {
  // const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  // const openDrawer = () => setIsDrawerOpen(true);
  // const closeDrawer = () => setIsDrawerOpen(false);

  const [openLogin, setOpenLogin] = useState(false);
  const [openSignUp, setOpenSignUp] = useState(false);
  const [openForgotPassword, setOpenForgotPassword] = useState(false);
  const [openConfirmCode, setOpenConfirmCode] = useState(false);
  const [openResetPassword, setOpenResetPassword] = useState(false);

  return (
    <div className="w-full h-full">
      {/* <header className='flex items-center justify-between w-full h-16 px-3 py-3 bg-purple'>
        <img src={logo} className='h-full ml-3' />
        <Typography variant='h5' color='white' className='font-inter'>
          KPI Master
        </Typography>
        <IconButton variant="text" size="lg" onClick={isDrawerOpen ? closeDrawer : openDrawer}>
          <Bars3Icon className="h-8 w-8 stroke-2" color='white'/>
        </IconButton>
        <Drawer 
          open={isDrawerOpen}
          onClose={closeDrawer}
          placement='right'
          className='w-2/3 shadow-md'
        >
          <Card
            color="transparent"
            shadow={false}
            className="w-full px-3 py-2"
          >
            <div className='flex justify-end w-full'>
              <IconButton variant="text" size="lg" onClick={closeDrawer}>
                <XMarkIcon className="h-8 w-8 stroke-2" color='dark-gray'/>
              </IconButton>
            </div>
            <List>
              <ListItem>
                How it works
              </ListItem>
              <ListItem>
                Services
              </ListItem>
              <ListItem>
                Blog
              </ListItem>
              <ListItem>
                About Us
              </ListItem>
              <Button className='w-full bg-purple'>
                Contact Us
              </Button>
            </List>
          </Card>
        </Drawer>
      </header> */}
      <main className="flex flex-col items-start gap-8 h-screen px-20 py-16 bg-gradient-to-b from-white to-blue">
        {/* <Typography variant='h3' className='text-textBlue text-left'>
          Make your life easier by actively tracking your plans
        </Typography>
        <Typography variant='h6' className='text-textBlue text-left'>
          Control and analyze your KPI progress in the most efficient way possible
        </Typography>
        <img src={kpi} />
        <Link to='/login'>
          <Button className='h-14 text-lg bg-purple uppercase'>
            Get started
          </Button>
        </Link> */}
        <div className="flex justify-between items-center w-full">
          <div className="flex gap-4 items-center">
            <img src={logo} className="w-16" />
            <div className="flex flex-col items-start gap-2">
              <Typography className="text-3xl text-[#2F65E1] font-medium">
                KPI Master
              </Typography>
              <Typography className="text-xl text-[#2F65E1] font-normal">
                Master your life
              </Typography>
            </div>
          </div>
          <div className="flex justify-right items-center gap-16">
            <Typography className="text-xl text-[#2F65E1] font-medium">
              Cách sử dụng
            </Typography>
            <Typography className="text-xl text-[#2F65E1] font-medium">
              Dịch vụ
            </Typography>
            <Typography className="text-xl text-[#2F65E1] font-medium">
              Blog
            </Typography>
            <Typography className="text-xl text-[#2F65E1] font-medium">
              Về chúng tôi
            </Typography>
            <Button className="bg-purple text-base">Liên hệ</Button>
          </div>
        </div>
        <div className="flex mt-32 gap-20 items-center w-full">
          <div className="flex flex-col gap-16 items-start w-1/2">
            <Typography variant="h2" className="text-[#2F65E1] text-left">
              Làm chủ cuộc sống bằng việc quản lý nhiệm vụ cá nhân một cách hệ
              thống
            </Typography>
            <Typography
              variant="h4"
              className="text-[#2F65E1] text-left font-medium"
            >
              Giúp tổ chức, theo dõi và thúc đẩy công việc của bạn một cách hiệu
              quả
            </Typography>
            <Button
              className="bg-purple text-lg px-20 py-4"
              onClick={() => setOpenLogin(true)}
            >
              Bắt đầu ngay
            </Button>
            <div className="flex gap-12 items-center w-full justify-start">
              <Typography className="text-lg font-medium text-[#2F65E1]">
                Hỗ trợ đồng bộ với
              </Typography>
              <img src={hust} className="w-8" />
              <img src={sun} className="w-12 rounded-lg" />
              <img src={fpt} className="w-12" />
              <img src={googlecalendar} className="w-10 rounded-lg" />
              <img src={notion} className="w-10 rounded-lg" />
              <img src={jira} className="w-8 rounded-lg" />
            </div>
          </div>
          <img src={screenshot} className="w-[40rem]" />
        </div>
      </main>
      {/* <footer className="flex w-full flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 py-6 text-center md:justify-between bg-darkPurple">
        <Typography color="white" className="font-normal">
          Sync with external systems
        </Typography>
        <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
          <li>
            <img src={hust} className='w-8'/>
          </li>
          <li>
            <img src={sun} className='w-8'/>
          </li>
          <li>
            <img src={fpt} className='w-8'/>
          </li>
          <li>
            <img src={googlecalendar} className='w-8'/>
          </li>
          <li>
            <img src={notion} className='w-8'/>
          </li>
          <li>
            <img src={jira} className='w-8'/>
          </li>
        </ul>
      </footer> */}
      <Login
        open={openLogin}
        setOpen={setOpenLogin}
        setOpenSignUp={setOpenSignUp}
        setOpenForgotPassword={setOpenForgotPassword}
      />
      <Register
        open={openSignUp}
        setOpen={setOpenSignUp}
        setOpenLogin={setOpenLogin}
      />
      <ForgotPassword
        open={openForgotPassword}
        setOpen={setOpenForgotPassword}
        setOpenLogin={setOpenLogin}
        setOpenConfirmCode={setOpenConfirmCode}
      />
      <ConfirmCode
        open={openConfirmCode}
        setOpen={setOpenConfirmCode}
        setOpenLogin={setOpenLogin}
        setOpenForgotPassword={setOpenForgotPassword}
        setOpenResetPassword={setOpenResetPassword}
      />
      <ResetPassword
        open={openResetPassword}
        setOpen={setOpenResetPassword}
        setOpenLogin={setOpenLogin}
        setOpenConfirmCode={setOpenConfirmCode}
      />
    </div>
  );
};

export default LandingPage;
