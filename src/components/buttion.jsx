
import React from 'react'

export const Button = (props) => {
  return (
    <button onClick={props.fn} className={props.color} > {props.val} </button>
  );
}

