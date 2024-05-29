import { Typography } from '@material-tailwind/react';
import { PieChart } from '@mui/x-charts';
import React, { useEffect, useRef, useState } from 'react'

const KPIProgressChartSmall = (props) => {

  const { progress } = props;

  return (
    <div className='flex items-center justify-center w-1/3'>
      <Typography className='text-sm font-medium absolute font-inter text-purple'>
        {`${Math.round(progress*100)}%`}
      </Typography>
      <PieChart
        // margin={{left: width/2 }}
        colors={['#7E56DA']}
        series={[
          {
            data: [
              { id: 0, value: progress*100 },
            ],
            innerRadius: 50 - 5,
            outerRadius: 50,
            startAngle: 0,
            endAngle: 360 * progress
          },
        ]}
        width={50}
      />
    </div>
  )
}

export default KPIProgressChartSmall