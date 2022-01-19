import logo from './logo.svg';
import './App.css';
import React from 'react';
import TodoList from './components/TodoList';
import Home from './components/Home';
import Button from "@mui/material/Button";

import 'bootstrap/dist/css/bootstrap.min.css'
import { useNavigate } from "react-router-dom";
import { Routes, Route, Outlet, Navigate } from "react-router-dom";
import ButtonAppBar from "./components/Navbar";

function App() {
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");


  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <ButtonAppBar loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
          }
        >
          <Route index element={<Home />} />
          <Route path="login" element={<Login setLoggedIn={setLoggedIn} />} />
          <Route element={<PrivateRoute loggedIn={loggedIn} />}>
            <Route path="todo" element={<TodoList />}/>
          <Route path="details" element={<Details />} />
                        
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

function PrivateRoute(props) {
  console.log(props.loggedIn);
  return <div>{props.loggedIn ? <Outlet /> : <Navigate to="/login" />}</div>;
}


function Details(){
  return(
    <div>
      <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt vestibulum nisl, a faucibus turpis porttitor quis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin viverra rutrum nunc id tempor. Integer orci eros, commodo id mauris sit amet, cursus condimentum velit. Nulla facilisi. Mauris nec nisi vitae lacus volutpat pellentesque. Suspendisse ultrices ipsum eu odio mattis, quis ornare ante porta. Phasellus eu dignissim ex. Nunc dignissim aliquam dui, a tincidunt ante viverra id.

Sed in est vehicula, scelerisque mi ut, varius lectus. Maecenas at placerat orci. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse sed dictum urna. In eget lectus sed sapien iaculis pulvinar id quis ligula. Phasellus feugiat, ex lobortis elementum fermentum, ante libero congue urna, in lacinia est sapien faucibus massa. Morbi sit amet molestie elit, at pretium leo. Proin lectus leo, tempor interdum velit ut, tempor feugiat nibh. Vestibulum mauris felis, pharetra sed cursus non, ultricies quis purus.

Nunc neque purus, auctor in purus nec, commodo tempor erat. Aenean ultrices tellus semper lacinia venenatis. Vivamus sodales lorem a lectus feugiat, et posuere arcu tempus. Mauris accumsan est ut enim egestas rutrum. Curabitur congue rhoncus eros, in elementum nunc rhoncus in. Nam ultrices sapien metus, vitae gravida urna faucibus ac. In suscipit sem nunc, ut pharetra lacus dictum nec. Phasellus pulvinar eu lectus non vulputate. Suspendisse tincidunt nunc ante, vel pellentesque lacus ultrices sit amet. Vivamus sagittis vitae odio quis convallis. Proin lacinia sem arcu, eu blandit felis facilisis eu. Nullam fringilla congue tellus id efficitur. Ut gravida, ex vitae consequat mattis, erat tellus venenatis odio, non hendrerit ante risus at lectus.
        </p>
    </div>

  )
}
function Login(props) {
  const navigate = useNavigate();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const[formIsvalid,setFormIsvalid]=React.useState(false);
  console.log("70", props);
const handleChange=(e)=>{
  const{name,value}=e.target
  if(name==="email"){
      setEmail(e.target.value);
      setFormIsvalid(
        e.target.value.includes('@') && email.trim().length > 6
        );
  }
  if (name==="password"){
      setPassword(e.target.value);
      setFormIsvalid(
        e.target.value.trim().length > 6 && email.includes('@')
      );
    };
  }

  
  
      const handleClick = () => {
    console.log("handleClick called...", props);
    props.setLoggedIn(true);
    navigate("/todo");

  };
  return (
    <div style={{padding:"20px 30%"}}>
      <form >
  <div class="form-group" >
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" autoComplete="off" style={{width:"40rem"}} class="form-control"name="email" value={email} onChange={handleChange} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" style={{width:"40rem"}} class="form-control" name="password"value={password} onChange={(e)=>setPassword(e.target.value)} id="exampleInputPassword1" aria-describedby="password" placeholder="Enter password"/>
  </div>
  </form>
       
        
      <button type="button" class="btn btn-success"disabled={!formIsvalid} onClick={() => handleClick()}>Login</button>

      
    </div>
  );
}
export default App;