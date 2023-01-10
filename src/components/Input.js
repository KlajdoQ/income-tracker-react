import React from 'react'

export default function Input(props) {
    function handleChange(e) {
        props.setInput({
          ...props.input,
          [e.target.name]: e.target.value,
        });
      }
  return (
    <div className="input-div">
      <input
        className="input-transaction"
        type="text"
        value={props.input.type}
        name="type"
        placeholder="Transaction name"
        onChange={handleChange}
      />
      <input
        className="input-amount"
        type="number"
        value={props.input.amount}
        name="amount"
        placeholder="Amount"
        onChange={handleChange}
      />
    </div>
  )
}
