// import React,{useState,useEffect} from 'react';
// import {Button,Modal,ModalHeader,ModalBody,ModalFooter} from 'reactstrap';

// function EditTask({close ,save,taskobj,todolist,setList,update}) {
//     const [task,setTask]=useState("");
//     const [description,setDescription]=useState("");
    
//     const handleChange=(e)=>{
//         const{name,value}=e.target
//         if(name==="task"){
//             setTask(e.target.value);
//         }
//         if (name==="description"){
//             setDescription(e.target.value);
//         }
//       }
//       useEffect(()=>{
//         setTask(taskobj.task);
//         setDescription(taskobj.description);

//     },[])
//     const handleUpdate=(obj)=>{
      
//         update(obj);
//       } 
    
  
 
     
//    return(
   
//         <div className="modalBackground1">
//           <div className="modalContainer">
//               <div className='title1'>
//           <h5 style={{borderBottom:"1px solid crimson"}}>Update Task   <button className='btn btn-light mx2'
//            style={{justifyContent:'space-between'}}
//            onClick={() => {
//              close(false);
//            }}
//          >
//            X
//          </button>
//     </h5>
    
        
            
//               <form>
//               <div className="form-group">
  
//   <label>Task Name</label>
//   <input type="text" value={task} className="form-control mt-2"name="task" onChange={handleChange} aria-label="Small" aria-describedby="inputGroup-sizing-sm"/>
// </div>
// <div className="form-group">
//     <label for="description">Description</label>
//     <textarea className="form-control mt-2" id="description"name="description" value={description} onChange={handleChange}rows="3"></textarea>
//   </div>


// </form>
//             </div>
//             <div className="footer">
//             <button onClick={handleUpdate}>Update</button>

//               <button
//                 onClick={() => {
//                   close(false);
//                 }}
//                 id="cancelBtn"
//               >
//                 Cancel
//               </button>
//             </div>
//         </div>       </div>

//       );
    
// }
    
    

// export default EditTask;
