import React, { Component } from 'react';
import TodoListUL from './TodoList';

class App extends Component {
  state = {
    arr: [],
    inputValue: ''
  }
  handleClick() {
    let arrs = this.state.arr
    arrs.push(this.state.inputValue)
    this.setState({
      arr: arrs,
      inputValue: ''
    })
  }
  handleChange(e) {
    this.setState({
      inputValue: e.target.value
    })
  }
  handleDelete(e) {
    let array = this.state.arr.filter((item, index) => {
      return index !== e
    })
    this.setState({
      arr: array
    })
  }
  render() {
    console.log("父组件更新")
    return (
      <div className="App">
        <div>
          <input ref="demos" type="text" onChange={this.handleChange.bind(this)} value={this.state.inputValue} />  <button onClick={this.handleClick.bind(this)}>提交</button>
        </div>
        <TodoListUL arrlist={this.state.arr} deleteIndex={this.handleDelete.bind(this)} />
      </div>
    );
  }
}

export default App;
