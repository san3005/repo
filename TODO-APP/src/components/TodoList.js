import React from 'react'
import CreateTask from './CreateTask'
import Card from './Card'
import  { useState, useEffect } from 'react'


export default function TodoList() {
    const [open,setOpen]=useState(false);
    const [tasklist,setTasklist]=useState([]);
    useEffect(()=>{
        let arr=localStorage.getItem("tasklist");
        if(arr){
            let parsedarr=JSON.parse(arr);
            setTasklist(parsedarr);
        }    },[])
    
    const savetask=(temp)=>{
        let templist=(tasklist);
        templist.push(temp);
localStorage.setItem("tasklist",JSON.stringify(tasklist))  ;
      setTasklist(templist);
        setOpen(false);
   }
   const deletetask=(index)=>{
let templist=tasklist;
templist.splice(index,1);
localStorage.setItem("tasklist",JSON.stringify(templist));

setTasklist(templist);
window.location.reload();
   }
   const updatelistarray=((obj,index)=>{
let templist=tasklist;
templist[index]=obj;

setTasklist(templist);
localStorage.setItem("tasklist",JSON.stringify(templist));
   })

    return (
        
        <>       <div className='header text-center '>
            <h3>TodoList</h3>
            <button className="btn btn-primary mt-2" onClick={()=>setOpen(true)}>Create Task</button>
            </div>
            {open &&<CreateTask close={setOpen} save={savetask} />}

            <div className='task-container'>
    { tasklist&& tasklist.map((obj,index) =>(
        <Card taskobj={obj} index={index } deletes={deletetask} updatelistarray={updatelistarray}/>
     ) )}

        </div>
       

</>
    )
}
