import { Card, CardContent, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import './App.css';
import TodoInput from './component/TodoInput';
import TodoList from './component/TodoList';
import {makeStyles} from '@material-ui/core/styles';
import UserContainer from './component/redux-thunk/UserContainer';
import Search from './component/Search';
import FetchPosts from './component/FetchPosts';

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

  const[posts,setPosts] = useState(null)

  useEffect(()=>{
    const getPosts = async() =>{
      const results = await FetchPosts();
      setPosts(results)
    }
    getPosts();
  },[])
  
  if(!posts){
    return(
      <h4>Loading...</h4>
    )
  } 
  
  return(
    <div>
      <ul data-testid="list">
      {
        posts.map(post => <p key={post.id}>{post.title}</p>)
      }
    </ul>
    <Search>
      Search : 
    </Search>
    </div>
  )
  // return (
  //   <div className="App">
  //     <Card className={classes.root}>
  //       <CardContent sx={{alignItems:"center"}}> 
  //         <Typography className={classes.typo}>USER NAMES</Typography> 
  //       <TodoInput />
  //       </CardContent>
  //       <UserContainer />
  //     </Card>
  //     <br />
  //     <TodoList /> 
  //   </div>
    
  // );
}

export default App;
