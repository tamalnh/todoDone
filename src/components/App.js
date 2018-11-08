import React, { Component } from 'react';  

// containers
import InputForm from '../containers/todo_form';
import TodoTask from '../containers/todo_task'

class App extends Component {
  render() {
    return (
      <div className="App">
          <InputForm />
          <TodoTask />
      </div>
    );
  }
}

export default App;
