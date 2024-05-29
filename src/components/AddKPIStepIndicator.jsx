import { Typography } from '@material-tailwind/react';
import React from 'react'
import step1 from '../assets/add-kpi-step-1.png'

const AddKPIStepIndicator = (props) => {
  const { step } = props;
  return (
    <>
    <div className='relative w-3/5 h-20 flex-col items-center gap-4 self-center'>
      <div className='flex items-center justify-center'>
        {/* <div className={`absolute left-[32px] w-[calc(90%-20px)] h-2 ${step == 2 ? 'bg-purple' : 'bg-darkGray'}`}></div>
        <div className={step == 1 ? 'flex justify-center w-8 h-8 bg-purple rounded-full' : 'flex justify-center w-6 h-6 bg-purple rounded-full'}>
          <Typography className={step == 1 ? 'absolute top-10 left-[-60px] w-48 font-inter font-semibold text-md' : 'absolute top-10 left-[60px] w-32 font-inter font-regular text-sm'}>
            Nhập thông tin KPI
          </Typography>
        </div>
        <div className={step == 2 ? 'flex justify-center w-8 h-8 bg-purple rounded-full' : 'flex justify-center w-6 h-6 bg-darkGray rounded-full'}>
          <Typography className={step == 2 ? 'absolute top-10 left-[-280px] w-48 font-inter font-semibold text-md' : 'absolute top-10 left-[280px] w-32 font-inter font-regular text-sm'}>
            Thêm nhiệm vụ
          </Typography>
        </div> */}
        <img src={step1} width='10px' />
      </div>
    </div>
    </>
  )
}

export default AddKPIStepIndicator