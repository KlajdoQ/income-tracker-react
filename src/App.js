import React, { useState } from "react";
import Table from './components/Table'
import DropDownForm from './components/DropDownForm'
import Input from './components/Input'
import Total from './components/Total'
import Header from './components/Header'

function App() {
  const [total, setTotal] = useState(0);
  const [transaction, setTransaction] = useState([]);
  const [input, setInput] = useState({ type: "", amount: "" });

  const options = ["Received", "Spent"];
  const [selected, setSelected] = useState(options[0]);


  return (
    <div className='body'>
      <div className="App">
        <Header />
        <Total total={total} />
        <Table transaction={transaction} />
        <Input input={input} setInput={setInput}/>
        <DropDownForm  selected={selected}setSelected={setSelected} transaction={transaction}options={options} input={input}setTotal={setTotal} setTransaction={setTransaction}/>
      </div>
    </div>
  );
}

export default App;
