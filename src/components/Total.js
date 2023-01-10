import React from 'react'

export default function Total(props) {
  return (
    <div className="total-div">
         <h1 className='total-name'>${props.total}</h1>
    </div>
  )
}
