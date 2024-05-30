import { ChevronRightIcon } from '@heroicons/react/24/solid';
import { Card, CardBody, Typography } from '@material-tailwind/react';
import React from 'react'
import { findKpiById } from '../../utils/dataUtils';
import { Link } from 'react-router-dom';

const Task = (props) => {
  const { name, kpi, startTime, endTime } = props;
  return (
    <Link to={`/kpi/${kpi}`} className='w-full'>
    <Card className='h-20'>
      <CardBody className='h-full flex items-center justify-between p-3'>
        <div className='w-12 flex flex-col items-center mr-4'>
          <Typography className='w-full text-sm'>
            {startTime}
          </Typography>
          <div className='text-sm'>|</div>
          <Typography className='w-full text-sm'>
            {endTime}
          </Typography>
        </div>
        <div className='w-full flex flex-col items-start gap-1'>
          <Typography variant='h6'>
            {name}
          </Typography>
          <div className='flex items-center'>
            <div className='w-1.5 h-1.5 mr-2 rounded-full bg-purple'></div>
            <Typography className='text-sm text-textGray'>
              {findKpiById(kpi).name}
            </Typography>
          </div>
        </div>
        <ChevronRightIcon className='w-8'/>
      </CardBody>
    </Card>
    </Link>
  )
}

export default Task