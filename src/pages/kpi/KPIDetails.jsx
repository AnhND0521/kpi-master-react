import { Breadcrumbs, Button, Card, IconButton, Typography } from '@material-tailwind/react'
import React, { useState } from 'react'
import KPIProgressChart from '../../components/charts/KPIProgressChart';
import { CalendarIcon, ChevronRightIcon, PlusIcon } from '@heroicons/react/24/outline';
import { PencilIcon, TrashIcon } from '@heroicons/react/24/solid';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import Header from '../../components/Header';
import Navbar from '../../components/Navbar';
import CornerButton from '../../components/CornerButton';
import Task from '../../components/Task';
import { calculateKpiScore, deleteKpi, findKpiById, getNumberOfFinishedTasks, saveTask } from '../../utils/dataUtils';
import moment from 'moment/moment';
import ConfirmDialog from '../../components/ConfirmDialog';
import Wrapper from '../../components/Wrapper';
import PageHeader from '../../components/PageHeader';
import { Gauge, gaugeClasses } from '@mui/x-charts/Gauge';
import BackButton from '../../components/BackButton';
import KPIReport from './KPIReport';
import TaskDetails from '../task/TaskDetails';
import AddTask from '../task/AddTask';
import EditKPI from './EditKPI';

const KPIDetails = () => {
  const { id } = useParams();

  const [kpi, setKpi] = useState(findKpiById(id));
  const total = kpi.tasks.length;
  const finished = getNumberOfFinishedTasks(kpi);
  const upcoming = kpi.tasks.filter(t => t.status !== 1 && new Date(t.date) >= new Date()).length;
  const pastDue = kpi.tasks.filter(t => t.status !== 1 && new Date(t.date) < new Date()).length;
  
  const [ openDeleteDialog, setOpenDeleteDialog ] = useState(false);
  const [ openReport, setOpenReport ] = useState(false);
  const [ openAddTask, setOpenAddTask ] = useState(false);
  const [ openEditKPI, setOpenEditKPI ] = useState(false);

  const navigate = useNavigate();
  
  const handleDelete = () => {
    deleteKpi(kpi.id);
    navigate('/kpi-list');
  }

  const [ task, setTask ] = useState();
  const [ openTask, setOpenTask ] = useState(false);

  return (
    <Wrapper tab={1}>
        <div className='flex gap-4 items-center'>
          <BackButton to='/kpi-list'/>
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
            <Link to="/kpi-list" className="opacity-60">
              KPI của bạn
            </Link>
            <Link to="#">
              {kpi.name}
            </Link>
          </Breadcrumbs>
        </div>
        <div className='w-full flex justify-start gap-10 items-center'>
          <PageHeader label={'KPI: ' + kpi.name} />
          <div className='flex items-center gap-2'>
            <PencilIcon className='w-6 cursor-pointer' onClick={() => setOpenEditKPI(true)}/>
            <TrashIcon className='w-6 cursor-pointer' onClick={() => setOpenDeleteDialog(true)}/>
          </div>
        </div>
        <div className='min-h-36 flex items-start justify-between'>
          <div className='flex flex-col items-start gap-5'>
            <div className='flex gap-2 justify-start'>
              <Typography className='font-inter font-medium text-base'>
                {`${finished}/${total}`}
              </Typography>
              <Typography className='font-inter w-48 text-left font-regular text-base'>
                nhiệm vụ đã hoàn tất
              </Typography>
            </div>
            <div className='flex items-center gap-2'>
              <CalendarIcon className='w-4'/>
              <Typography className='font-inter font-medium text-sm'>
                Hạn {moment(kpi.due).format('DD/MM/YYYY')}
              </Typography>
            </div>
            <Button variant='filled' className='flex gap-2 items-center bg-purple py-2' onClick={() => setOpenReport(true)}>
              Xem báo cáo
              <ChevronRightIcon className='w-6 text-white'/>
            </Button>
          </div>
          <div className='w-full ms-64'>
            <Gauge width={150} height={150} value={Math.round(calculateKpiScore(kpi))} text={({value}) => `${value} %`}
              sx={{
                [`& .${gaugeClasses.valueText}`]: {
                  fontSize: 30,
                  transform: 'translate(0px, 0px)',
                },
              }}
              cornerRadius={'50%'}
            />
          </div>
        </div>
        <hr className='border border-darkGray w-full' />
        <div className='w-full flex justify-start gap-12 items-center'>
          <Typography variant='h5' className='font-inter font-regular font-medium'>
            Danh sách nhiệm vụ
          </Typography>
          {/* <div className='flex items-center gap-2'>
            <FunnelIcon className='w-6'/>
            <Typography className='font-inter font-semibold text-sm'>
              Lọc
            </Typography>
          </div> */}
          
          <Button className='bg-purple flex gap-2 items-center py-2' onClick={() => setOpenAddTask(true)}>
            <PlusIcon className='w-6' />
            Thêm nhiệm vụ
          </Button>
        </div>
        <Typography variant='h6' className='font-inter font-regular font-medium self-start'>
          Nhiệm vụ sắp tới ({upcoming})
        </Typography>
        <div className='flex flex-col items-center gap-3 w-4/5'>
          {kpi.tasks.filter(t => t.status !== 1 && new Date(t.date) >= new Date()).map(t => (
            <Task
              kpi={kpi}
              task={t}
              handleOpen={() => {
                setTask(t);
                setOpenTask(true);
              }}
            />))
          }
        </div>
        <Typography variant='h6' className='font-inter font-regular font-medium text-red self-start'>
          Nhiệm vụ quá hạn ({pastDue})
        </Typography>
        <div className='flex flex-col items-center gap-3 w-4/5'>
        {kpi.tasks.filter(t => t.status !== 1 && new Date(t.date) < new Date()).map(t => (
            <Task
              kpi={kpi}
              task={t}
              handleOpen={() => {
                setTask(t);
                setOpenTask(true);
              }}
            />))
          }
        </div>
        <Typography variant='h6' className='font-inter font-regular font-medium text-green self-start'>
          Nhiệm vụ đã hoàn thành ({finished})
        </Typography>
        <div className='flex flex-col items-center gap-3 w-4/5'>
        {kpi.tasks.filter(t => t.status === 1).map(t => (
            <Task
              kpi={kpi}
              task={t}
              handleOpen={() => {
                setTask(t);
                setOpenTask(true);
              }}
            />))
          }
        </div>
      

      <ConfirmDialog 
        message='Bạn có chắc muốn xóa KPI này?' 
        open={openDeleteDialog} 
        handleOpen={() => setOpenDeleteDialog(true)} 
        handleCancel={() => setOpenDeleteDialog(false)}
        handleConfirm={handleDelete} 
      />

      {task && <TaskDetails kpi={kpi} task={task} setTask={setTask} open={openTask} setOpen={setOpenTask} />}

      <KPIReport kpiId={id} open={openReport} setOpen={setOpenReport} />

      <AddTask open={openAddTask} setOpen={setOpenAddTask} kpi={kpi} />

      <EditKPI open={openEditKPI} setOpen={setOpenEditKPI} kpi={kpi} setKPI={setKpi} />
    </Wrapper>
  )
}

export default KPIDetails