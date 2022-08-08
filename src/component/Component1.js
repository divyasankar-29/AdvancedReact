import React, { useState } from "react";
import Component2 from "./Component2";
import { Name } from "./CreateContext";

function Component1(){

    const[userName,setUserName] = useState("Jack");
    const[color,setColor] = useState("red");

        return(
            <div>
                Component 1
                <Name.Provider value={{userName,color}}>
                <Component2 />
                </Name.Provider>
                
            </div>
        )
    }
export default Component1