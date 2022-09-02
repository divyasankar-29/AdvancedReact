import React from "react";

class Search extends React.Component{

    constructor(){
        super()
        this.state = {
            query : ""
        }
    this.handleChange = this.handleChange.bind(this);
    }

    handleChange=(e)=>{
        this.setState({
            query : e.target.value
        })
    }
    render(){
        return(
            <div>
                <label>{this.props.children}</label>
                <input
                id="search"
                type="text"
                placeholder="Search"
                value={this.state.query}
                onChange={this.handleChange} />
            </div>
        )
    }
}
export default Search