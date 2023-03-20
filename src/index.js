import React, { Component } from "react";
import ReactDOM from "react-dom";
import TodoList from "./TodoList.js"
import './index.css';
class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            tasks: [],
            task: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.deleteTask = this.deleteTask.bind(this)
        this.resubmitTask = this.resubmitTask.bind(this)

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
    resubmitTask(id, task){
        if(task == "") return
        let newArr = this.state.tasks
        let foundElement = newArr.find(task => task.id === id)
        newArr[newArr.indexOf(foundElement)].name = task 

        this.setState({
            tasks: [...newArr]
        })

    }
    render(){
        return(

            <div id="layout">
                <h1>Todo List</h1>
                <div id="box">
                    <input value={this.state.task} onChange={this.handleChange}/>
                    <button onClick={this.handleSubmit}>Submit Task</button>
                    <TodoList tasks={this.state.tasks} deleteTask={this.deleteTask} resubmitTask={this.resubmitTask}/>
                </div>
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.querySelector('#root'))