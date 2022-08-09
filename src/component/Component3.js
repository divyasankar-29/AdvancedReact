import React, { useContext } from "react";
import Component4 from "./Component4";
import { Name } from "./CreateContext";

function Component3(){
    
    const {userName,color} = useContext(Name)
        return(
            <div>
                User name is : {userName}<br />
                color is : {color}
                <Component4 />
            </div>
        )
    }
export default Component3