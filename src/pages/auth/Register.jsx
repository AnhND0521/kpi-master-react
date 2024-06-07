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
import BackButton from "../../components/BackButton";
import { XMarkIcon } from "@heroicons/react/24/outline";

const Register = ({ open, setOpen, setOpenLogin }) => {
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
        <div
          onClick={() => {
            setOpen(false);
            setOpenLogin(true);
          }}
        >
          <BackButton color="black" />
        </div>
        <div className="w-full flex flex-col items-center gap-6 px-12 mt-14">
          <img src={logoblue} className="w-16" />
          <Typography
            variant="h3"
            className="font-inter font-black font-semibold"
          >
            Tạo tài khoản
          </Typography>
          <div className="w-full flex flex-col items-center gap-6">
            <Input label="E-mail" />
            <Input label="Mật khẩu" />
            <Input label="Xác nhận mật khẩu" />
          </div>
          <Button
            variant="filled"
            className="w-full bg-purple text-sm"
            onClick={() => {
              setOpen(false);
              setOpenLogin(true);
            }}
          >
            Đăng ký
          </Button>
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
          <div className="flex items-center justify-center gap-2">
            <Typography variant="paragraph">Bạn đã có tài khoản?</Typography>
            <Typography
              variant="paragraph"
              className="text-textBlue cursor-pointer"
              onClick={() => {
                setOpen(false);
                setOpenLogin(true);
              }}
            >
              Đăng nhập
            </Typography>
          </div>
        </div>
      </DialogBody>
    </Dialog>
  );
};

export default Register;
