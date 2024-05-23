import { ArrowRightIcon, CheckIcon, PlusIcon } from '@heroicons/react/24/solid'
import { IconButton } from '@material-tailwind/react'
import React from 'react'

const CornerButton = (props) => {
  const { icon } = props;
  return (
    <div className='fixed bottom-20 right-4 flex items-center justify-center w-16 h-16 bg-purple shadow-lg rounded-full'>
      { icon === 'add' && <PlusIcon className='text-white w-12' /> }
      { icon === 'next' && <ArrowRightIcon className='text-white w-12' /> }
      { icon === 'finish' && <CheckIcon className='text-white w-12' /> }
    </div>
  )
}

export default CornerButton