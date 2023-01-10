import React from 'react'

export default function Submit(props) {
    let { type,amount } = props.input;
    function onSubmit() {
      props.setTransaction([
        ...props.transaction,
        {
          type,
          amount,
        },
      ]);
      props.setTotal((prev) => {
        if(props.selected==="Spent") {
            return prev - parseInt(props.input.amount)
        }else {
            return prev + parseInt(props.input.amount)
        }
      });
    }
  return (
    <div>
        <button onClick={onSubmit} type="submit">Submit</button>
    </div>
  )
}
