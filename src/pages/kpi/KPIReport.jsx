import { Button, Card, Dialog, DialogBody, DialogHeader, IconButton, Typography } from '@material-tailwind/react'
import React, { useState } from 'react'
import KPIProgressChart from '../../components/charts/KPIProgressChart';
import { CalendarIcon, ChevronRightIcon, PencilIcon, TrashIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { Link, useParams } from 'react-router-dom';
import Header from '../../components/Header';
import Navbar from '../../components/Navbar';
import { calculateKpiScore, findKpiById, getNumberOfFinishedTasks } from '../../utils/dataUtils';
import moment from 'moment/moment';
import KPITasksChart from '../../components/charts/KPITasksChart';
import KPIEfficiencyChart from '../../components/charts/KPIEfficiencyChart';
import KPIProgressOverTimeChart from '../../components/charts/KPIProgressOverTimeChart';
import WeeklyFinishedTasksChart from '../../components/charts/WeeklyFinishedTasksChart';

const KPIReport = ({kpiId, open, setOpen}) => {
  const id = kpiId;
  const kpi = findKpiById(id);
  const total = kpi.tasks.length;
  const finished = getNumberOfFinishedTasks(kpi);
  const upcoming = kpi.tasks.filter(t => t.status !== 1 && new Date(t.date) >= new Date()).length;
  const overdue = kpi.tasks.filter(t => t.status !== 1 && new Date(t.date) < new Date()).length;

  return (
    <Dialog open={open} handler={() => setOpen(!open)}>
      <DialogHeader className='justify-between'>
        <Typography variant='h5'>Báo cáo</Typography>
        <XMarkIcon className='w-5 cursor-pointer' onClick={() => setOpen(false)} />
      </DialogHeader>
      <DialogBody>
      <main className='flex flex-col gap-4 p-4 h-[40rem] overflow-y-scroll'>
        <div className='flex flex-col items-start gap-3 my-3'>
          <Typography variant='h5' color='blue-gray' className='font-inter font-regular font-medium'>
            Tổng quan nhiệm vụ
          </Typography>
          <div className='w-full grid grid-cols-3 gap-4'>
            <Card className='w-full flex flex-col items-center p-4 rounded-md'>
              <Typography variant='h4' className='font-inter font-semibold text-purple'>
                {upcoming}
              </Typography>
              <Typography className='leading-5'>
                Sắp tới
              </Typography>
            </Card>
            <Card className='w-full flex flex-col items-center p-4 rounded-md'>
              <Typography variant='h4' className='font-inter font-semibold text-green'>
                {finished}
              </Typography>
              <Typography className='leading-5'>
                Đã hoàn thành
              </Typography>
            </Card>
            <Card className='w-full flex flex-col items-center p-4 rounded-md'>
              <Typography variant='h4' className='font-inter font-semibold text-red'>
                {overdue}
              </Typography>
              <Typography className='leading-5'>
                Quá hạn
              </Typography>
            </Card>
          </div>
        </div>
        {/* <div className='min-h-36 flex items-between justify-between mt-3'> */}
          <div className='flex flex-col items-start gap-4 my-3'>
            <Typography variant='h5' color='blue-gray' className='font-inter font-regular font-medium'>
              Báo cáo tiến triển
            </Typography>
            {/* <Typography className='font-inter font-regular text-sm'>
              Mục tiêu: Hoàn thành xuất sắc
            </Typography> */}
            <div className='flex gap-1'>
              <Typography color='blue-gray' className='font-inter font-medium text-sm'>
                {`${finished}/${total}`}
              </Typography>
              <Typography color='blue-gray' className='font-inter font-regular text-sm'>
                nhiệm vụ đã hoàn tất
              </Typography>
            </div>
            <Typography color='blue-gray' className='font-inter font-regular text-sm'>
              Dự báo cần 7 ngày nữa để hoàn thành
            </Typography>
            
            <KPIProgressOverTimeChart />
          </div>
        {/* </div> */}
        <div className='flex flex-col items-start gap-3 my-3'>
          <Typography variant='h5' color='blue-gray' className='font-inter font-regular font-medium'>
            Biểu đồ tổng quan
          </Typography>
          <KPITasksChart 
            finished={finished}
            upcoming={upcoming}
            overdue={overdue}
            total={total}
          />
        </div>
        <div className='flex flex-col items-start gap-3 my-3'>
          <Typography variant='h5' color='blue-gray' className='font-inter font-regular font-medium'>
            Hiệu suất gần đây
          </Typography>
          <WeeklyFinishedTasksChart />
        </div>
      </main>
      </DialogBody>
    </Dialog>
  )
}

export default KPIReport