import React, { Component } from 'react';
import {connect} from 'react-redux';
import { addItemTodo } from './actions/index'
import './app.css'
import { Button, Input, List, Typography } from 'antd';

class App extends Component {
   
  constructor(props){
    super(props)
    this.state = {
      inputValue:''
    }
  }
  inputChange(e){
    var value = e.target.value
    this.setState({
      inputValue:value
    })
  }
  render() {
    const {addItemTodo} = this.props
    return (
      <div className="App">
        <div className="inputBox">
          <Input placeholder="todo info" onChange={this.inputChange.bind(this)} style={{marginRight:'20px'}}/>
          <Button type="primary" onClick={()=>addItemTodo(this.state.inputValue)}>Add</Button> 
        </div> 
        <div className="listBox">
          <List
          header={<div>Todo List</div>}
          bordered
          dataSource={this.props.data}
          renderItem={item => (<List.Item><Typography.Text mark>[ITEM]</Typography.Text> {item}</List.Item>)}
        />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state)=>{
  return{
    data: state.todos.list
  }

}
export default connect(mapStateToProps,{addItemTodo})(App);
