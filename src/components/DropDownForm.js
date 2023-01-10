import React from 'react'
import Submit from './Submit'

export default function DropDownForm(props) {
    
  return (
    <div>
      <div className="drop-down">
        <form>
          <label>Transaction Type</label>
          <select
            value={props.selected}
            onChange={(e) => props.setSelected(e.target.value)}
          >
            {props.options.map((value) => {
              return (
                <option value={value} key={value}>{value}</option>
              );
            })}
          </select>
        </form>
      </div>
      <Submit 
        transaction={props.transaction} 
        setTransaction={props.setTransaction} 
        input={props.input} 
        selected={props.selected}
        setTotal={props.setTotal}/>
    </div>
  )
}
