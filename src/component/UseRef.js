import React,{useRef} from "react";


function UseRef(){

    const inputRef = useRef(null)
    
    const onClick = () =>{
        alert(`Name is ${inputRef.current.value}`)
        inputRef.current.focus()
    }
    return(
        <div>
            <input ref={inputRef} type="text" placeholder="Enter name"/>
            <button onClick={onClick}>click</button>
        </div>
    )
}
export default UseRef