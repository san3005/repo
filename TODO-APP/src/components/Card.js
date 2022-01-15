import React, {useState} from 'react';
import EditTask from './EditTask'

const Card = ({taskobj,deletes, index,updatelistarray}) => {
    const [modal, setModal] = useState(false);

    const colors = [
      {
        primaryColor:"#F2473F",
        secondaryColor:"#FAB2AF"
      },
      
      {

      primaryColor:"#777733",
      secondaryColor:"#B8B85A"
      },
      {
        primarColor:"#488214",
        secondaryColor:"#7EDE28"

      },{
        primaryColor:"#00688B",
        secondaryColor:"#72DCFF"
      },{
        primaryColor:"#5959AB",
        secondaryColor:"#BCBCDD"
      },{
        primaryColor:"#8E388E",
        secondaryColor:"#DDA8DD"
      },{
        primaryColor:"#FA1D2F",
        secondaryColor:"#FB606D",
      }
    ]

    const HandleDelete=()=>{
deletes(index);
    }
  
    const updateTask=(obj)=>{ 
      updatelistarray(obj,index);
    }

    return (<>      
    {modal && <EditTask close={setModal} update={updateTask} taskobj={taskobj}  save={updateTask}/>}

        <div className=" mt-3  mr-5" style={{border:"2px solid",width:"20rem",borderColor:colors[index%7].secondaryColor,borderRadius:"6px",marginRight:"40px",marginLeft:"40px"}}>
            <div className="cards" style={{borderRadius:"8px",boxShadow:"2px"}}>
  <div className="card-header" style={{backgroundColor:colors[index%7].secondaryColor,borderBottom:"2px solid",borderColor:colors[index%7].secondaryColor}}>
  {taskobj.name}  </div>
  <div className="card-body" >
    <p className="card-text">{taskobj.description}
    </p>
    <div className="mb-2 py-1">
    <i className="far fa-trash-alt px-2" style={{float:"right",color:colors[index%7].primaryColor,cursor:"pointer"}} onClick={HandleDelete}></i>

    <i className="fa fa-pencil-square-o mr-3"style={{float:"right",color:colors[index%7].primaryColor,cursor:"pointer"}} onClick={()=>setModal(true)}aria-hidden="true"></i>
    </div> </div>
    

  </div>
</div>

</>

    );
};

export default Card;
