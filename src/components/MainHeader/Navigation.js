import React from "react";
import { connect } from "react-redux";

import classes from "./Navigation.module.css";
const mapStateToProps = (state) => {
  console.log(state);
  return {
    isLoggedIn: state.isLoggedIn,
  };
};

const mapDispatchToProps = (dispatch) => {
  const action = { type: "USER_LOGOUT" };
  return {
    onUserLogout: () => dispatch(action),
  };
};

const Navigation = (props) => {
  return (
    <nav className={classes.nav}>
      <ul>
        {props.isLoggedIn && (
          <li>
            <a href="/">Users</a>
          </li>
        )}
        {props.isLoggedIn && (
          <li>
            <a href="/">Admin</a>
          </li>
        )}
        {props.isLoggedIn && (
          <li>
            <button onClick={props.onUserLogout}>Logout</button>
          </li>
        )}
      </ul>
    </nav>
  );
};
export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
