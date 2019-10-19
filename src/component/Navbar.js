import React from "react";
import AuthBtn from "./AuthBtn";

const Navbar = () => {
  return <div className={"navbar"}>
    <h1>React Starter</h1>
    <div className={"padding-1"}>
      <AuthBtn btnText={"Login"}/>
    </div>
  </div>
};

export default Navbar;