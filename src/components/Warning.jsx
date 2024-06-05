import { Card, Typography } from '@material-tailwind/react'
import React from 'react'
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'

const Warning = () => {
  return (
    <Card className='flex items-center justify-center px-3 py-3 mb-2 bg-[#FFECEE] w-full self-stretch'>
      <div className='flex gap-2 items-center justify-start text-[#FF4545]'>
      <ExclamationTriangleIcon className='w-6' />
      <Typography variant='h6' className='w-full text-left font-inter'>
        <span className='font-bold'>Nhắc nhở: </span><span className='font-medium'>Bạn có 1 công việc quá hạn và 5 công việc đến hạn tuần này</span>
      </Typography></div>
    </Card>
  )
}

export default Warning