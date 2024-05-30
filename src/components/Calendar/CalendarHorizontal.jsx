import React, { useState } from 'react';
import {
  startOfWeek
} from 'date-fns'
import { Card, CardBody, Typography } from '@material-tailwind/react';
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/solid';
import CalendarDay from './CalendarDay';
import { addOneDayToDate } from '../../utils/dateShit';
import Task from './Task';
import { getTasksByDate } from '../../utils/dataUtils';

const CalendarHorizontal = () => {
  const [weeksFromCurrentDate, setWeeksFromCurrentDate] = useState(0)
  const [activeDay, setActiveDay] = useState(new Date().getDay());
  const today = new Date();
  const start = new Date(startOfWeek(today).getTime() + 86400000 * 7 * weeksFromCurrentDate);
  let daysInWeek = []
  for (let i = 0; i < 7; i++) {
    const day = new Date(start.getTime() + 86400000 * i);
    daysInWeek.push(day);
  }

  const tasksActiveDay = getTasksByDate(daysInWeek[activeDay]);

  const calendarDays = daysInWeek.map(day => 
    <CalendarDay 
      date={day.getDate()} 
      weekday={day.getDay()}
      active={day.getDay() === activeDay}
      setActiveDay={setActiveDay}
      hasTask={getTasksByDate(day).length > 0}
    />
  )

  const tasks = tasksActiveDay.map((task) => 
    <Task
      key={task.id}
      id={task.id}
      name={task.name}
      kpi={task.kpi}
      startTime={task.start}
      endTime={task.end}
    />
  )

  return (
    <Card className='px-3 pt-3 pb-5 flex flex-col items-start bg-gray overflow-hidden rounded-md'>
      <Typography className='text-sm mb-2 font-medium'>
        {addOneDayToDate(daysInWeek[activeDay]).toUTCString().substring(0,16)}
      </Typography>
      <CardBody className='p-0 w-full flex items-center justify-between gap-10'>
        <div className='w-full flex flex-row justify-between items-center gap-2'>
          <ArrowLeftIcon 
            className='cursor-pointer w-8 mt-5' 
            onClick={() => {
              setWeeksFromCurrentDate(weeksFromCurrentDate - 1);
              setActiveDay(1);
            }}
          />
            <div className='grid grid-cols-7 w-full h-full'>
              {calendarDays}
            </div>
          <ArrowRightIcon 
            className='cursor-pointer w-8 mt-5' 
            onClick={() => {
              setWeeksFromCurrentDate(weeksFromCurrentDate + 1);
              setActiveDay(1);
            }}
          />
        </div>
        {/* <hr className='my-2 bg-black'/> */}
        <div className='w-2/3 h-20 overflow-y-auto flex flex-col items-center justify-center gap-2 px-4'>
          {tasks.length > 0 ? tasks : 
            <Typography variant='h6' className='font-inter font-regular text-textGray'>
              Không có lịch
            </Typography>
          }
        </div>
      </CardBody>
    </Card>
  )
}

export default CalendarHorizontal