import React from "react";
import axios from "axios";

class HandlingAPI extends React.Component{

    constructor(props){
        super(props)
        this.state={
            items : [],
            isLoaded : false
        }
    }

    componentDidMount(){
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then(response => {
            this.setState({
                items : response.data,
                isLoaded : true
            })
        })
    }

    render(){
        if(!this.state.isLoaded){
            return <div>Loading...</div>
        }
        else{
        return(
            <div>
                <ul>
                    {this.state.items.map(item =>(
                        <li key={item.id}>
                            Title : {item.title} | Body : {item.body}
                        </li>     
                    ))}
                </ul>
            </div>
        )
        }
    }
}
export default HandlingAPI