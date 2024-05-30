import React, { useState } from 'react'
import Header from '../../components/Header'
import Navbar from '../../components/Navbar'
import { Link, useNavigate, useParams } from 'react-router-dom'
import CornerButton from '../../components/CornerButton'
import { Checkbox, Input, Option, Select, Typography } from '@material-tailwind/react'
import DateInput from '../../components/DateInput'
import { findKpiById, findTaskById, saveTask } from '../../utils/dataUtils.js'

const EditTask = () => {
  const { id, taskId } = useParams();
  console.log(id, taskId);
  const kpi = findKpiById(id);
  const task = findTaskById(id, taskId);
  console.log(kpi, task);
  const [name, setName] = useState(task.name);
  const [date, setDate] = useState(task.date);
  const [start, setStart] = useState(task.start);
  const [end, setEnd] = useState(task.end);
  const [priority, setPriority] = useState(task.priority);
  const [repeat, setRepeat] = useState(task.repeat);
  const [reminder, setReminder] = useState(task.noti);

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    task.name = name;
    task.date = date;
    task.start = start;
    task.end = end;
    task.priority = priority;
    task.repeat = repeat;
    task.noti = reminder;

    console.log(task);
    saveTask(kpi.id, task);

    navigate(`/kpi/${id}/task/${taskId}`);
  }


  return (
    <div className='w-full'>
      <Header currentPage='Chỉnh sửa nhiệm vụ' backDestination={`/kpi/${id}/task/${taskId}`} />
      <main>
        <form className='flex flex-col gap-4 my-16 p-4 overflow-y-scroll' onSubmit={handleSubmit}>
        <Typography className='font-inter font-semibold text-lg self-start mb-2'>
          Chỉnh sửa nhiệm vụ
        </Typography>
        <div className='flex flex-col gap-4 items-center'>
          <Input label='Tên nhiệm vụ' value={name} onChange={(event) => setName(event.target.value)} required />
          <DateInput value={date} handleChange={setDate} required/>
          <div className=" flex gap-2 w-full">
            <Input label='Bắt đầu' type='time' value={start} onChange={(event) => setStart(event.target.value)} required />
            <Input label='Kết thúc' type='time' value={end} onChange={(event) => setEnd(event.target.value)} required />
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
        <CornerButton icon='finish' type='submit' />
        </form>
      </main>
      <Navbar />
    </div>
  )
}

export default EditTask