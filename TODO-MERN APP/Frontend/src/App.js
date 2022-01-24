import logo from './logo.svg';
import './App.css';
import react, { useEffect, useState } from 'react';
const API="http://localhost:8000";
function App() {
  const [todoslists,setTodoslists]=useState([]);
  const[todos,setTodos]=useState("");
  const[popup,setPopup]=useState(false);
  useEffect(()=>{
    GetTodos();
  },[])
  
  const GetTodos=()=>{
    fetch(API+"/todos")
    .then((res)=>res.json())
    .then((data)=>{
      setTodoslists(data);
      console.log(data);
    })
    .catch((err)=>console.log("error bro:",err))
  };

//   const deletetodo=async id=>{
// const data=  await fetch(API+"/todos/delete/"+id,{
//   method:"DELETE"
// })
// .then((res)=>res.json());
// setTodoslists((todoslists)=>todoslists.filter(todoslists=>todoslists._id!==data.result._id));

// };
const deletetodo=async id=>{
  const data=await fetch(API+"/todos/delete/"+id,{method:"DELETE"})
    .then(res=>res.json());
    setTodoslists((todoslist)=>todoslist.filter(todoslist=>todoslist._id!==data.tada._id));
};

const addtodo=async ()=>{
  const data = await fetch(API+"/todos/new",{
    method:"POST",
    headers:{
      "Content-Type":"application/json",
    },
    body:JSON.stringify({
      text:todos,
    })
  })
  .then((res)=>res.json());
  setTodoslists([...todoslists,data]);
  setTodos("");
  setPopup(false);

}
const completetodo=async id=>{
  const data=await fetch(API+"/todos/complete/"+id)
  .then((res)=>res.json())
  setTodoslists(todoslists.map((todoslist)=>{
    if(todoslist._id===data._id){
      todoslist.complete=data.complete;
    }
    return todoslist;
  }))

}
  return (
    <>
    <h1 style={{fontWeight:"800",marginLeft:"40px",color:"#f5f5f5"}}>Welcome Santhosh</h1>
<div className="todos">      
{todoslists.length >0?todoslists.map((todoslist)=>(        
<div className="todo"     key={todoslist._id}>  
<div className='carde'>
               <div class="cards">
               <div className={"checkbox"+ (todoslist.complete ? " is-complete" : "")}
>
  
              </div>

    <button className="btn btn btn-primary" onClick={()=>completetodo(todoslist._id)}>Done</button>
    <p class={"text"+  (todoslist.complete ? " is-complete" : "")}>{todoslist.text}</p>
    <button  className="delete " onClick={() => deletetodo(todoslist._id)}>Delete</button>
    
    </div>
    </div>
</div>                


      ))
      :<p style={{color:"#f5f5f5",fontSize:"32px",fontWeight:"700"}}>Cool,you have no tasks</p>}</div>                

    
 <div className="plus" onClick={() => setPopup(true)}>
        +
      </div>
<div className="">
      {popup&& 
     (<div class={"card" + (todoslists.complete ?"checked":"")}>
     
       <div classname="input1">
         <h5>CREATE TASK</h5>
        <input type="text" className='input1' value={todos} onChange={(e)=>setTodos(e.target.value)}/></div>
        <div classname="addtask">
        <button type="button" class=" button " onClick={addtodo}>ADD</button>
        </div>
        <div classname="canc">
          <span className="cancel" data-icon="bi:x" onClick={()=>setPopup(false)}>x</span>
          </div>
          </div>
 )}</div>
         </>);
}

export default App;
