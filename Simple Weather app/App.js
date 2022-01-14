import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react'


function App() {
  const [city,setCity]=useState("")
  const [result,setResult]=useState("");
  const [wind,setWind]=useState("");
  const submitHandler=(e)=>{
    e.preventDefault();
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d885aa1d783fd13a55050afeef620fcb`)
    .then((res)=>res.json())
    .then((data)=>{
      console.log(data);
      console.log(data.wind.speed);
      console.log(data.main.temp);
      const celsuis=("Current temperature in \t" + city+"\t"+ "is\n" +Math.round((data.main.temp)-273.15)+"°C");
      console.log(celsuis);
      setResult(celsuis);
      const speed=("The wind speed is"+data.wind.speed+"M/s")
      setWind(speed);
      setCity("");


    })
  }

  return (
<div className="card" >
  <div className="card-body">
     <form onSubmit={submitHandler}>
       <h1 style={{color:"lightcoral"}}>Weather App</h1>
       <input type="text" value={city} label="enter city"onChange={(e)=>setCity(e.target.value)}/>
     <input type="submit" class="btn btn-dark" value="Get temperature"/></form>
     <p>{result}</p>
     <p>{wind}</p>
     </div>
     </div>
  );
}

export default App;
