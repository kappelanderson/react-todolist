import React, { Component } from "react";
import Task from "./Task";
 class TodoList extends Component {
    constructor(props){
        super(props);

    }
    render(){
        return(
                <div id="tolist">
                    {this.props.tasks.map(task => (
                        <>
                        <Task id={task.id} name={task.name} key={task.id} completed={task.completed} deleteTask={this.props.deleteTask} resubmitTask={this.props.resubmitTask}/>
                        
                        </>
                    ))}
                </div>
        )
    }
}
export default TodoList