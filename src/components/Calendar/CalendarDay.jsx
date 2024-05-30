import { Typography } from '@material-tailwind/react'
import React from 'react'
import { getWeekdayShort } from '../../utils/dateShit'

const CalendarDay = (props) => {
  const { date, weekday, active, setActiveDay, hasTask } = props
  return (
    <div className='flex flex-col items-center' onClick={() => setActiveDay(weekday)}>
      <Typography className='text-sm'>
        {getWeekdayShort(weekday)}
      </Typography>
      <div className={`relative flex items-center justify-center h-9 w-9 ${active ? 'bg-purple' : 'bg-darkGray'} ${active && 'text-white'} hover:bg-blue rounded-full cursor-pointer`}>
        {date}
        {hasTask && <div className={`absolute bottom-1 w-1.5 h-1.5 rounded-full bg-${active ? 'white' : 'purple'}`}></div>} 
      </div>
    </div>
  )
}

export default CalendarDay