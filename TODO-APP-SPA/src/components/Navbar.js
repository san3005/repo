import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";


import { Outlet, useNavigate } from "react-router-dom";

export default function ButtonAppBar(props) {
  const navigate = useNavigate();
  return (
    <>
        
          

<ul>
    <li className="item"><h5 style={{color:"#64C2C2"}}>TODO APP</h5></li>
    <li className="item"><button type="button" class="btn btn-outline-primary" onClick={() => {
        navigate("/") ;
        }}>Home</button>
</li> 
{!props.loggedIn && (<li className="item"><button type="button" class="btn btn-outline-success" onClick={() => {
                  navigate("/login");}}>Login</button>
</li>)}
<li className="item"><button type="button" class="btn btn-outline-warning" onClick={() => {
                navigate("/todo");}}>Todo</button></li>

<li className="item"><button type="button" class="btn btn-outline-info"  onClick={() => {
                navigate("/details");
              }}>Details</button>

</li>
{props.loggedIn && (
<li className="item"><button type="button" class="btn btn-outline-danger" onClick={() => {
                  props.setLoggedIn(false);
                  navigate("/login");}}
>logout</button></li>)}

</ul>
            {/* <Button
              color="inherit"
              
            onClick={() => {
                navigate("/");
              }}>
              Home
            </Button>

            {!props.loggedIn && (
              <Button
                color="inherit"
                onClick={() => {
                  navigate("/login");
                }}
              >
                Login
              </Button>
            )}

            <Button
              color="inherit"
              onClick={() => {
                navigate("/todo");
              }}
            >
              Todo
            </Button>
            <Button
              color="inherit"
              onClick={() => {
                navigate("/details");
              }}
            >
              details
            </Button>
            

            {props.loggedIn && (
              <Button
                color="inherit"
                onClick={() => {
                  props.setLoggedIn(false);
                  navigate("/login");
                }}
              >
                Logout
              </Button>
            )} */}
        
      <Outlet />
    </>
  );
}
