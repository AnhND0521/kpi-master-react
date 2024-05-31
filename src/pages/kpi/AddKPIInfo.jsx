import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import CornerButton from '../../components/CornerButton'
import { Button, Input, Option, Select, Typography } from '@material-tailwind/react'
import DateInput from '../../components/DateInput'
import { parseDate } from '../../utils/dateShit'

const AddKPIInfo = ({setKpi, setStep}) => {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [repeat, setRepeat] = useState(0);

  const [ quantity, setQuantity ] = useState(50);
  const [ quality, setQuality ] = useState(25);
  const [ time, setTime ] = useState(25);
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

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const kpi = {
      name: name,
      description: description,
      due: date,
      repeat: repeat,
      tasks: [],
      weights: {
        quantity: quantity,
        quality: quality,
        time: time
      }
    }
    console.log(kpi);
    setKpi(kpi);
    setStep(2);
  }

  return (
    <form onSubmit={handleSubmit}>
      <Typography className='font-inter font-semibold text-lg self-start'>
        Thông tin KPI
      </Typography>
      <div className='flex flex-col gap-4 items-center mt-4'>
        <Input value={name} label='Tên KPI' onChange={event => setName(event.target.value)} required />
        <Input value={description} label='Mô tả' onChange={event => setDescription(event.target.value)}/>
        <DateInput value={date} handleChange={setDate} required />
        <Select value={repeat} label='Lặp lại' onChange={val => setRepeat(val)}>
          <Option value={0}>Không lặp lại</Option>
          <Option value={1}>Hàng ngày</Option>
          <Option value={2}>Hàng tuần</Option>
          <Option value={3}>Hàng tháng</Option>
          <Option value={4}>Hàng năm</Option>
        </Select>
      </div>
      <Typography className='text-sm text-normal text-black mt-8 w-full text-left opacity-80'>
            Hãy chọn trọng số cho từng khía cạnh mà bạn muốn đưa vào công thức tính KPI
      </Typography>
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
              <input type="number" value={quantity} className='w-14 h-8 px-2 border border-darkGray rounded-md' onChange={({target}) => setQuantity(target.value)} />
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
              <input type="number" value={quality} className='w-14 h-8 px-2 border border-darkGray rounded-md' onChange={({target}) => setQuality(target.value)} />
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
              <input type="number" value={time} onChange={({target}) => setTime(target.value)} className='w-14 h-8 px-2 border border-darkGray rounded-md' />
              <Typography className='font-inter font-regular text-lg'>
                / {totalWeight}
              </Typography>
            </div>
          </div>
        </div>
        <Button className='bg-purple w-full mt-10' type='submit'>Tiếp</Button>
    </form>
  )
}

export default AddKPIInfo