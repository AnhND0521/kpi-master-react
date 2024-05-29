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

const AddTask = ({kpi, open, setOpen}) => {
  const id = kpi.id;

  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [start, setStart] = useState('');
  const [end, setEnd] = useState('');
  const [priority, setPriority] = useState(2);
  const [repeat, setRepeat] = useState(0);
  const [reminder, setReminder] = useState(0);

  const resetFields = () => {
    setName('');
    setDate('');
    setStart('');
    setEnd('');
    setPriority(2);
    setRepeat(0);
    setReminder(0);
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    const taskDate = moment(date).toDate();
    const task = {
      name: name,
      date: taskDate.toISOString(),
      start: start,
      end: end,
      status: taskDate < new Date() ? 2 : 0,
      priority: priority,
      repeat: repeat,
      noti: reminder,
      rated: 5
    }

    console.log(task);
    saveTask(kpi.id, task);

    resetFields();

    setOpen(false);
    navigate(`/kpi/${id}`);
  }

  return (
    <Dialog open={open} handler={() => setOpen(!open)}>
    <DialogHeader className='justify-between'>
      <Typography variant='h5'>Thêm nhiệm vụ</Typography>
      <XMarkIcon className='w-5 cursor-pointer' onClick={() => { resetFields(); setOpen(false); } } />
    </DialogHeader>
    <DialogBody className='text-black px-24 py-6 h-[34rem] overflow-y-scroll'>
      <form className='flex flex-col items-start gap-4' onSubmit={handleSubmit}>
        <div className='w-full flex justify-between items-center'>
          <div className='flex items-center justify-start gap-10'>
            <PageHeader label={'Thêm nhiệm vụ'} />
          </div>
        </div>
        
        <div className='flex flex-col gap-4 items-center w-full mt-5'>
        <Input label='Tên nhiệm vụ' value={name} onChange={(event) => setName(event.target.value)} required />
          <DateInput value={date} handleChange={setDate} required/>
          <div className=" flex gap-2 w-full">
            <Input label='Bắt đầu' value={start} onChange={(event) => setStart(event.target.value)} required />
            <Input label='Kết thúc' value={end} onChange={(event) => setEnd(event.target.value)} required />
          </div>
          <Select value={priority} label='Ưu tiên' onChange={(val) => setPriority(val)}>
            <Option value={1}>Thấp</Option>
            <Option value={2}>Trung bình</Option>
            <Option value={3}>Cao</Option>
          </Select>
          <Select value={repeat} label='Lặp lại' onChange={(val) => setRepeat(val)}>
            <Option value={0}>Không lặp lại</Option>
            <Option value={1}>Hàng ngày</Option>
            <Option value={2}>Hàng tuần</Option>
            <Option value={3}>Hàng tháng</Option>
            <Option value={4}>Hàng năm</Option>
          </Select>
          <Select value={reminder} label='Nhắc nhở' onChange={(val) => setReminder(val)}>
            <Option value={0}>Không nhắc nhở</Option>
            <Option value={1}>Trước 5 phút</Option>
            <Option value={2}>Trước 30 phút</Option>
            <Option value={3}>Trước 1 ngày</Option>
            <Option value={4}>Trước 3 ngày</Option>
          </Select>
        </div>
        <Button className='bg-purple w-full' type='submit'>Thêm</Button>
      </form>
    </DialogBody>
    </Dialog>
  )
}

export default AddTask;