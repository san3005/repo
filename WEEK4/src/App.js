import './App.css'
import React from 'react';
import FormValid from './components/FormValid'
function App(){
  return(
<div className="container mt-3">
    <div className="col-md-8">
    <Draggable>
  <div>I can now be moved around!</div>
</Draggable>    </div>
    
</div>   
    
  )
}
export default App;