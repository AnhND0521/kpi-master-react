import { CalendarIcon } from '@heroicons/react/24/outline';
import { Button, Card, CardBody, Typography } from '@material-tailwind/react';
import React from 'react'
import KPIProgressChart from './charts/KPIProgressChart';
import { Link } from 'react-router-dom';
import moment from 'moment/moment';
import { calculateKpiScore } from '../utils/dataUtils';
import { Gauge, gaugeClasses } from '@mui/x-charts/Gauge';

const DashboardKPI = (props) => {
  const { kpi } = props;
  const score = calculateKpiScore(kpi);
  const total = kpi.tasks.length;
  const finished = kpi.tasks.filter(t => t.status === 1).length;

  return (
    <Card className='w-full rounded-md overflow-hidden'>
      <CardBody className='flex justify-between bg-gray p-5'>
        <div className='flex flex-col items-start gap-3'>
          <Typography variant='h4' className='font-inter font-medium text-xl'>
            {kpi.name}
          </Typography>
          <div className='flex gap-1'>
            <Typography className='font-inter font-medium text-sm'>
              {`${finished}/${total}`}
            </Typography>
            <Typography className='font-inter font-normal text-sm'>
              nhiệm vụ đã hoàn tất
            </Typography>
          </div>
          <div className='flex items-center gap-2'>
            <CalendarIcon className='w-4'/>
            <Typography className='font-inter font-medium text-sm'>
              Hạn {moment(kpi.due).format('DD/MM/YYYY')}
            </Typography>
          </div>
          <Link to={`/kpi/${kpi.id}`} state={props}>
            <Button variant='filled' className='bg-purple'>
              Chi tiết
            </Button>
          </Link>
        </div>
        {/* <KPIProgressChart
          progress={score/100}
        /> */}
        
        <Gauge width={150} height={150} value={Math.round(calculateKpiScore(kpi))} text={({value}) => `${value} %`}
          sx={{
            [`& .${gaugeClasses.valueText}`]: {
              fontSize: 30,
              transform: 'translate(0px, 0px)',
            },
          }}
          cornerRadius={'50%'}
        />
      </CardBody>
    </Card>
  )
}

export default DashboardKPI