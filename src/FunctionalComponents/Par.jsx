import React, { useState } from 'react'
import Chi from './Chi'
const Par = () => {

const [name, setName] = useState('palli')
const handleClick = (i)=>{
    setName(i)
}
  return (
    <div>
        <h1>{name}</h1>
        <Chi add = {handleClick}/>
    </div>

  )
}

export default Par