"use client"

import styles from "./chart.module.css"
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    {
      name: 'Janvier',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Fevrier',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Mars',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
        name: 'Mai',
        uv: 3000,
        pv: 9500,
        amt: 2390,
      },
  ];
const Chart = () => {
    return (
      <div className={styles.container}>
        <h2 className={styles.title}>Activites mensuelles</h2>
        <ResponsiveContainer width="100%" height="90%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip contentStyle={{background:"#151c2c", border:"none"}} />
          <Legend />
          <Line type="monotone" dataKey="pv" stroke="#8884d8" strokeDasharray="5 5" />
          <Line type="monotone" dataKey="uv" stroke="#82ca9d" strokeDasharray="3 4 5 2" />
        </LineChart>
      </ResponsiveContainer>
      </div>
    )
  }
  
  export default Chart