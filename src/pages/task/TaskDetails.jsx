import { Button, Breadcrumbs, Dialog, DialogBody, DialogHeader, IconButton, Input, Option, Rating, Select, Typography } from '@material-tailwind/react'
import React, { useState } from 'react'
import { ArrowRightIcon, ArrowUturnLeftIcon, BellIcon, CalendarIcon, ClockIcon, FlagIcon, XMarkIcon} from '@heroicons/react/24/outline';
import { PencilIcon, TrashIcon } from '@heroicons/react/24/solid';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Header from '../../components/Header';
import Navbar from '../../components/Navbar';
import CornerButton from '../../components/CornerButton';
import { CheckBadgeIcon } from '@heroicons/react/24/solid';
import { deleteTask, findKpiById, findTaskById, saveTask } from '../../utils/dataUtils';
import moment from 'moment/moment';
import ConfirmDialog from '../../components/ConfirmDialog';
import Wrapper from '../../components/Wrapper';
import PageHeader from '../../components/PageHeader';
import BackButton from '../../components/BackButton';
import DateInput from '../../components/DateInput';

const TaskDetails = ({kpi, task, setTask, open, setOpen}) => {
  const id = kpi.id;
  // const kpi = findKpiById(id);
  // const task = findTaskById(id, taskId);
  const [rated, setRated] = useState(5);
  if (task && task.start.length < 5) {
    task.start = '0' + task.start;
  }

  const [ openDialog, setOpenDialog ] = useState(false);

  const navigate = useNavigate();
  
  const handleDelete = () => {
    deleteTask(id, task?.id);
    setOpenDialog(false);
    setOpen(false);
    navigate(`/kpi/${id}`);
  }

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   task.rated = rated;
  //   saveTask(kpi.id, task);
  //   setOpenDialog(false);
  //   setOpen(false);
  //   navigate(`/kpi/${id}`);
  // }

  // const [name, setName] = useState(task?.name);
  // const [date, setDate] = useState(task?.date);
  // const [start, setStart] = useState(task?.start);
  // const [end, setEnd] = useState(task?.end);
  // const [priority, setPriority] = useState(task?.priority);
  // const [repeat, setRepeat] = useState(task?.repeat);
  // const [reminder, setReminder] = useState(task?.noti);
  // console.log(name);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (task) {
    // task.name = name;
    // task.date = date;
    // task.start = start;
    // task.end = end;
    // task.priority = priority;
    // task.repeat = repeat;  
    // task.noti = reminder;
    // task.rated = rated;

    console.log(task);
    saveTask(kpi.id, task);

    setOpenDialog(false);
    setOpen(false);
    navigate(`/kpi/${id}`);
    }
  }

  return (
    <Dialog open={open} handler={() => setOpen(!open)}>
    <DialogHeader className='justify-between'>
      <Typography variant='h5'>Chi tiết</Typography>
      <XMarkIcon className='w-5 cursor-pointer' onClick={() => setOpen(false)} />
    </DialogHeader>
    <DialogBody className='text-black px-24 py-6 h-[36rem] overflow-y-scroll'>
      <form className='flex flex-col items-start gap-4' onSubmit={handleSubmit}>
        <div className='w-full flex justify-between items-center'>
          <div className='flex items-center justify-start gap-10'>
            <PageHeader label={'Nhiệm vụ: ' + task?.name} />
            <div className='flex gap-2'>
              {/* <Link to={`/kpi/${id}/task/${task?.id}/edit`}>
                  <PencilIcon className='w-6'/>
              </Link> */}
              <TrashIcon className='w-6 cursor-pointer' onClick={() => setOpenDialog(true)}/>
            </div>
          </div>
        </div>
        <Link to={`/kpi/${id}`} className='flex items-center gap-1'>
          <Typography className='font-inter font-regular text-purple'>
            Trong
          </Typography>
          <Typography className='font-inter font-semibold text-purple'>
            {kpi.name}
          </Typography>
          <ArrowRightIcon className='w-4 text-purple' />
        </Link>
        {/* <div className='flex items-start gap-20'>
          <div className='flex flex-col gap-2'>
            <div className='flex items-center gap-2'>
              <CalendarIcon className='w-6' />
              <Typography className='font-inter font-regular'>
                {moment(task?.date).format('DD/MM/YYYY')}
              </Typography>
            </div>
            <div className='flex items-center gap-2'>
              <ClockIcon className='w-6' />
              <Typography className='font-inter font-regular'>
                {task?.start} - {task?.end}
              </Typography>
            </div>
            <div className='flex items-center gap-2'>
              <FlagIcon className='w-6' />
              <Typography className='font-inter font-regular'>
                Ưu tiên {['', 'Thấp', 'Trung bình', 'Cao'][task?.priority]}
              </Typography>
            </div>
          </div>
          <div className='flex flex-col gap-2'>
            <div className='flex items-center gap-2'>
              <ArrowUturnLeftIcon className='w-6' />
              <Typography className='font-inter font-regular'>
                {['Không lặp lại', 'Hàng ngày', 'Hàng tuần', 'Hàng tháng', 'Hàng năm'][task?.repeat]}
              </Typography>
            </div>
            <div className='flex items-center gap-2'>
              <BellIcon className='w-6' />
              <Typography className='font-inter font-regular'>
                {task?.noti == 0 ? 'Không nhắc nhở' : 'Nhắc nhở trước ' + ['5 phút', '30 phút', '1 ngày', '3 ngày'][task?.noti]}
              </Typography>
            </div>
          </div>
        </div> */}
        <div className='flex flex-col gap-4 items-center w-full mt-5'>
          <Input label='Tên nhiệm vụ' value={task?.name} onChange={(event) => setTask({...task, name: event.target.value})} required />
          <DateInput value={task?.date} handleChange={(date) => setTask({...task, date: date})}/>
          <div className=" flex gap-2 w-full">
            <Input label='Bắt đầu' type='time' value={task?.start} onChange={(event) => setTask({...task, start: event.target.value})} required />
            <Input label='Kết thúc' type='time' value={task?.end} onChange={(event) => setTask({...task, end: event.target.value})}  required />
          </div>
          <Select value={task?.priority} label='Ưu tiên' onChange={(val) => setTask({...task, priority: val})} >
            <Option value={1}>Thấp</Option>
            <Option value={2}>Trung bình</Option>
            <Option value={3}>Cao</Option>
          </Select>
          <Select value={task?.repeat} label='Lặp lại' onChange={(val) => setTask({...task, repeat: val})}>
            <Option value={0}>Không lặp lại</Option>
            <Option value={1}>Hàng ngày</Option>
            <Option value={2}>Hàng tuần</Option>
            <Option value={3}>Hàng tháng</Option>
            <Option value={4}>Hàng năm</Option>
          </Select>
          <Select value={task?.noti} label='Nhắc nhở' onChange={(val) => setTask({...task, noti: val})}>
            <Option value={0}>Không nhắc nhở</Option>
            <Option value={1}>Trước 5 phút</Option>
            <Option value={2}>Trước 30 phút</Option>
            <Option value={3}>Trước 1 ngày</Option>
            <Option value={4}>Trước 3 ngày</Option>
          </Select>
        </div>
        
        {task?.status === 1 && 
        <>
          <Typography variant='h5' className='font-inter'>
            Đánh giá
          </Typography>
          <Typography variant='h6' className='font-inter'>
            Thời gian
          </Typography>
          <div className='grid grid-cols-2 grid-rows-2 gap-y-2 justify-items-start'>
            <Typography className='font-inter text-sm'>
              Thời hạn:
            </Typography>
            <Typography className='font-inter text-sm'>
              {moment(task?.date).format('DD/MM/YYYY')} {task?.end}
            </Typography>
            <Typography className='font-inter text-sm'>
              Hoàn thành:
            </Typography>
            <Typography className='font-inter text-sm'>
              {moment(task?.completed).subtract(7, 'h').format('DD/MM/YYYY')} {moment(task?.completed).subtract(7, 'h').format('HH:mm')}
            </Typography>
          </div>
          <div className='flex items-center gap-2'>
            <CheckBadgeIcon className='w-4 text-green' />
            <Typography className='font-inter text-sm'>
              Bạn hoàn thành sớm trước hạn 25 phút
            </Typography>
          </div>
          <Typography variant='h6' className='font-inter'>
            Chất lượng
          </Typography>
          <div className="flex items-center gap-2 font-bold">
            <Rating unratedColor="amber" ratedColor="amber" value={rated} onChange={(value) => setRated(value)} />
            {rated}/5
          </div>
        </>}
        { setTask && <Button className='bg-purple w-full' type='submit'>Lưu</Button> }
      </form>

      <ConfirmDialog 
        message='Bạn có chắc muốn xóa nhiệm vụ này?' 
        open={openDialog} 
        handleOpen={() => setOpenDialog(true)} 
        handleCancel={() => setOpenDialog(false)}
        handleConfirm={handleDelete}
      />
    </DialogBody>
    </Dialog>
  )
}

export default TaskDetails