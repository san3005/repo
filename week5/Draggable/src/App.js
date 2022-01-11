import React from 'react';
import Draggable from 'react-draggable';
import "bootstrap/dist/css/bootstrap.css";
import './App.css';
import Card from './Card';

function App(){
  return(
    <>

      <Card axis="x" title="Card1" subtitle="Hi dude im card1 and can be dragged across x axis" content="this is a sample content test checking whether the draggabel is working or not"/>
      <Card title="Card2" axis="y" subtitle="Hi dude im card2 can be dragged across y axis" content="this is a sample content test checking whether the draggabel is working or not"/>
      <Card title="Card3" subtitle="Hi dude im card3" content="this is a sample content test checking whether the draggabel is working or not"/>
      <Card title="Card4" subtitle="Hi dude im card4" content="this is a sample content test checking whether the draggabel is working or not"/>
      <Draggable handle="strong">
          <div className="card" style={{display: 'flex',height:"200px",width:"18rem", flexDirection: 'column'}}>
            <strong className="cursor"><div>Drag here</div></strong>
            <div style={{overflow: 'scroll'}}>
              <div style={{background: 'crimson', whiteSpace: 'pre-wrap'}}>
                I have long scrollable content with a handle
                {'\n' + Array(40).fill('000').join('\n')}
              </div>
            </div>
          </div>
        </Draggable>
   </>
  )
}
export default App;
