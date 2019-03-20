/*
 * @Author: mikey.zhaopeng 
 * @Date: 2019-03-19 16:46:23 
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2019-03-19 17:24:59
 */
import React, { Component } from 'react'

class TodoList extends Component {
  constructor(props) {
    console.log(2)
    super(props)
  }
  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log(3)
  //   console.log("旧的",this.props)
  //   console.log("next", nextProps)
  //   console.log("nextState", nextState)
  //   if (nextProps.arrlist.length !== this.props.arrlist.length) {
  //     return true
  //   } else {
  //     return false
  //   }
  // }
  render() {
    console.log(1)
    return (
      <ul>
        {
          this.props.arrlist.map((item, index) => (<li onClick={() => this.props.deleteIndex(index)} key={index}>{item}</li>))
        }
      </ul>
    )
  }
}

export default TodoList