import { Card, CardContent, Typography } from '@material-ui/core';
import React from 'react';
import './App.css';
import TodoInput from './component/TodoInput';
import TodoList from './component/TodoList';
import {makeStyles} from '@material-ui/core/styles';
import UserContainer from './component/redux-thunk/UserContainer';
import Search from './component/Search';

const useStyles = makeStyles({
  root:{
    width : "600px",
    marginLeft : "350px",
    marginTop : "30px",
    alignItems : "center",
    height : "500px",
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
      {/* <Card className={classes.root}>
        <CardContent sx={{alignItems:"center"}}> */}
          {/* <Typography className={classes.typo}>USER NAMES</Typography> */}
        {/* <TodoInput /> */}
        {/* </CardContent>
        <UserContainer />
      </Card> */}
      {/* <br />
      <TodoList />  */}
      <Search>
        Search : 
      </Search>
    </div>
    
  );
}

export default App;
