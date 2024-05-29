import { Card } from '@material-tailwind/react'
import { LineChart } from '@mui/x-charts'
import React, { useEffect, useRef, useState } from 'react'

const KPIProgressOverTimeChart = () => {
  const chartCanvasRef = useRef(null);
  const [width, setWidth] = useState(0)

  useEffect( () => {
    if(chartCanvasRef.current){
      setWidth(chartCanvasRef.current.offsetWidth)
    }
  }, [chartCanvasRef]);

  return (
    <Card className='w-full rounded-md overflow-hidden' ref={chartCanvasRef}>
      <LineChart
        xAxis={[{ scaleType: 'point', data: ['1/5', '4/5', '7/5', '10/5', '13/5', '16/5', '19/5', '22/5', '25/5', '28/5'], label: 'Ngày' }]}
        yAxis={[{ label: '%' }]}
        series={[ 
          {
            data: [6, 10, 20, 24, 30, 31, 34, 42, 44, 50]
          },
        ]}
        grid={{horizontal: true, vertical: true}}
        width={width}
        height={300}
      />
    </Card>
  )
}

export default KPIProgressOverTimeChart