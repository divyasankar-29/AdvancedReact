import React from "react";
import { Link } from "react-router-dom";

function Linker(){
    return(
      <nav>
        <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="about">About</Link>
        </li>
        <li>
          <Link to="display">Display</Link>
        </li>
      </ul>
      </nav>
        
    )
}
export default Linker