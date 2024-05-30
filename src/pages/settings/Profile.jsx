import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import avatar from '../../assets/avatar.png';
import { Breadcrumbs, Button, Card, Input, Typography } from "@material-tailwind/react";
import CornerButton from "../../components/CornerButton";
import { Link } from "react-router-dom";
import Wrapper from "../../components/Wrapper";
import BackButton from "../../components/BackButton";

const Profile = () => {
    return (
        <Wrapper tab={4}>
                <div className='flex gap-4 items-center'>
                    <BackButton to='/settings'/>
                    <Breadcrumbs>
                        <Link to="/dashboard" className="opacity-60">
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            >
                            <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                            </svg>
                        </Link>
                        <Link to="/settings" className="opacity-60">
                            Cài đặt
                        </Link>
                        <Link to="#">
                            Tài khoản
                        </Link>
                    </Breadcrumbs>
                </div>
                <div className="flex items-start justify-start gap-12 mt-8">
                <Card className="flex flex-col items-center w-96 p-4">
                    <img src={avatar} className="w-48 h-48 rounded-full mb-8"/>
                    <div className="flex flex-col items-center justify-between gap-4 mt-5 mb-10 w-full">
                        <Button variant="outlined" className="text-purple w-full">Đổi mật khẩu</Button>
                        <Button variant="outlined" className="text-purple w-full">Đổi ảnh đại diện</Button>
                    </div>
                </Card>
                    <form className="flex flex-col items-start gap-5 w-full">
                    <div className="flex items-center justify-center gap-2 mt-2 mb-6">
                        <Typography className="font-inter text-2xl font-medium">
                            Nguyễn Anh Long
                        </Typography>
                    </div>
                        <div className="flex items-center justify-start gap-2 w-full">
                            <Input type="text" label="Họ *" value={'Nguyễn'} />
                            <Input type="text" label="Tên *" value={'Anh Long'} />
                        </div>
                        <Input type="email" label="Email *" value={'nguyenanhlong@mnsd.com'} />
                        <Input type="text" label="Số điện thoại" value={'0987654321'} />
                        <Input type="text" label="Nơi làm việc" value={'Rạp xiếc Trung ương'} />
                        <Button className="bg-purple w-full mt-6">Lưu</Button>
                    </form>
                </div>
        </Wrapper>
    );
}

export default Profile;