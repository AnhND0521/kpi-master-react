import React, { useState } from 'react'
import Header from '../../components/Header'
import Navbar from '../../components/Navbar'
import { Link, useNavigate, useParams } from 'react-router-dom'
import CornerButton from '../../components/CornerButton'
import { Button, Dialog, DialogBody, DialogHeader, Input, Option, Select, Typography } from '@material-tailwind/react'
import DateInput from '../../components/DateInput'
import moment from 'moment/moment'
import { findKpiById, saveKpi } from '../../utils/dataUtils'
import { XMarkIcon } from '@heroicons/react/24/outline'

const EditKPI = ({open, setOpen, kpi, setKPI}) => {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    kpi.name = name;
    kpi.description = description;
    kpi.due = due;
    kpi.repeat = repeat;
    kpi.weights.quantity = quantity;
    kpi.weights.quality = quality;
    kpi.weights.time = time;
    console.log(kpi);
    saveKpi(kpi);
    setKPI(kpi);
    setOpen(false);
  }

  const [ name, setName ] = useState(kpi.name);
  const [ description, setDescription ] = useState(kpi.description);
  const [ due, setDue ] = useState(kpi.due);
  const [ repeat, setRepeat ] = useState(kpi.repeat);
  const [ quantity, setQuantity ] = useState(kpi.weights.quantity);
  const [ quality, setQuality ] = useState(kpi.weights.quality);
  const [ time, setTime ] = useState(kpi.weights.time);
  const totalWeight = (+quantity) + (+quality) + (+time);

  const handleQuantityChecked = (event) => {
    if (event.target.checked) setQuantity(50);
    else if (quality === 0 && time === 0) return;
    else setQuantity(0);
  }
  const handleQualityChecked = (event) => {
    if (event.target.checked) setQuality(25);
    else if (quantity === 0 && time === 0) return;
    else setQuality(0);
  }
  const handleTimeChecked = (event) => {
    if (event.target.checked) setTime(25);
    else if (quality === 0 && quantity === 0) return;
    else setTime(0);
  }

  return (
    <Dialog open={open} handler={() => setOpen(!open)}>
      <DialogHeader className='justify-between'>
        <Typography variant='h5'>Chỉnh sửa KPI</Typography>
        <XMarkIcon className='w-5 cursor-pointer' onClick={() => { setOpen(false); } } />
      </DialogHeader>
      <DialogBody className='text-black px-6 py-6 pt-0 h-[40rem] overflow-y-scroll'>
      <form onSubmit={handleSubmit}>
      <main className='flex flex-col gap-4 p-4'>
        <Typography className='font-inter font-semibold text-lg self-start'>
          Chỉnh sửa KPI
        </Typography>
        <div className='flex flex-col gap-4 items-center mt-4'>
          <Input label='Tên KPI' value={name} required onChange={({target}) => setName(target.value)} />
          <Input label='Mô tả' value={description || ''} onChange={({target}) => setDescription(target.value)} />
          <DateInput value={due} handleChange={setDue}/>
          <Select value={repeat} label='Lặp lại' onChange={(val) => setRepeat(val)}>
            <Option value={0}>Không lặp lại</Option>
            <Option value={1}>Hàng ngày</Option>
            <Option value={2}>Hàng tuần</Option>
            <Option value={3}>Hàng tháng</Option>
            <Option value={4}>Hàng năm</Option>
          </Select>
          {/* <Select value={kpi.noti || 0} label='Nhắc nhở'>
            <Option value={0}>Không nhắc nhở</Option>
            <Option value={1}>Trước 5 phút</Option>
            <Option value={2}>Trước 30 phút</Option>
            <Option value={3}>Trước 1 ngày</Option>
            <Option value={4}>Trước 3 ngày</Option>
          </Select> */}
        </div>
        <div className='grid grid-cols-3 grid-rows-4 gap-y-1.5'>
          <div className='col-span-3 flex items-center'>
            <div className='flex justify-start w-2/3'>
              <Typography className='font-inter font-semibold text-md'>
                Chỉ tiêu đánh giá
              </Typography>
            </div>
            <div className='flex justify-start w-1/3'>
              <Typography className='font-inter font-semibold text-md'>
                Trọng số
              </Typography>
            </div>
          </div>
          <div className='col-span-3 flex items-center'>
            <div className='flex items-center gap-2 w-2/3'>
              <input type='checkbox' className='w-6 h-6 accent-purple rounded-md' checked={quantity > 0} onChange={handleQuantityChecked}/>
              <div className='flex flex-col items-start'>
                <Typography className='font-inter'>
                  Số lượng
                </Typography>
                <Typography className='font-inter text-textGray text-xs'>
                  Tỷ lệ nhiệm vụ hoàn thành
                </Typography>
              </div>
            </div>
            <div className='flex justify-start gap-1 items-center w-1/3'>
              <input type="number" value={quantity} className='w-16 h-8 px-2 border border-darkGray rounded-md' onChange={({target}) => setQuantity(target.value)} />
              <Typography className='font-inter font-regular text-lg'>
                / {totalWeight}
              </Typography>
            </div>
          </div>
          <div className='col-span-3 flex items-center'>
            <div className='flex items-center gap-2 w-2/3'>
              <input type='checkbox' className='w-6 h-6 accent-purple rounded-md' checked={quality > 0} onChange={handleQualityChecked}/>
              <div className='flex flex-col items-start'>
                <Typography className='font-inter'>
                  Chất lượng
                </Typography>
                <Typography className='font-inter text-textGray text-xs'>
                  Chất lượng thực hiện nhiệm vụ
                </Typography>
              </div>
            </div>
            <div className='flex justify-start gap-1 items-center w-1/3'>
              <input type="number" value={quality} className='w-16 h-8 px-2 border border-darkGray rounded-md' onChange={({target}) => setQuality(target.value)} />
              <Typography className='font-inter font-regular text-lg' >
                / {totalWeight}
              </Typography>
            </div>
          </div>
          <div className='col-span-3 flex items-center'>
            <div className='flex items-center gap-2 w-2/3'>
              <input type='checkbox' className='w-6 h-6 accent-purple rounded-md' checked={time > 0} onChange={handleTimeChecked}/>
              <div className='flex flex-col items-start'>
                <Typography className='font-inter'>
                  Thời gian
                </Typography>
                <Typography className='font-inter text-textGray text-xs'>
                  Số thời gian hoàn thành trước hạn
                </Typography>
              </div>
            </div>
            <div className='flex justify-start gap-1 items-center w-1/3'>
              <input type="number" value={time} onChange={({target}) => setTime(target.value)} className='w-16 h-8 px-2 border border-darkGray rounded-md' />
              <Typography className='font-inter font-regular text-lg'>
                / {totalWeight}
              </Typography>
            </div>
          </div>
        </div>
        <Button className='bg-purple w-full mt-10' type='submit'>Lưu</Button> 
      </main>
      </form>
    </DialogBody>
    </Dialog>
  )
}

export default EditKPI