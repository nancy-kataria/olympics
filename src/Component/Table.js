import React, {useEffect, useState} from "react";
import tableData from "./dummyData.json";

function Table() {
  const [records, setRecords] = useState([])
  const [dataRecords, setDataRecords] = useState([])

  useEffect(()=>{
      setRecords(tableData)
      setDataRecords(tableData)
  },[])

  const filterTableData = (e) =>{
      console.log(e.target.value)
      const value = e.target.value
      const filteredData = dataRecords.filter(data => (
          `${data.Year}`.includes(value)
      ))
      setRecords(filteredData)
  }
  return (
    <div>
      <div className="search">
        <input
          placeholder="Search for a year"
          type="text"
          name="search"
          onInput={filterTableData}
        ></input>
      </div>
      <div className="content">
      <table>
        <tbody>
          <tr>
            <th>Sr.</th>
            <th>Year</th>
            <th>Medals</th>
          </tr>
          {records.map((data) => (
            <tr key={data.Id}>
              <td>{data.Id}</td>
              <td>{data.Year}</td>
              <td>{data.Medals}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
  );
}

export default Table;
