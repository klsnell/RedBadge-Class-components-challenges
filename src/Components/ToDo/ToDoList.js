import { render } from '@testing-library/react';
import React, { useState } from 'react';
import { Input } from 'reactstrap';



class ToDoList extends React.Component {
    constructor(){
        super()
        this.state = {
            tasks: ['Finish Homework', 'Submit Homework', 'Red Badge Project Planning Document'], filterTasks: []
        }
    }

    componentDidMount(){
        this.toDoFunction()
    }

    toDoFunction = () => {
        let searchterm = document.getElementById("task").ariaValueMax.toLowerCase()
        if (searchterm === '') {
            this.setState({
                filterTasks: this.state.tasks
            })
        } else {
            let filterResult = this.state.tasks.filter(
                (tasks) => {
                    if (tasks.toLowerCase().includes(searchterm)) {
                        return tasks
                    }
                },
                this.setState({
                    filterTasks: filterResult,
                }),
                console.log(this.state.filterTasks)
            )
        }
    }

    render() {
        return (
            <div>
                <Input id="task" onChange={this.toDoFunction} />
                <h3>Tasks:</h3>
                {this.state.filterTasks.map((tasks) => (<p>{tasks}</p>))}
            </div>
        )
    }
}
export default ToDoList;