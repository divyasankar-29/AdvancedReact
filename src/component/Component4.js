import React, { useContext } from "react";
import { Name } from "./CreateContext";

function Component4(){
    const {color} = useContext(Name);
        return(
            <div>
                <h4>My favourite color is {color}</h4>
            </div>
        )
    }
export default Component4