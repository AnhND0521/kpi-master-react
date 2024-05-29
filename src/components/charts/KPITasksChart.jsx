import { Card, Typography } from '@material-tailwind/react'
import { PieChart } from '@mui/x-charts'
import React, { useEffect, useRef, useState } from 'react'

const KPITasksChart = (props) => {
  const { finished, upcoming, overdue, total } = props;
  const chartCanvasRef = useRef(null);
  const [width, setWidth] = useState(0)

  useEffect( () => {
    if(chartCanvasRef.current){
      setWidth(chartCanvasRef.current.offsetWidth)
    }
  }, [chartCanvasRef]);

  return (
    <div className='relative w-full' ref={chartCanvasRef}>
      <PieChart
        margin={{
          right: width/2
        }}
        colors={["#6BCB77", "#FFD93D", "#FF6B6B"]}
        series={[
          { 
            data: [
              { id: 0, value: finished, label: `Đã hoàn thành\n(${finished})` },
              { id: 1, value: upcoming, label: `Cần làm\n(${upcoming})` },
              { id: 2, value: overdue, label: `Quá hạn\n(${overdue})` },
            ],
            outerRadius: width/5,
            innerRadius: width/5 - 30,
          },
        ]}
        width={width}
        height={2*width/5}
        slotProps={{
          legend: {
            direction: 'column',
            position: { vertical: 'right', horizontal: 'right' },
          },
        }}
      />
      <div className='absolute top-0 left-0 w-1/2 h-full flex items-center justify-center'>
        <div>
          <Typography className='font-inter text-center text-xl font-bold'>
            {total}
          </Typography>
          <Typography className='font-inter text-lg font-regular'>
            công việc
          </Typography>
        </div>
      </div>
    </div>
  )
}

export default KPITasksChart