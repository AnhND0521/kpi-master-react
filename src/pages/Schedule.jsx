import React, { useState } from 'react'
import Wrapper from '../components/Wrapper'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment/moment'
import { findKpiById, findTaskById, getAllTasks } from '../utils/dataUtils'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import TaskDetails from './task/TaskDetails'
import PageHeader from '../components/PageHeader'
import BackButton from '../components/BackButton'
import { Breadcrumbs } from '@material-tailwind/react'
import { Link } from 'react-router-dom'

const Schedule = () => {
  const localizer = momentLocalizer(moment);
  const myEventsList = getAllTasks().map(t => {
    return {
      id: t.id,
      title: t.name,
      start: moment(moment(t.date).format('DD/MM/YYYY') + ' ' + t.start, 'DD/MM/YYYY HH:mm').toDate(),
      end: moment(moment(t.date).format('DD/MM/YYYY') + ' ' + t.end, 'DD/MM/YYYY HH:mm').toDate(),
    };
  });
  const [openTask, setOpenTask] = useState(false);
  const [event, setEvent] = useState();

  return (
    <Wrapper tab={2}>
        <div className='flex gap-4 items-center'>
                <BackButton to='/dashboard'/>
                <Breadcrumbs>
                    <Link to="/dashboard" className="opacity-60">
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        >
                        <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                        </svg>
                    </Link>
                    <Link to="#">
                        Lịch trình
                    </Link>
                </Breadcrumbs>
        </div>
        <PageHeader label={"Lịch trình"} />
        <div className='w-full flex flex-col gap-4 items-start'>
          <Calendar
            className='w-4/5'
            localizer={localizer}
            events={myEventsList}
            startAccessor="start"
            endAccessor="end"
            style={{ height: 700 }}
            defaultDate={new Date()}
            defaultView="month"
            onSelectEvent={(e) => {
              console.log(e.id.split('.')[0]);
              setEvent(e);
              setOpenTask(true);
            }}
          />
        </div>
        { event && <TaskDetails 
          open={openTask}
          setOpen={setOpenTask}
          kpi={findKpiById(event.id.split('.')[0])} 
          task={findTaskById(event.id.split('.')[0], event.id)}
        /> }
    </Wrapper>
  )
}

export default Schedule