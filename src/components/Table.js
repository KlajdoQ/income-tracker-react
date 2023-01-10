import React from "react";

export default function Table(props) {
  return (
    <div className='table-div'>
      <table border={1} cellPadding={8}>
        <tbody>
          <tr>
            <th>Transaction Type</th>
            <th>Amount</th>
          </tr>
          {props.transaction.map((item, index) => {
            return (
              <tr key={index}>
                <td>{item.type}</td>
                <td>{`$ ${item.amount}`}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
