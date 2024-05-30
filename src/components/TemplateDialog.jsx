import { XMarkIcon } from "@heroicons/react/24/outline";
import { Button, Card, CardBody, Carousel, Dialog, DialogBody, DialogFooter, DialogHeader, Typography } from "@material-tailwind/react";
import AddKPITask from "./AddKPITask";
import { useState } from "react";
import moment from "moment/moment";
import { getCurrentKpis, saveKpi } from "../utils/dataUtils";

const TemplateDialog = ({open, setOpen, setCurrentKpis}) => {

    const templates = [
        [
        {
            id: '1',
            name: 'Học tập',
            description: '',
            due: new Date("2024-06-18"),
            repeat: 0,
            weights: {
                quantity: 50,
                quality: 25,
                time: 25
            },
            tasks: [
                {
                    id: '1.1',
                    name: 'Học UI/UX',
                    date: new Date("2024-05-16"),
                    start: "9:20",
                    end: "11:45",
                    status: 2,
                    repeat: 0,
                    noti: 1,
                    priority: 2,
                    quality: 5
                },
                {
                    id: '1.2',
                    name: 'Học hệ tương tác',
                    date: new Date("2024-05-13"),
                    start: "12:30",
                    end: "14:00",
                    status: 1,
                    repeat: 0,
                    noti: 1,
                    priority: 2,
                    quality: 5,
                    completed: new Date("2024-05-13T13:59:00.000Z")
                },
                {
                    id: '1.3',
                    name: 'Học công nghệ phần mềm',
                    date: new Date("2024-05-14"),
                    start: "15:05",
                    end: "17:30",
                    status: 1,
                    repeat: 0,
                    noti: 1,
                    priority: 2,
                    quality: 5,
                    completed: new Date("2024-05-14T16:45:00.000Z")
                },
                {
                    id: '1.4',
                    name: 'Ôn bài',
                    date: new Date("2024-05-15"),
                    start: "17:30",
                    end: "19:00",
                    status: 2,
                    repeat: 0,
                    noti: 2,
                    priority: 2,
                    quality: 5
                },
                {
                    id: '1.5',
                    name: 'Ôn thi cuối kỳ',
                    date: new Date("2024-05-20"),
                    start: "12:30",
                    end: "14:00",
                    status: 1,
                    repeat: 0,
                    noti: 1,
                    priority: 2,
                    quality: 5,
                    completed: new Date("2024-05-20T13:59:00.000Z")
                },
                {
                    id: '1.6',
                    name: 'Học IT4321',
                    date: new Date("2024-05-25"),
                    start: "8:25",
                    end: "11:45",
                    status: 0,
                    repeat: 0,
                    noti: 0,
                    priority: 2,
                    quality: 5
                },
                {
                    id: '1.7',
                    name: 'Học IT1234',
                    date: new Date("2024-05-22"),
                    start: "14:10",
                    end: "15:50",
                    status: 0,
                    repeat: 0,
                    noti: 0,
                    priority: 2,
                    quality: 5
                },
                {
                    id: '1.8',
                    name: 'Xem lại bài',
                    date: new Date("2024-05-29"),
                    start: "11:45",
                    end: "15:00",
                    status: 1,
                    repeat: 0,
                    noti: 0,
                    priority: 2,
                    quality: 5,
                    completed: new Date("2024-05-24T15:59:00.000Z")
                },
                {
                    id: '1.9',
                    name: 'Chuẩn bị bài mới',
                    date: new Date("2024-06-02"),
                    start: "8:25",
                    end: "12:30",
                    status: 0,
                    repeat: 0,
                    noti: 0,
                    priority: 2,
                    quality: 5
                },
                {
                    id: '1.10',
                    name: 'Lên kế hoạch học tập',
                    date: new Date("2024-06-05"),
                    start: "14:30",
                    end: "16:30",
                    status: 0,
                    repeat: 0,
                    noti: 0,
                    priority: 2,
                    quality: 5
                },
                {
                    id: '1.11',
                    name: 'Họp bài tập nhóm',
                    date: new Date("2024-06-06"),
                    start: "9:30",
                    end: "11:30",
                    status: 0,
                    repeat: 0,
                    noti: 0,
                    priority: 2,
                    quality: 5
                }
            ]   
        },
        {
            id: '2',
            name: 'Nghiên cứu',
            description: '',
            due: new Date("2024-06-18"),
            repeat: 0,
            weights: {
                quantity: 50,
                quality: 25,
                time: 25
            },
            tasks: [
                {
                    id: '2.1',
                    name: 'Báo cáo đề tài ABC',
                    date: new Date("2024-05-16"),
                    start: "9:20",
                    end: "11:45",
                    status: 1,
                    repeat: 0,
                    noti: 0,
                    priority: 2,
                    quality: 5,
                    completed: new Date("2024-05-16T11:40:00.000Z")
                },
                {
                    id: '2.2',
                    name: 'Nghiên cứu đề tài XYZ',
                    date: new Date("2024-05-18"),
                    start: "12:30",
                    end: "15:50",
                    status: 2,
                    repeat: 0,
                    noti: 0,
                    priority: 2,
                    quality: 5
                },
                {
                    id: '2.3',
                    name: 'Họp lab',
                    date: new Date("2024-05-22"),
                    start: "6:45",
                    end: "10:05",
                    status: 1,
                    repeat: 0,
                    noti: 0,
                    priority: 2,
                    quality: 5,
                    completed: new Date("2024-05-22T10:20:00.000Z")
                },
                {
                    id: '2.4',
                    name: 'Trình bày đề tài trước Bộ',
                    date: new Date("2024-05-14"),
                    start: "15:00",
                    end: "17:30",
                    status: 1,
                    repeat: 0,
                    noti: 0,
                    priority: 2,
                    quality: 5,
                    completed: new Date("2024-05-14T17:30:00.000Z")
                },
                {
                    id: '2.5',
                    name: 'Lên lab',
                    date: new Date("2024-05-25"),
                    start: "14:00",
                    end: "17:30",
                    status: 0,
                    repeat: 0,
                    noti: 0,
                    priority: 2,
                    quality: 5
                },
                {
                    id: '2.6',
                    name: 'Tổng kết đề tài DEF',
                    date: new Date("2024-05-30"),
                    start: "8:00",
                    end: "9:30",
                    status: 0,
                    repeat: 0,
                    noti: 0,
                    priority: 2,
                    quality: 5
                },
                {
                    id: '2.7',
                    name: 'Lên phòng thí nghiệm',
                    date: new Date("2024-06-03"),
                    start: "6:45",
                    end: "9:15",
                    status: 1,
                    repeat: 0,
                    noti: 0,
                    priority: 2,
                    quality: 5,
                    completed: new Date("2024-06-03T09:00:00.000Z")
                },
                {
                    id: '2.8',
                    name: 'Khảo sát đề tài nghiên cứu',
                    date: new Date("2024-06-07"),
                    start: "14:30",
                    end: "16:30",
                    status: 1,
                    repeat: 0,
                    noti: 0,
                    priority: 2,
                    quality: 5,
                    completed: new Date("2024-06-07T16:00:00.000Z")
                }
            ]   
        },
        {
            id: '3',
            name: 'Phục vụ',
            description: '',
            due: new Date("2024-06-18"),
            repeat: 0,
            weights: {
                quantity: 50,
                quality: 25,
                time: 25
            },
            tasks: [
                {
                    id: '3.1',
                    name: 'Họp hội đồng cán bộ',
                    date: new Date("2024-05-14"),
                    start: "14:30",
                    end: "16:30",
                    status: 1,
                    repeat: 0,
                    noti: 0,
                    priority: 2,
                    quality: 5,
                    completed: new Date("2024-05-14T16:15:00.000Z")
                },
                {
                    id: '3.2',
                    name: 'Họp thường kỳ liên chi đoàn',
                    date: new Date("2024-05-17"),
                    start: "8:00",
                    end: "10:00",
                    status: 2,
                    repeat: 0,
                    noti: 0,
                    priority: 2,
                    quality: 5
                },
                {
                    id: '3.3',
                    name: 'Họp đại hội chi bộ Đảng',
                    date: new Date("2024-05-25"),
                    start: "14:00",
                    end: "16:00",
                    status: 1,
                    repeat: 0,
                    noti: 0,
                    priority: 2,
                    quality: 5,
                    completed: new Date("2024-05-25T15:59:00.000Z")
                },
                {
                    id: '3.4',
                    name: 'Họp bộ môn',
                    date: new Date("2024-06-01"),
                    start: "16:00",
                    end: "17:30",
                    status: 1,
                    repeat: 0,
                    noti: 0,
                    priority: 2,
                    quality: 5,
                    completed: new Date("2024-06-01T17:35:00.000Z")
                },
                {
                    id: '3.5',
                    name: 'Họp khoa',
                    date: new Date("2024-06-02"),
                    start: "14:00",
                    end: "15:30",
                    status: 0,
                    repeat: 0,
                    noti: 0,
                    priority: 2,
                    quality: 5
                },
                {
                    id: '3.6',
                    name: 'Hướng dẫn đồ án',
                    date: new Date("2024-06-05"),
                    start: "12:30",
                    end: "14:30",
                    status: 0,
                    repeat: 0,
                    noti: 0,
                    priority: 2,
                    quality: 5
                }
            ]
        },
    ],
    [
        {
            id: '1',
            name: 'Giảng dạy',
            description: '',
            due: new Date("2024-06-18"),
            repeat: 0,
            weights: {
                quantity: 50,
                quality: 25,
                time: 25
            },
            tasks: [
                {
                    id: '1.1',
                    name: 'Dạy UI/UX',
                    date: new Date("2024-05-16"),
                    start: "9:20",
                    end: "11:45",
                    status: 2,
                    repeat: 0,
                    noti: 1,
                    priority: 2,
                    quality: 5
                },
                {
                    id: '1.2',
                    name: 'Dạy hệ tương tác',
                    date: new Date("2024-05-13"),
                    start: "12:30",
                    end: "14:00",
                    status: 1,
                    repeat: 0,
                    noti: 1,
                    priority: 2,
                    quality: 5,
                    completed: new Date("2024-05-13T13:59:00.000Z")
                },
                {
                    id: '1.3',
                    name: 'Dạy công nghệ phần mềm',
                    date: new Date("2024-05-14"),
                    start: "15:05",
                    end: "17:30",
                    status: 1,
                    repeat: 0,
                    noti: 1,
                    priority: 2,
                    quality: 5,
                    completed: new Date("2024-05-14T16:45:00.000Z")
                },
                {
                    id: '1.4',
                    name: 'Chấm bài sinh viên',
                    date: new Date("2024-05-15"),
                    start: "17:30",
                    end: "19:00",
                    status: 2,
                    repeat: 0,
                    noti: 2,
                    priority: 2,
                    quality: 5
                },
                {
                    id: '1.5',
                    name: 'Soạn đề thi cuối kỳ',
                    date: new Date("2024-05-20"),
                    start: "12:30",
                    end: "14:00",
                    status: 1,
                    repeat: 0,
                    noti: 1,
                    priority: 2,
                    quality: 5,
                    completed: new Date("2024-05-20T13:59:00.000Z")
                },
                {
                    id: '1.6',
                    name: 'Dạy IT4321',
                    date: new Date("2024-05-25"),
                    start: "8:25",
                    end: "11:45",
                    status: 0,
                    repeat: 0,
                    noti: 0,
                    priority: 2,
                    quality: 5
                },
                {
                    id: '1.7',
                    name: 'Dạy IT1234',
                    date: new Date("2024-05-22"),
                    start: "14:10",
                    end: "15:50",
                    status: 0,
                    repeat: 0,
                    noti: 0,
                    priority: 2,
                    quality: 5
                },
                {
                    id: '1.8',
                    name: 'Chấm bài',
                    date: new Date("2024-05-29"),
                    start: "11:45",
                    end: "15:00",
                    status: 1,
                    repeat: 0,
                    noti: 0,
                    priority: 2,
                    quality: 5,
                    completed: new Date("2024-05-24T15:59:00.000Z")
                },
                {
                    id: '1.9',
                    name: 'Soạn giáo án',
                    date: new Date("2024-06-02"),
                    start: "8:25",
                    end: "12:30",
                    status: 0,
                    repeat: 0,
                    noti: 0,
                    priority: 2,
                    quality: 5
                },
                {
                    id: '1.10',
                    name: 'Lên kế hoạch giảng dạy',
                    date: new Date("2024-06-05"),
                    start: "14:30",
                    end: "16:30",
                    status: 0,
                    repeat: 0,
                    noti: 0,
                    priority: 2,
                    quality: 5
                },
                {
                    id: '1.11',
                    name: 'Họp bộ môn',
                    date: new Date("2024-06-06"),
                    start: "9:30",
                    end: "11:30",
                    status: 0,
                    repeat: 0,
                    noti: 0,
                    priority: 2,
                    quality: 5
                }
            ]   
        },
        {
            id: '2',
            name: 'Nghiên cứu',
            description: '',
            due: new Date("2024-06-18"),
            repeat: 0,
            weights: {
                quantity: 50,
                quality: 25,
                time: 25
            },
            tasks: [
                {
                    id: '2.1',
                    name: 'Báo cáo đề tài ABC',
                    date: new Date("2024-05-16"),
                    start: "9:20",
                    end: "11:45",
                    status: 1,
                    repeat: 0,
                    noti: 0,
                    priority: 2,
                    quality: 5,
                    completed: new Date("2024-05-16T11:40:00.000Z")
                },
                {
                    id: '2.2',
                    name: 'Nghiên cứu đề tài XYZ',
                    date: new Date("2024-05-18"),
                    start: "12:30",
                    end: "15:50",
                    status: 2,
                    repeat: 0,
                    noti: 0,
                    priority: 2,
                    quality: 5
                },
                {
                    id: '2.3',
                    name: 'Họp lab',
                    date: new Date("2024-05-22"),
                    start: "6:45",
                    end: "10:05",
                    status: 1,
                    repeat: 0,
                    noti: 0,
                    priority: 2,
                    quality: 5,
                    completed: new Date("2024-05-22T10:20:00.000Z")
                },
                {
                    id: '2.4',
                    name: 'Trình bày đề tài trước Bộ',
                    date: new Date("2024-05-14"),
                    start: "15:00",
                    end: "17:30",
                    status: 1,
                    repeat: 0,
                    noti: 0,
                    priority: 2,
                    quality: 5,
                    completed: new Date("2024-05-14T17:30:00.000Z")
                },
                {
                    id: '2.5',
                    name: 'Lên lab',
                    date: new Date("2024-05-25"),
                    start: "14:00",
                    end: "17:30",
                    status: 0,
                    repeat: 0,
                    noti: 0,
                    priority: 2,
                    quality: 5
                },
                {
                    id: '2.6',
                    name: 'Tổng kết đề tài DEF',
                    date: new Date("2024-05-30"),
                    start: "8:00",
                    end: "9:30",
                    status: 0,
                    repeat: 0,
                    noti: 0,
                    priority: 2,
                    quality: 5
                },
                {
                    id: '2.7',
                    name: 'Lên phòng thí nghiệm',
                    date: new Date("2024-06-03"),
                    start: "6:45",
                    end: "9:15",
                    status: 1,
                    repeat: 0,
                    noti: 0,
                    priority: 2,
                    quality: 5,
                    completed: new Date("2024-06-03T09:00:00.000Z")
                },
                {
                    id: '2.8',
                    name: 'Khảo sát đề tài nghiên cứu',
                    date: new Date("2024-06-07"),
                    start: "14:30",
                    end: "16:30",
                    status: 1,
                    repeat: 0,
                    noti: 0,
                    priority: 2,
                    quality: 5,
                    completed: new Date("2024-06-07T16:00:00.000Z")
                }
            ]   
        },
        {
            id: '3',
            name: 'Phục vụ',
            description: '',
            due: new Date("2024-06-18"),
            repeat: 0,
            weights: {
                quantity: 50,
                quality: 25,
                time: 25
            },
            tasks: [
                {
                    id: '3.1',
                    name: 'Họp hội đồng cán bộ',
                    date: new Date("2024-05-14"),
                    start: "14:30",
                    end: "16:30",
                    status: 1,
                    repeat: 0,
                    noti: 0,
                    priority: 2,
                    quality: 5,
                    completed: new Date("2024-05-14T16:15:00.000Z")
                },
                {
                    id: '3.2',
                    name: 'Họp thường kỳ liên chi đoàn',
                    date: new Date("2024-05-17"),
                    start: "8:00",
                    end: "10:00",
                    status: 2,
                    repeat: 0,
                    noti: 0,
                    priority: 2,
                    quality: 5
                },
                {
                    id: '3.3',
                    name: 'Họp đại hội chi bộ Đảng',
                    date: new Date("2024-05-25"),
                    start: "14:00",
                    end: "16:00",
                    status: 1,
                    repeat: 0,
                    noti: 0,
                    priority: 2,
                    quality: 5,
                    completed: new Date("2024-05-25T15:59:00.000Z")
                },
                {
                    id: '3.4',
                    name: 'Họp bộ môn',
                    date: new Date("2024-06-01"),
                    start: "16:00",
                    end: "17:30",
                    status: 1,
                    repeat: 0,
                    noti: 0,
                    priority: 2,
                    quality: 5,
                    completed: new Date("2024-06-01T17:35:00.000Z")
                },
                {
                    id: '3.5',
                    name: 'Họp khoa',
                    date: new Date("2024-06-02"),
                    start: "14:00",
                    end: "15:30",
                    status: 0,
                    repeat: 0,
                    noti: 0,
                    priority: 2,
                    quality: 5
                },
                {
                    id: '3.6',
                    name: 'Hướng dẫn đồ án',
                    date: new Date("2024-06-05"),
                    start: "12:30",
                    end: "14:30",
                    status: 0,
                    repeat: 0,
                    noti: 0,
                    priority: 2,
                    quality: 5
                }
            ]
        },
    ]];

    const [index, setIndex] = useState([0, 0]);
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const kpi = templates[index[0]][index[1]];
        kpi.id = undefined;
        saveKpi(kpi);
        setOpen(false);
        setCurrentKpis(getCurrentKpis());
    }


    return (
        <Dialog open={open} handler={() => setOpen(!open)}>
            <DialogHeader className='justify-between'>
                <Typography variant='h5'>Mẫu KPI</Typography>
                <XMarkIcon className='w-5 cursor-pointer' onClick={() => { setOpen(false); } } />
            </DialogHeader>
            <DialogBody className='text-black px-16 py-10 pt-0 h-[40rem] overflow-y-scroll'>
                <div className="flex flex-col items-start gap-6">
                    <Carousel>
                        { templates.map((t, i) => (
                            <div className="flex items-center justify-center gap-4 bg-[#d6d0f7] py-10">
                                { t.map((k, j) => (<Button className="bg-white w-32 py-7 text-black" onClick={() => setIndex([i,j])}>{k.name}</Button>)) }
                            </div>
                        ))}
                    </Carousel>
                    <Typography variant="h5" className="text-lg font-medium">Mẫu: {templates[index[0]][index[1]].name}</Typography>
                    <div className="flex flex-col gap-4 items-start w-full">
                    { templates[index[0]][index[1]].tasks.map(t => 
                        <AddKPITask
                            name={t.name}
                            date={t.date}
                            start={t.start}
                            end={t.end}
                        />) }
                    </div>
                </div>
            </DialogBody>
            <DialogFooter>
                <Button className="w-full bg-purple" onClick={handleSubmit}>Thêm</Button>
            </DialogFooter>
        </Dialog>
    );
} 

export default TemplateDialog;