import React, { useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import { TextField,Button } from  "@material-ui/core";
import { makeStyles } from "@material-ui/core";



const useStyles = makeStyles({
    root : {
        marginTop : "20px",
        backgroundColor : "lightblue"
    },
    button : {
        marginTop : "20px",
        height : "55px",
        marginLeft : "10px",
        backgroundColor : ""
    },
})

function TodoInput(){

    const [query,setQuery] = useState("");

    const dispatch = useDispatch(); 
    const todos = useSelector(state => state.todos)

    const handleClick=(event)=>{

        event.preventDefault();
        console.log(todos);
        if (query==='' || todos.includes(query)){
            alert("task is empty or already");

        }
        else{
                dispatch({
                    type : "ADD_TODO",
                    payload : query
                })
    
            }
        setQuery("");
}

    const classes = useStyles();
    return(
        <div>
            <form onSubmit={handleClick}>
                <TextField
                className={classes.root}
                variant="filled"
                type="text"
                value={query}
                onChange={(e)=>setQuery(e.target.value)}
                placeholder="Enter Task"
                />
                <Button
                className={classes.button}
                variant="contained"
                color="secondary"
                onClick={handleClick}>
                ADD TODO
                </Button>
            </form>
        </div>
    )
}
export default TodoInput