import React from 'react'
import Card from './Card'
import  { useState, useEffect } from 'react'


export default function TodoList() {
    const [open,setOpen]=useState(false);
    const [tasklist,setTasklist]=useState([]);
    const [task,setTask]=useState("");
    const [description,setDescription]=useState("");

    const handleChange=(e)=>{
        const{name,value}=e.target
        if(name==="task"){
            setTask(e.target.value);
        }
        if (name==="description"){
            setDescription(e.target.value);
        }
      }
    const handlesave=()=>{
     
      const newtodo={task:task,description:description,done:false,id:tasklist.length+1};
savetask(newtodo);
  }
    useEffect(() => {
        fetch("http://localhost:8000/todos/")
        .then((res)=>res.json())
        .then((data)=>{
          console.log(data);
          setTasklist(data);
        });
       }, []);
    // useEffect(()=>{
    //     let arr=localStorage.getItem("tasklist");
    //     if(arr){
    //         let parsedarr=JSON.parse(arr);
    //         setTasklist(parsedarr);
    //     }    },[])
    
    const savetask=(newtodo)=>{
        const newt=[...tasklist,newtodo]
            fetch("http://localhost:8000/todos/",{
              method:"POST",
              headers:{
                "Content-Type":"application/json",
              },
              body:JSON.stringify({task:task,description:description,done:false}),
       
       
            })
            .then((res)=>res.json())
            .then((data)=>{
              console.log(data);
            });
      setTasklist(newt);
        setOpen(false);
        setTask();
        setDescription();
   };
   const deletetask=(id)=>{
       const todos=[...tasklist];
       const newtodos=todos.filter((data)=>data.index!==id)
fetch("http://localhost:8000/todos/"+id,{
    method:"DELETE",
})
.then((res)=>res.json())
.then((data)=>{
    console.log(data);
})
  setTasklist(newtodos); 
};

const detask=(id)=>{
  const todos=[...tasklist];
    const newtodos=todos.filter((data)=>data.id!==id)
fetch("http://localhost:8000/todos/"+id,{
 method:"DELETE",
})
.then((res)=>res.json())
.then((data)=>{
 console.log(data);
 console.log(tasklist);
 setTasklist(newtodos); 

});
};
  

//    const updatelistarray=((obj,id)=>{
// let templist=tasklist;
// templist[id]=obj;
//      fetch("http://localhost:8000/todos/"+(obj.id),{
//        method:"PUT",
//        headers:{
//          "Content-Type":"application/json",
//        },
//        body:JSON.stringify({task:obj.task,description:obj.description}),


//      })
//      .then((res)=>res.json())
//      .then((data)=>{
//        console.log(data.task);
//       setTasklist(templist);
//       //  setTasklist(temp);
//      });
//  setOpen(false);

//  setDescription();
// })
   

      
         

    return (
        
        <>       <div className='header text-center '>
            <h3>TodoList</h3>
            <button className="btn btn-primary mt-2" onClick={()=>setOpen(true)}>Create Task</button>
            </div>
            {open &&  <div className="modalBackground">
          <div className="modalContainer">
              <div className='title1'>
          <h5 style={{borderBottom:"1px solid crimson"}}>Create Task   <button className='btn btn-light mx'
           style={{justifyContent:'space-between'}}
           onClick={() => {
             setOpen(false);
           }}
         >
           X
         </button>
    </h5>
    
        
            
              <form>
              <div className="form-group">
  
  <label>Task Name</label>
  <input type="text" value={task} className="form-control mt-2"name="task" onChange={handleChange} aria-label="Small" aria-describedby="inputGroup-sizing-sm"/>
</div>
<div className="form-group">
    <label for="description">Description</label>
    <textarea className="form-control mt-2" id="description"name="description" value={description} onChange={handleChange}rows="3"></textarea>
  </div>


</form>
            </div>
            <div className="footer">
            <button onClick={handlesave}>Add to list</button>

              <button
                onClick={() => {
                  setOpen(false);
                }}
                id="cancelBtn"
              >
                Cancel
              </button>
            </div>
        </div>       </div>

      }
 <div className='task-container'>

{tasklist.map((obj,index,i)=>
    <Card  abc= {obj} key={obj.task} deleteee={detask}index={index}setList={setTasklist}tasklist={tasklist} />)}
    </div>
   
       

</>
    )
    };
