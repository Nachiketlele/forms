import { useState } from 'react';
import './App.css';
import Form from './components/Form';
import Table from './components/Table'

function App() {
  const [send,setSend] = useState([])
 const [form,setForm] = useState({})
  return (
    <div className="App">
        <Form setSend={setSend} send={send} form={form} setForm={setForm}/>
        <Table setForm={setForm}  setSend={setSend}  send={send} />
    </div>
  );
}

export default App;
