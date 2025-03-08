import { useState } from 'react'
import './App.css'
import {ResponsiveContainer,LineChart,Line,XAxis,YAxis, BarChart, Legend, Bar, Tooltip, Area, AreaChart} from 'recharts'
function App() {
  const lineChartData = [
    { name: "Jan", sales: 4000, profit: 2400 },
    { name: "Feb", sales: 3000, profit: 1398 },
    { name: "Mar", sales: 2000, profit: 9800 },
    { name: "Apr", sales: 2780, profit: 3908 },
    { name: "May", sales: 1890, profit: 4800 },
    { name: "Jun", sales: 2390, profit: 3800 },
    { name: "Jul", sales: 3490, profit: 4300 },
  ];
  const barChartData = [
    { category: "Electronics", revenue: 120000 },
    { category: "Clothing", revenue: 80000 },
    { category: "Home Appliances", revenue: 60000 },
    { category: "Books", revenue: 50000 },
    { category: "Toys", revenue: 40000 },
  ];
  const areaChartData = [
    { month: "Jan", temperature: 30 },
    { month: "Feb", temperature: 65 },
    { month: "Mar", temperature: 40 },
    { month: "Apr", temperature: 95 },
    { month: "May", temperature: 10 },
    { month: "Jun", temperature: 55 },
  ];
  
  return (
    <div className='container'>
      <h1 className='app-heading'>Chart App</h1>
      <div className='line-chart chart'>
        <h3 className='chart-heading'>Line Chart</h3>
        <ResponsiveContainer width="100%" height={400}>
          <LineChart data={lineChartData}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip contentStyle={{backgroundColor: 'black'}}/>
            <Line type="monotone" dataKey="sales" stroke="#8884d8" />
            <Line type="monotone" dataKey="profit" stroke="#82ca9d" />
            <Legend/>
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className='bar-chart chart'>
        <h3 className='chart-heading'>Bar Chart</h3>
        <ResponsiveContainer>
          <BarChart data={barChartData}>
            <XAxis dataKey="category"/>
            <YAxis dataKey="revenue"/>
            <Bar dataKey="revenue" stroke='red' fill='green'/>
            <Legend/>
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className='area-chart chart'>
        <h3 className='chart-heading'>Area Chart</h3>
        <ResponsiveContainer>
          <AreaChart data={areaChartData}>
            <XAxis dataKey="month"/>
            <YAxis dataKey="temperature"/>
            <Area type="monotone" dataKey="temperature"/>
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default App
