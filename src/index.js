import React, { Component } from "react";
import ReactDOM from "react-dom";
import TodoList from "./TodoList.js"
class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            tasks: [{name: "Do the homework", id:1, completed: true}, {name: "Make the bed", id:2, completed: false}],
            task: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.deleteTask = this.deleteTask.bind(this)

    }
    handleSubmit(e){
        if(!this.state.task) return
        this.setState({
            tasks: [...this.state.tasks, {name:this.state.task, id: this.state.tasks.length + 1, completed: false}],
            task: ''
        })
        
    }
    handleChange(e){

        this.setState({
            task: e.target.value
            
        })

    }
    deleteTask(id){
        let newArr = this.state.tasks
        let foundElement = newArr.find(task => task.id === id)
        newArr.splice(newArr.indexOf(foundElement), 1)

        this.setState({
            tasks: [...newArr]
        })

    }
    render(){
        return(
            <>
                <input value={this.state.task} onChange={this.handleChange}/>
                <button onClick={this.handleSubmit}>Submit Task</button>
                <TodoList tasks={this.state.tasks} deleteTask={this.deleteTask}/>
            </>
        )
    }
}

ReactDOM.render(<App/>, document.querySelector('#root'))