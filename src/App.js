import React, { Component } from 'react';
import './App.css';
import todoList from './todos.json';


const TodoItem = (props) => {
  return (
    <div>
        <li className="">
            <div className="view">
                <input className="toggle" type="checkbox" />
                    <label>{props.title}</label>
                    <button className="destroy"></button>
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
          {this.props.todos.map( todo => <li><TodoItem title={todo.title}  /></li> )}
        </ul>
      </div>
      );
  }
}
  
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { todos: todoList }
  }

  render() {
    console.log(todoList)
    
    console.log(this.state.todos)
    return (

      <section className="todoapp">
        <header className="header">
          <h1>todos</h1>
          <input className="new-todo" placeholder="What needs to be done?" autoFocus />
        </header>

        <section className="main">
        <TodoLists todos={this.state.todos} />
        </section>

        <footer className="footer">

          <span className="todo-count"><strong>0</strong> item(s) left</span>

          <button className="clear-completed">Clear completed</button>
        </footer>
      </section>
  
    );
  }
}
 

export default App;
