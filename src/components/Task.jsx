import { CalendarIcon } from '@heroicons/react/24/outline';
import { ChevronRightIcon } from '@heroicons/react/24/solid';
import { Card, CardBody, Typography } from '@material-tailwind/react'
import moment from 'moment/moment';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { saveTask } from '../utils/dataUtils';

const Task = (props) => {
  const { kpi, task, handleOpen } = props;

  const navigate = useNavigate();
  const handleChange = () => {
    if (task.status !== 1) {
      task.status = 1;
      task.completed = new Date();
    } else {
      if (new Date(task.date) < new Date()) task.status = 2;
      else task.status = 0;
    }
    saveTask(kpi.id, task);
    navigate(`/kpi/${kpi.id}`);
  }

  return (
    <Card className='w-full rounded-md overflow-hidden cursor-pointer' onClick={e => { if (!e.target.id) handleOpen() }}>
      <CardBody className='flex justify-between bg-gray p-3'>
        <div className='flex items-center gap-3'>
          <input id='check' type='checkbox' className='w-6 h-6 accent-purple rounded-md cursor-pointer' checked={task.status === 1} onChange={handleChange}/>
          <div className='flex flex-col items-start gap-2'>
            <Typography variant='h4' className='font-inter font-medium text-base'>
              {task.name}
            </Typography>
            <div className='flex items-center gap-2'>
              <CalendarIcon className='w-4'/>
              <Typography className='font-inter font-medium text-sm'>
                {moment(task.date).format('DD/MM/YYYY')}
              </Typography>
              <Typography className='font-inter font-medium text-sm ml-2'>
                {task.start} - {task.end}
              </Typography>
            </div>
          </div>
        </div>
        <ChevronRightIcon className='w-8' onClick={() => handleOpen()}/>
      </CardBody>
    </Card>
  )
}

export default Task