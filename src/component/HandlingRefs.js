
import React from "react";

class HandlingRefs extends React.Component{

    constructor(props){
        super(props)
        this.state={
            count:0
        }
        this.inputRef = React.createRef()

    }

    componentDidMount(){

        this.inputRef.current.focus()
    }

    handleClick =() => {
        this.setState({
            count:this.state.count+1
        })
        this.inputRef.current.focus()
    }

    render(){
        return(
            <div>
                <input type="text" ref={this.inputRef}></input>
                <button onClick={this.handleClick}>Increment</button>
                <h4>The count is {this.state.count}</h4>
            </div>
        )
    }
}
export default HandlingRefs