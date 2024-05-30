import { Breadcrumbs, Card, CardBody, Input, Typography } from "@material-tailwind/react";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import { ArrowPathIcon, BellAlertIcon, ChartBarIcon, ClipboardDocumentIcon, CloudArrowDownIcon, EnvelopeIcon, MagnifyingGlassIcon, QuestionMarkCircleIcon, QueueListIcon } from "@heroicons/react/24/outline";
import HelpItem from "../../components/HelpItem";
import SettingsOption from "../../components/SettingsOption";
import Wrapper from "../../components/Wrapper";
import PageHeader from "../../components/PageHeader";
import BackButton from "../../components/BackButton";
import { Link } from "react-router-dom";

const Help = () => {
    return (
        <Wrapper tab={4}>
            <div className="flex flex-col gap-6 items-start w-2/3">
                <div className='flex gap-4 items-center'>
                    <BackButton to='/settings'/>
                    <Breadcrumbs>
                        <Link to="/settings" className="opacity-60">
                            Cài đặt
                        </Link>
                        <Link to="#">
                            Trợ giúp
                        </Link>
                    </Breadcrumbs>
                </div>
                <PageHeader label={"Trợ giúp"} />
                <Typography variant="h5">Xin chào, bạn cần giúp gì?</Typography>
                <Input color="indigo" label="Tìm kiếm" icon={<MagnifyingGlassIcon className="w-6"/>} />
                
                <div className="grid grid-cols-2 gap-5 w-full my-4">
                    <HelpItem icon={<ClipboardDocumentIcon className="w-10" />} label="Thiết lập KPI" />
                    <HelpItem icon={<QueueListIcon className="w-10" />} label="Thiết lập nhiệm vụ" />
                    <HelpItem icon={<ChartBarIcon className="w-10" />} label="Đánh giá KPI" />
                    <HelpItem icon={<CloudArrowDownIcon className="w-10" />} label="Đồng bộ dữ liệu" />
                    <HelpItem icon={<ArrowPathIcon className="w-10" />} label="Lặp lại" />
                    <HelpItem icon={<BellAlertIcon className="w-10" />} label="Nhắc nhở" />
                </div>

                <Typography variant="h5">Bạn tìm gì khác?</Typography>
                <div className="flex flex-col items-start gap-4 w-full">
                    <SettingsOption icon={<QuestionMarkCircleIcon className="w-6"/>} optionName="Câu hỏi thường gặp" />
                    <SettingsOption icon={<EnvelopeIcon className="w-6"/>} optionName="Liên hệ với chúng tôi" />
                </div>
            </div>
        </Wrapper>
    );
}

export default Help;