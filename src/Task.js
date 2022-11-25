import React, { Component } from "react";
 class Task extends Component {
    constructor(props){
        super(props);
        this.handleDelete = this.handleDelete.bind(this)
        
    }
    handleDelete(){
        this.props.deleteTask(this.props.id)
        console.log('delete', this.props.id)
        
    }
    render(){
        return(
            <div>
                <p>{this.props.name}</p>
                {this.props.completed === true ? <input type="checkbox" id={this.props.id} checked
                /> : <input type="checkbox" id={this.props.id}/>}
                <button onClick={this.handleDelete}>Delete</button>
            </div>
        )
    }
}
export default Task