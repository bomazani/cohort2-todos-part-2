import React, { Component } from 'react';
import './App.css';
import todoList from './todos.json';


const TodoItem = (props) => {
  return (
    <div>
        {/* // replaced this code  */}
        {/* <li className="">
            <div className="view">
                <input className="toggle" type="checkbox" />
                    <label>{props.title}</label>
                    <button className="destroy"></button>
            </div>
        </li> */}
        {/* // with this code  */}
        <li className={props.todo.completed ? "completed" : ""}>
            <div className="view">
                <input className="toggle"  onChange={props.todoToggleClick(props.todo.id)} type="checkbox" checked={props.todo.completed}/>
                    <label>{props.todo.title}</label>
                    <button className="destroy" onClick={props.todoDestroy(props.todo.id)}></button>
            </div>
        </li>

    </div>
  )     
}


class TodoLists extends Component {
  render(){
    return (
      <div>
        <ul className="todo-list">
          {/* // replaced this code  */}
          {/* {this.props.todos.map( todo => <li><TodoItem title={todo.title}  /></li> )} */}
          {/* // with this code  */}
          {this.props.todos.map( todo => <TodoItem key={todo.id} todo={todo} todoDestroy={this.props.todoDestroy} todoToggleClick={this.props.todoToggleClick}/> )}

        </ul>
      </div>
      );
  }
}
  
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      todos: todoList,
      // added input to state
      input: "", }
  }

  // added todoToggleClick
  todoToggleClick = (id) => (event) => {
    this.setState({
      todos: this.state.todos.map(
        todo => todo.id === id ? {
          ...todo, 
          completed: !todo.completed 
        } : { 
          ...todo
        }
      )
    })
  }

  // added todoDestroy
  todoDestroy = (id) => (event) => {
    this.setState({
      todos: this.state.todos.filter(
        todo => todo.id !== id 
      )
    })
    console.log("todoDestroy button was clicked")
    console.log(this.state.todos)
  }

  // added clearCompleted
  clearCompleted = (onClick) => {
    this.setState({
      todos: this.state.todos.filter(
        todo => todo.completed !== true 
      )
    })
    console.log("clearCompleted button was clicked")
    console.log(this.state.todos)
  }

  // added handleChange
  handleChange = (event) => {
    this.setState({ input: event.target.value });
  }

  // added handleSubmit
  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      todos: [...this.state.todos, 
        {
        title: this.state.input,
        id: this.state.todos[this.state.todos.length-1].id+1,
        completed: false
        },
      ],
      input: ""
    });
    console.log(this.state.todos);
  }


  render() {
    console.log(todoList)
    
    console.log(this.state.todos)
    return (

      <section className="todoapp">
        <header className="header">
          <h1>todos</h1>
          {/* // replaced this code  */}
          {/* <input className="new-todo" placeholder="What needs to be done?" autoFocus /> */}
          {/* // with this code */}
          <form onSubmit={this.handleSubmit}>
            <input value={this.state.input} onChange={this.handleChange} className="new-todo" placeholder="What needs to be done?" autoFocus />
          </form>

        </header>


        <section className="main">
          {/* // replaced this code  */}
          {/* <TodoLists todos={this.state.todos} /> */}
          {/* // with this code  */}
          <TodoLists todoDestroy={this.todoDestroy} todoToggleClick={this.todoToggleClick} todos={this.state.todos} />

        </section>

        <footer className="footer">
          {/* // replaced this code  */}
          {/* <span className="todo-count"><strong>0</strong> item(s) left</span> */}
          {/* // with this code  */}
          <span className="todo-count"><strong>{this.state.todos.length}</strong> item(s) total</span>
          <span className="space"><strong> </strong></span>
          <span className="total-count"><strong>{this.state.todos.length}</strong> item(s) left</span>

          {/* // replaced this code  */}
          {/* <button className="clear-completed">Clear completed</button> */}
          {/* // with this code  */}
          <button className="clear-completed" onClick={this.clearCompleted} >
            Clear completed
          </button>

        </footer>
      </section>
  
    );
  }
}
 

export default App;
