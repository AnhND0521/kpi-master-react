import { Card } from '@material-tailwind/react'
import { LineChart } from '@mui/x-charts'
import React, { useEffect, useRef, useState } from 'react'

const OverallProgressChart = () => {
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
            data: [11, 14, 16, 20, 23, 25, 30, 33, 36, 37],
            color: '#7E56DA',
            label: 'Giảng dạy'
          },
          {
            data: [24, 28, 34, 36, 40, 44, 52, 57, 59, 63],
            color: 'green',
            label: 'Nghiên cứu'
          },          
          {
            data: [6, 13, 20, 24, 30, 33, 39, 42, 47, 50],
            color: 'red',
            label: 'Phục vụ'
          },
        ]}
        width={width}
        height={300}
      />
    </Card>
  )
}

export default OverallProgressChart