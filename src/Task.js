import React, { Component } from "react";
 class Task extends Component {
    constructor(props){
        super(props);
        this.handleDelete = this.handleDelete.bind(this)
        this.handleEdit = this.handleEdit.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleResubmit = this.handleResubmit.bind(this)
        this.state = {
            task: '',
            edit: false
        }
        
    }
    handleDelete(){
        this.props.deleteTask(this.props.id)
        console.log('delete', this.props.id)
        
    }
    handleEdit(){
        this.setState({
            edit: true
        })
    }
    handleChange(e){
        this.setState({
            task: e.target.value
        })
        console.log(this.state.task)
    }
    handleResubmit(){
        this.props.resubmitTask(this.props.id, this.state.task)
        this.setState({
            task: '',
            edit: false
        })
        
    }
    render(){
        return(
            <div className="task">
                <div>
                {this.props.completed === true ? <input type="checkbox" id={this.props.id} checked
                /> : <input type="checkbox" id={this.props.id}/>}
                <p>{this.props.name}</p>
                </div>
                <div>
                <button onClick={this.handleDelete}>Delete</button>{this.state.edit === true ? <><input type={"text"} onChange={this.handleChange}/> <button onClick={this.handleResubmit}>Resubmit</button></> : <button onClick={this.handleEdit}>Edit</button>}
                </div>
            </div>
        )
    }
}
export default Task