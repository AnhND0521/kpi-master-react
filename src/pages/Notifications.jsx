import { Card, CardBody, Typography } from "@material-tailwind/react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import { FunnelIcon } from "@heroicons/react/20/solid";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Wrapper from "../components/Wrapper";
import PageHeader from "../components/PageHeader";

const Notifications = () => {
    const [notifications, setNotifications] = useState([
        {
            id: 1,
            content: "Nhiệm vụ 'ABC' đã bị quá hạn! Hãy hoàn thành trước khi quá muộn!",
            time: new Date(),
            type: 0,
            read: false
        },
        {
            id: 2,
            content: "Nhiệm vụ 'ABC' đã bị quá hạn! Hãy hoàn thành trước khi quá muộn!",
            time: new Date(),
            type: 1,
            read: false
        },
        {
            id: 3,
            content: "Nhiệm vụ 'ABC' đã bị quá hạn! Hãy hoàn thành trước khi quá muộn!",
            time: new Date(),
            type: 0,
            read: true
        },
        {
            id: 4,
            content: "Nhiệm vụ 'ABC' đã bị quá hạn! Hãy hoàn thành trước khi quá muộn!",
            time: new Date(),
            type: 0,
            read: true
        },
        {
            id: 5,
            content: "Nhiệm vụ 'ABC' đã bị quá hạn! Hãy hoàn thành trước khi quá muộn!",
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
            console.log(notifications[i])
        }
        setNotifications(notifications);
        navigate('/notifications');
    }

    return (
        <Wrapper tab={3}>
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
                        <div className={`absolute top-3 left-0 w-0.5 h-[4.2rem]`} style={{ backgroundColor: n.type === 0 ? 'orange' : 'red' }}></div>
                        <CardBody className="p-4 w-full cursor-pointer" onClick={(e) => { if (!e.target.id) navigate('/kpi/1/task/1.1'); }}>
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