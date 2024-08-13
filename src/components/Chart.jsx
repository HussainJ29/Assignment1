import React from 'react'

const Chart = ({name,type, time, link}) => {
  return (
    <div class="chart-list">
    <div className="table">
      <p>{name}</p>
      <p>{type}</p>
      <p>{time}</p>
      <a href=""><h4>{link}</h4></a>
    </div>
    </div>
  )
}
export default Chart;
