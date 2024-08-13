import { useState } from 'react'
import './App.css'
import catty from './assets/catty.jpg'
import 'line-awesome/dist/line-awesome/css/line-awesome.min.css';
import Head from './components/Head.jsx'
import Chart from './components/Chart.jsx'
import Sidebar from './components/Sidebar.jsx'
import Footer from './components/Footer.jsx'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div class="container">
        <Sidebar></Sidebar>
        <Head></Head>
        <Chart
        name={"1. Once Dance"}
        type={"Crake feat Catkid & Cyla"}
        time={"2:45"}
        link={"CATTY CLOUD SYCN"}
        ></Chart>
        <Chart 
        name={"2. Panda"}
        type={"Cattee "}
        time={"4:06"}
        link={"CATTY CLOUD SYCN"}></Chart>
        <Chart 
        name={"3. Can't Stop the Feeling!"}
        type={"Catin Cimberlake"}
        time={"3:56"}
        link={"CATTY CLOUD SYCN"}></Chart>
        <Chart 
        name={"4. Work from Home"}
        type={"Cat Harmony feat Cella"}
        time={"3:34"}
        link={"CATTY CLOUD SYCN"}></Chart>
        <Footer></Footer>
      </div>
    </>
  )
}

export default App
