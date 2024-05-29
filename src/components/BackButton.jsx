import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeftIcon } from '@heroicons/react/24/outline'

const BackButton = (props) => {
  const { state } = props;
  return (
    <Link to={props.to} state={state}>
      <ArrowLeftIcon className={props.color ? 'absolute top-8 left-12 w-8' : 'w-8'} color={props.color || 'black'}/>
    </Link>
  )
}

export default BackButton