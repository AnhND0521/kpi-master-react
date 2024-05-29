import { Card, Typography } from '@material-tailwind/react'
import { PieChart } from '@mui/x-charts'
import React, { useEffect, useRef, useState } from 'react'

const TasksChart = (props) => {
  const { finished, ongoing, overdue, total } = props;
  const chartCanvasRef = useRef(null);
  const [width, setWidth] = useState(0)

  useEffect( () => {
    if(chartCanvasRef.current){
      setWidth(chartCanvasRef.current.offsetWidth)
    }
  }, [chartCanvasRef]);

  return (
    <Card className='w-full pb-4 rounded-md overflow-hidden' ref={chartCanvasRef}>
      <PieChart
        margin={{
          left: width/6,
          top: -40,
          bottom: 0
        }}
        colors={["#6BCB77", "#FFD93D", "#FF6B6B"]}
        series={[
          { 
            data: [
              { id: 0, value: finished, label: `Đã hoàn thành\n(${finished})` },
              { id: 1, value: ongoing, label: `Cần làm\n(${ongoing})` },
              { id: 2, value: overdue, label: `Quá hạn\n(${overdue})` },
            ],
            outerRadius: width/8
          },
        ]}
        width={width}
        height={250}
        slotProps={{
          legend: {
            direction: 'row',
            position: { vertical: 'bottom', horizontal: 'middle' },
          },
        }}
      />
      <div className='flex flex-col items-center'>
        <Typography className='font-inter text-xl font-bold'>
          {total}
        </Typography>
        <Typography className='font-inter text-lg font-regular'>
          công việc
        </Typography>
      </div>
    </Card>
  )
}

export default TasksChart