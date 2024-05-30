import React, { useState } from 'react'
import Wrapper from '../components/Wrapper'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment/moment'
import { findKpiById, findTaskById, getAllTasks } from '../utils/dataUtils'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import TaskDetails from './task/TaskDetails'
import PageHeader from '../components/PageHeader'

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