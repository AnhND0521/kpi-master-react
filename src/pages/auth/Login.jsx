import {
  Button,
  Dialog,
  DialogBody,
  DialogHeader,
  IconButton,
  Input,
  Typography,
} from "@material-tailwind/react";
import React from "react";
import logoblue from "../../assets/logoblue.png";
import google from "../../assets/google.png";
import microsoft from "../../assets/microsoft.png";
import { Link } from "react-router-dom";
import { XMarkIcon } from "@heroicons/react/24/outline";

const Login = ({ open, setOpen, setOpenSignUp, setOpenForgotPassword }) => {
  return (
    <Dialog open={open} handler={() => setOpen(!open)}>
      <DialogHeader className="justify-between">
        <Typography variant="h5"></Typography>
        <XMarkIcon
          className="w-5 cursor-pointer"
          onClick={() => {
            setOpen(false);
          }}
        />
      </DialogHeader>
      <DialogBody className="text-black px-6 py-0 h-[46rem] flex flex-col items-center">
        <div className="flex flex-col items-center mt-14 gap-8 px-12 w-[36rem]">
          <img src={logoblue} className="w-16" />
          <Typography
            variant="h3"
            className="font-inter font-black font-semibold"
          >
            Đăng nhập
          </Typography>
          <div className="w-full flex flex-col items-center gap-4">
            <Input label="Email" />
            <Input label="Mật khẩu" />
          </div>
          {/* <Link to='/forgot-password'> */}
          <Typography
            variant="paragraph"
            className="text-textBlue cursor-pointer"
            onClick={() => {
              setOpen(false);
              setOpenForgotPassword(true);
              console.log(true)
            }}
          >
            Quên mật khẩu?
          </Typography>
          {/* </Link> */}
          <div className="w-full flex flex-col items-center gap-3">
            <Link to="/dashboard" className="w-full">
              <Button variant="filled" className="w-full bg-purple text-sm">
                Đăng nhập
              </Button>
            </Link>
            {/* <Link to='/register' className='w-full'> */}
            <Button
              variant="outlined"
              className="w-full border-purple text-purple text-sm"
              onClick={() => {
                setOpen(false);
                setOpenSignUp(true);
              }}
            >
              Đăng ký
            </Button>
            {/* </Link>         */}
          </div>
          <Typography variant="h4" className="font-inter font-black">
            hoặc
          </Typography>
          <div className="w-full flex justify-center gap-3">
            <IconButton variant="outlined" className="border-textGray">
              <img src={google} className="w-20" />
            </IconButton>
            <IconButton variant="outlined" className="border-textGray">
              <img src={microsoft} className="w-20" />
            </IconButton>
          </div>
        </div>
      </DialogBody>
    </Dialog>
  );
};

export default Login;
