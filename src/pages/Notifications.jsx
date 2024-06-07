import { Breadcrumbs, Card, CardBody, Typography } from "@material-tailwind/react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import { FunnelIcon } from "@heroicons/react/20/solid";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Wrapper from "../components/Wrapper";
import PageHeader from "../components/PageHeader";
import BackButton from "../components/BackButton";

const Notifications = () => {
    const [notifications, setNotifications] = useState([
        {
            id: 1,
            content: "Nhiệm vụ 'Học UI/UX' đến hạn vào hôm nay! Hãy nhớ hoàn thành nhé!",
            time: new Date(),
            type: 0,
            read: false
        },
        {
            id: 2,
            content: "Nhiệm vụ 'Làm BTVN' đã bị quá hạn! Hãy hoàn thành trước khi quá muộn!",
            time: new Date(),
            type: 1,
            read: false
        },
        {
            id: 3,
            content: "Nhiệm vụ 'Báo cáo GR1' đã bị quá hạn! Hãy hoàn thành trước khi quá muộn!",
            time: new Date(),
            type: 0,
            read: true
        },
        {
            id: 4,
            content: "Nhiệm vụ 'Học ITSS' đến hạn vào hôm nay! Hãy nhớ hoàn thành nhé!",
            time: new Date(),
            type: 0,
            read: true
        },
        {
            id: 5,
            content: "Nhiệm vụ 'Chuẩn bị bài' đã bị quá hạn! Hãy hoàn thành trước khi quá muộn!",
            time: new Date(),
            type: 1,
            read: false
        },
        {
            id: 6,
            content: "Nhiệm vụ 'ABC' đã bị quá hạn! Hãy hoàn thành trước khi quá muộn!",
            time: new Date(),
            type: 0,
            read: true
        },
        {
            id: 7,
            content: "Nhiệm vụ 'ABC' đã bị quá hạn! Hãy hoàn thành trước khi quá muộn!",
            time: new Date(),
            type: 0,
            read: true
        }
    ]);
    const navigate = useNavigate();
    const markAsRead = (id) => {
        for (let i=0; i<notifications.length; i++) {
            if (notifications[i].id === id) {
                notifications[i].read = true;
                console.log(notifications[i])
                setNotifications(notifications);
                navigate('/notifications');
                return;
            }
        }
    };

    const markAllAsRead = () => {
        for (let i=0; i<notifications.length; i++) {
            notifications[i].read = true;
        }
        setNotifications(notifications);
        navigate('/notifications');
    }

    return (
        <Wrapper tab={3}>
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
                            Thông báo
                        </Link>
                    </Breadcrumbs>
                </div>
                <PageHeader label={'Thông báo'} />
                <div className="flex justify-between">
                    <Typography className="font-inter text-purple font-normal text-base" onClick={markAllAsRead}>
                        Đánh dấu tất cả là đã đọc
                    </Typography>
                    {/* <div className="flex items-center gap-2">
                        <FunnelIcon className="w-5"></FunnelIcon>
                        <Typography className="font-inter text-md">Lọc</Typography>
                    </div> */}
                </div>
                <div className="flex flex-col gap-4 w-3/4">
                { notifications.map(n => (
                    <Card key={n.id} className={`${n.read ? 'bg-[#E8DBFC]/[.3]' : 'bg-[#E8DBFC]/[.5]'} flex flex-col items-start`}>
                        { !n.read && <div className={`absolute top-3 left-0 w-0.5 h-[4.2rem]`} style={{ backgroundColor: n.type === 0 ? 'orange' : 'red' }}></div>}
                        <CardBody className="p-4 w-full cursor-pointer" onClick={(e) => { if (!e.target.id) navigate('/kpi/1'); }}>
                            <div className="flex justify-between mb-3">
                                <Typography className={`text-left font-inter text-base font-${n.read ? 'normal' : 'semibold'}`}>
                                    {n.content}
                                </Typography>
                                <Typography className="w-20 text-right text-textGray font-inter text-sm">
                                    2:01 AM
                                </Typography>
                            </div>
                            <div className="flex justify-start gap-5">
                                <Typography id="mark1" className="text-left text-purple text-sm font-inter cursor-pointer" onClick={() => markAsRead(n.id)}>Đánh dấu là đã đọc</Typography>
                                <Typography id="mark2" className="text-left text-purple text-sm font-inter cursor-pointer" onClick={() => markAsRead(n.id)}>Đánh dấu là đã hoàn thành</Typography>
                            </div>
                        </CardBody>
                    </Card>
                ))}
                </div>
        </Wrapper>
    );
}

export default Notifications;