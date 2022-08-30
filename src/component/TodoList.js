import React from "react";
import { useSelector,useDispatch } from "react-redux";
import{Button,Grid,Card,CardContent} from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles({
    root : {
        display : "flex",
        flexDirection:"column",
        alignItems:"center",
     
    },
    display : {
        display : "flex",
        flexDirection:"row",
        marginTop:"20px",
       
    },
    card : {
        width : "900px",
        marginLeft : "200px",
        marginBottom : "100px",
        backgroundColor : "burlywood"
    }
})


function TodoList(){

    const todos = useSelector(state => state.todos);
    const dispatch = useDispatch();
    // console.log(todos);

    const handleClick = (name) => {
        dispatch({
            type : "DELETE_TODO",
            payload : name
        })
    }

    const classes = useStyles()
    if(!todos[0]){
        return(
            <div>
              No Todos
            </div>
        )
    }
    return(

 <Card className={classes.card}>
    <CardContent sx={{minWidth:""}}>
        <div className={classes.root}>
                {todos.map((todo,index) =>( 
                    <Grid container spacing={10}>

                        <Grid item xs={7}>
                            <h5 key={index}>{todo}</h5>
                        </Grid>

                        <Grid item xs={3}>
                            <Button 
                                variant="contained"
                                color="success"
                                onClick={() => handleClick(todo)}
                                startIcon={<DeleteIcon />}
                                >
                            remove</Button>
                        </Grid>
                
                    </Grid>
                ))}
                </div>
        </CardContent>
    </Card>
                
    )
}
export default TodoList