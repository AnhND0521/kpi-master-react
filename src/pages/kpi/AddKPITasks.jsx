import React, { useState } from 'react'
import Header from '../../components/Header'
import Navbar from '../../components/Navbar'
import { Link, useParams } from 'react-router-dom'
import CornerButton from '../../components/CornerButton'
import { Button, Checkbox, Input, Option, Select, Typography } from '@material-tailwind/react'
import DateInput from '../../components/DateInput'
import { findKpiById, getNextTaskId, saveKpi } from '../../utils/dataUtils.js'

const AddKPITasks = () => {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [start, setStart] = useState('');
  const [end, setEnd] = useState('');
  const [priority, setPriority] = useState(2);
  const [repeat, setRepeat] = useState(0);
  const [reminder, setReminder] = useState(0);

  const handleSubmit = (event) => {
    event.preventDefault();
    // const newTask = {
    //   id: getNextTaskId(findKpiById(id)),
    //   name: name,
    //   date: date,
    //   start: start,
    //   end: end,
    //   status: 0,
    //   repeat: repeat,
    //   noti: 0
    // }
    // kpi.tasks.push(newTask);
    // saveKpi(kpi);
  }

  return (
    <>
      <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
        <Typography className='font-inter font-semibold text-lg self-start'>
          Thêm công việc
        </Typography>
        <div className='flex flex-col gap-4 items-center'>
          <Input label='Tên công việc' value={name} required onChange={(event) => setName(event.target.value)}/>
          <DateInput value={date} handleChange={setDate}/>
          <div className="grid grid-cols-2 w-full gap-2">
            <Input 
              label='Bắt đầu' 
              value={start} 
              onChange={(event) => setStart(event.target.value)}
              required
            />
            <Input 
              label='Kết thúc'
              value={end} 
              onChange={(event) => setEnd(event.target.value)}
              required
            />
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
          <Button variant='filled' className='w-full bg-purple'>
            Thêm
          </Button>
        </div>
        {/* <Link to={`/kpi/${id}`}> */}
          <CornerButton icon='finish' type='submit' />
        {/* </Link> */}
      </form>
    </>
  )
}

export default AddKPITasks