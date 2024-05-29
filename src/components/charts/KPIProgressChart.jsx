import { Typography } from '@material-tailwind/react';
import { PieChart } from '@mui/x-charts';
import React, { useEffect, useRef, useState } from 'react'

const KPIProgressChart = (props) => {
  const chartCanvasRef = useRef(null);
  const [width, setWidth] = useState(0)

  useEffect( () => {
    if(chartCanvasRef.current){
      setWidth(chartCanvasRef.current.offsetWidth)
    }
  }, [chartCanvasRef]);

  const { progress } = props;

  return (
    <div className='flex items-center justify-center w-1/3' ref={chartCanvasRef}>
      <Typography variant='h3' className='absolute font-inter text-purple'>
        {`${Math.round(progress*100)}%`}
      </Typography>
      <PieChart
        margin={{left: width/2 }}
        colors={['#7E56DA']}
        series={[
          {
            data: [
              { id: 0, value: progress*100 },
            ],
            innerRadius: width/3 - 10,
            outerRadius: width/3,
            startAngle: 0,
            endAngle: 360 * progress
          },
        ]}
        width={width}
      />
    </div>
  )
}

export default KPIProgressChart