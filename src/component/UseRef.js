import React,{useRef} from "react";

const Child = (props) =>{
    <input type="text" ref={props.ref} />
}

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
            <Child ref={inputRef} />
        </div>
    )
}
export default UseRef