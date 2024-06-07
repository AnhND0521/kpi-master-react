import {
  Button,
  Dialog,
  DialogBody,
  DialogHeader,
  Input,
  Typography,
} from "@material-tailwind/react";
import React from "react";
import { Link } from "react-router-dom";
import { LockClosedIcon } from "@heroicons/react/24/solid";
import BackButton from "../../components/BackButton";
import { XMarkIcon } from "@heroicons/react/24/outline";

const ConfirmCode = ({
  open,
  setOpen,
  setOpenForgotPassword,
  setOpenLogin,
  setOpenResetPassword,
}) => {
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
            setOpenForgotPassword(true);
          }}
        >
          <BackButton color="black" />
        </div>
        <div className="w-full flex flex-col items-center gap-6 px-12 mt-14">
          <LockClosedIcon className="w-16" />
          <Typography
            variant="h3"
            className="font-inter font-black font-semibold"
          >
            Xác minh
          </Typography>
          <div className="w-full flex flex-col items-start">
            <Typography variant="h6" className="font-inter mb-2 text-left">
              Nhập mã xác minh đã được gửi đến email của bạn:
            </Typography>
            <Input
              type="text"
              placeholder="XXX-XXX"
              labelProps={{ className: "hidden" }}
              className="text-lg"
            />
          </div>
          <div className="flex w-full items-center justify-start gap-2">
            <Typography variant="paragraph" className="font-medium">
              Bạn chưa nhận được mã?
            </Typography>
            <Typography
              variant="paragraph"
              className="text-textBlue font-medium cursor-pointer"
            >
              Gửi lại
            </Typography>
          </div>
          <Button
            variant="filled"
            className="w-full bg-purple text-sm"
            onClick={() => {
              setOpen(false);
              setOpenResetPassword(true);
            }}
          >
            Tiếp tục
          </Button>
          <div className="flex w-full items-start justify-start gap-2">
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

export default ConfirmCode;
