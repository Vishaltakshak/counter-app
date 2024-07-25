import React, { useState } from 'react'
import Message from '../components/message'
import {Button} from '../components/buttion'

export const CounterApp = () => {
  const [count, setCount] = useState(0);
  const plus =()=>{
    setCount(count + 1);
    console.log('plus', count)
  };
  const minus = ()=>{
    setCount(count-1)
    console.log('minus', count)
  };
  return (
    <div className='container'>
      <Message msg = 'counter app' color="alert alert-success text-center" />
      <Message msg = 'Count value is ' color="alert alert-info" val ={count}/>
      <Button fn={plus} val = '+' color="btn btn-primary" /> &nbsp;
      <Button fn={minus} val = '-' color="btn btn-danger" />
    </div>
  )
}
