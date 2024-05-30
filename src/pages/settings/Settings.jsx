import { ArrowRightEndOnRectangleIcon, BellIcon, ChartBarSquareIcon, ChatBubbleOvalLeftIcon, ChevronRightIcon, EnvelopeIcon, PaintBrushIcon, QuestionMarkCircleIcon, ShieldCheckIcon, UserCircleIcon } from "@heroicons/react/24/outline";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import SettingsOption from "../../components/SettingsOption";
import { Breadcrumbs, Typography } from "@material-tailwind/react";
import avatar from '../../assets/avatar.png';
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import ConfirmDialog from "../../components/ConfirmDialog";
import Wrapper from "../../components/Wrapper";
import PageHeader from "../../components/PageHeader";
import BackButton from "../../components/BackButton";

const Settings = () => {

    const [openDialog, setOpenDialog] = useState(false);
    const navigate = useNavigate();

    return (
        <div className="w-3/4">
        <Wrapper tab={4}>
                <div className='flex gap-4 items-center'>
                    <BackButton to='/dashboard'/>
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
                        <Link to="#">
                            Cài đặt
                        </Link>
                    </Breadcrumbs>
                </div>
                <PageHeader label={'Cài đặt'} />

                <SettingsOption 
                    icon={<UserCircleIcon className="w-8"/>} 
                    optionName="Tài khoản"
                    to='/settings/profile'
                />
                {/* <SettingsOption 
                    icon={<ChartBarSquareIcon className="w-8"/>} 
                    optionName="Báo cáo" 
                    to='/statistics'
                /> */}
                <SettingsOption
                    icon={<PaintBrushIcon className="w-8"/>}
                    optionName="Chủ đề"
                    to="/settings/theme"
                />
                <SettingsOption
                    icon={<BellIcon className="w-8"/>}
                    optionName="Thông báo"
                />
                <SettingsOption
                    icon={<ShieldCheckIcon className="w-8"/>}
                    optionName="Quyền riêng tư"
                    to="/settings/privacy"
                />
                <SettingsOption
                    icon={<QuestionMarkCircleIcon className="w-8"/>}
                    optionName="Trợ giúp"
                    to="/settings/help"
                />
                <SettingsOption
                    icon={<ChatBubbleOvalLeftIcon className="w-8"/>}
                    optionName="Feedback"
                    to="/settings/feedback"
                />
                <div onClick={() => setOpenDialog(true)} className="w-full">
                <SettingsOption
                    icon={<ArrowRightEndOnRectangleIcon className="w-8"/>}
                    optionName="Đăng xuất"
                    control={<></>}
                />
                </div>

            <ConfirmDialog 
                message='Bạn có chắc muốn đăng xuất?' 
                open={openDialog} 
                handleOpen={() => setOpenDialog(true)} 
                handleCancel={() => setOpenDialog(false)}
                handleConfirm={() => navigate('/')}
            />
        </Wrapper>
        </div>
    );
}

export default Settings;