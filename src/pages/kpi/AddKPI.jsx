import React, { useState } from 'react'
import Header from '../../components/Header'
import Navbar from '../../components/Navbar'
import { useLocation, useSearchParams } from 'react-router-dom'
import AddKPIInfo from './AddKPIInfo'
import AddKPITasks from './AddKPITasks'
import AddKPIStepIndicator from '../../components/AddKPIStepIndicator'
import { getNextKpiId } from '../../utils/dataUtils'
import moment from 'moment'
import { Dialog, DialogBody, DialogHeader, Typography } from '@material-tailwind/react'
import { XMarkIcon } from '@heroicons/react/24/outline'

const AddKPI = ({open, setOpen, setCurrentKpis, setPastKpis}) => {
  const [step, setStep] = useState(1);
  const [kpi, setKpi] = useState();

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   const kpi = {
  //     id: getNextKpiId(),
  //     name: event.target[0].value,
  //     description: event.target[1].value,
  //     due: moment(event.target[2].value, 'DD/MM/YYYY').toDate(),
  //     repeat: event.target[3].children[0].getAttribute('value'),
  //     weights: {
  //       quantity: 50,
  //       quality: 25,
  //       time: 25
  //     },
  //     tasks: []
  //   }
  //   console.log(kpi);
  //   console.log(tasks);
  //   //todo: add kpi and tasks
  // }

  return (
    <Dialog open={open} handler={() => setOpen(!open)}>
      <DialogHeader className='justify-between'>
        <Typography variant='h5'>Tạo KPI</Typography>
        <XMarkIcon className='w-5 cursor-pointer' onClick={() => { setOpen(false); } } />
      </DialogHeader>
      <DialogBody className='text-black px-6 py-6 h-[34rem] overflow-y-scroll'>
        <main className='flex flex-col gap-4 p-4'>
          <AddKPIStepIndicator step={step} />
          <div className='mt-5'>
            {step == 1 && <AddKPIInfo setKpi={setKpi} setStep={setStep} />}
            {step == 2 && <AddKPITasks kpi={kpi} setOpen={setOpen} setCurrentKpis={setCurrentKpis} setPastKpis={setPastKpis} />}
          </div>
        </main>
      </DialogBody>
    </Dialog>
  )
}

export default AddKPI