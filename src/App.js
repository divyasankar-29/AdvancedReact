import { Card, CardContent, Typography } from '@material-ui/core';
import React from 'react';
import './App.css';
import TodoInput from './component/TodoInput';
import TodoList from './component/TodoList';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles({
  root:{
    width : "900px",
    marginLeft : "200px",
    marginTop : "30px",
    alignItems : "center",
    height : "150px",
    backgroundColor : "burlywood"
  },
  typo:{
    fontFamily : "arial",
    fontSize : "25px"
  }
})

function App() {

  const classes = useStyles();
  return (
    <div className="App">
      <Card className={classes.root}>
        <CardContent sx={{alignItems:"center"}}>
          <Typography className={classes.typo}>TODO APP</Typography>
        <TodoInput />
        </CardContent>
      </Card>
      <br />
      <TodoList /> 
    </div>
    
  );
}

export default App;
