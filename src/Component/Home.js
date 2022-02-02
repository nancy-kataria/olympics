import React, {useState} from 'react';
import Table from './Table';
import Chart from './Chart'

function Home() {
    const [table, setTable] = useState(true) 
    const [chart, setChart] = useState(false)

    const tableHandler = () =>{
        setTable(true)
        setChart(false)
    }
    const chartHandler = () =>{
        setTable(false)
        setChart(true)
    }
    
  return <div className='home'>
      <div className='view-choice'>
          <button className='toggle-button' onClick={tableHandler}>Table</button>
          <button className='toggle-button' onClick={chartHandler}>Chart</button>
      </div>
      {table && (
          <Table />
      )}
      {chart && (
          <Chart />
      )}
  </div>;
}

export default Home;
