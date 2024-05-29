import React, { useState } from 'react'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Warning from '../components/Warning'
import WeeklyFinishedTasksChart from '../components/charts/WeeklyFinishedTasksChart'
import { Card, Menu, MenuHandler, MenuItem, MenuList, Typography } from '@material-tailwind/react'
import { ArrowPathIcon, ChevronRightIcon } from '@heroicons/react/24/outline'
import KPIList from '../components/KPIList'
import { Link } from 'react-router-dom'
import CornerButton from '../components/CornerButton'
import { getCurrentKpis, loadData } from '../utils/dataUtils'
import OverallProgressChart from '../components/charts/OverallProgressChart'
import Wrapper from '../components/Wrapper'
import CalendarHorizontal from '../components/Calendar/CalendarHorizontal'
import KPITasksChart from '../components/charts/KPITasksChart'
import TasksChart from '../components/charts/TasksChart'
import UpcomingTasksChart from '../components/charts/UpcomingTasksChart'

const Dashboard = () => {
  const [kpis, setKpis] = useState(getCurrentKpis());

  const handleSync = () => {
    loadData();
    setKpis(getCurrentKpis());
  }

  return (
    <Wrapper>
        <div className='w-full flex flex-col gap-6'>
          <CalendarHorizontal />
          <Warning />
        </div>
        <div className='flex items-start justify-start gap-10 w-full'>
          <div className='flex flex-col items-start w-full gap-6'>
            <div className='w-full flex items-center justify-between'>
              <Typography variant='h5' className='font-inter text-lg font-semibold'>
                Thống kê
              </Typography>
              <Link to='/statistics'>
                <Typography variant='h6' className='flex font-inter text-md font-semibold text-purple'>
                  Chi tiết
                  <ChevronRightIcon className='w-4' />
                </Typography>
              </Link>
            </div>
            <Card className='flex flex-col items-center gap-4 p-4 bg-gray overflow-hidden rounded-md w-full'>
              <Typography variant='h5' className='font-inter text-md font-medium'>
                Tổng quan tiến độ
              </Typography>
              <OverallProgressChart />
            </Card>

            <Card className='flex flex-col items-center gap-4 p-4 bg-gray overflow-hidden rounded-md w-full'>
              <Typography variant='h5' className='font-inter text-md font-medium'>
                Số lượng nhiệm vụ
              </Typography>
              <TasksChart
                finished={21}
                ongoing={19}
                overdue={5}
                total={45}
              />
            </Card>
          </div>
          <div className='flex flex-col items-start w-full gap-6'>
            <div className='w-full flex items-center justify-between'>
              <Typography variant='h5' className='font-inter text-lg font-semibold'>
                KPI của bạn
              </Typography>
              <Typography variant='h6' className='flex font-inter text-md font-semibold text-purple'>
                Chi tiết
                <ChevronRightIcon className='w-4' />
              </Typography>
              {/* <div className='flex items-center gap-2' onClick={handleSync}>
                <ArrowPathIcon className='w-6'/>
                <Typography className='text-sm font-normal font-regular font-inter'>Đồng bộ</Typography>
              </div> */}
            </div>
            <KPIList kpis={kpis} />
            {/* <CornerButton icon='add' type='menu'/> */}
          </div>
        </div>
      </Wrapper>
  )
}

export default Dashboard