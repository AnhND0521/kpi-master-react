import { ArrowRightEndOnRectangleIcon, BellIcon, ChartBarSquareIcon, ChatBubbleOvalLeftIcon, ChevronRightIcon, EnvelopeIcon, PaintBrushIcon, QuestionMarkCircleIcon, ShieldCheckIcon, UserCircleIcon } from "@heroicons/react/24/outline";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import SettingsOption from "../../components/SettingsOption";
import { Typography } from "@material-tailwind/react";
import avatar from '../../assets/avatar.png';
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import ConfirmDialog from "../../components/ConfirmDialog";
import Wrapper from "../../components/Wrapper";
import PageHeader from "../../components/PageHeader";

const Settings = () => {

    const [openDialog, setOpenDialog] = useState(false);
    const navigate = useNavigate();

    return (
        <div className="w-3/4">
        <Wrapper tab={4}>
                <PageHeader label={'Cài đặt'} />

                <SettingsOption 
                    icon={<UserCircleIcon className="w-8"/>} 
                    optionName="Tài khoản"
                    to='/settings/profile'
                />
                <SettingsOption 
                    icon={<ChartBarSquareIcon className="w-8"/>} 
                    optionName="Báo cáo" 
                    to='/statistics'
                />
                <SettingsOption
                    icon={<PaintBrushIcon className="w-8"/>}
                    optionName="Theme"
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