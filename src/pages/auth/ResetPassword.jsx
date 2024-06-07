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

const ResetPassword = ({ open, setOpen, setOpenLogin, setOpenConfirmCode }) => {
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
            setOpenConfirmCode(true);
          }}
        >
          <BackButton color="black" />
        </div>
        <div className="w-full flex flex-col items-center gap-6 px-12 mt-14">
          <LockClosedIcon className="w-16" />
          <Typography variant="h3" className="font-inter font-black">
            Mật khẩu mới
          </Typography>
          <div className="w-full flex flex-col items-start">
            <Typography variant="h6" className="text-left font-inter my-5">
              Xác minh hoàn tất! Hãy đặt lại mật khẩu mới của bạn
            </Typography>
            <div className="w-full flex flex-col items-center gap-5">
              <Input label="Mật khẩu mới" />
              <Input label="Xác nhận mật khẩu mới" />
            </div>
          </div>
          <Button
            variant="filled"
            className="w-full bg-purple text-sm"
            onClick={() => {
              setOpen(false);
              setOpenLogin(true);
            }}
          >
            Hoàn tất
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

export default ResetPassword;
