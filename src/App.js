import React, { Component,Fragment } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import {connect} from 'react-redux';
import { GlobalStyle } from './style';
import Header from './common/header';
import Home from './pages/home';
import Detail from './pages/detail'
class App extends Component {
   
  constructor(props){
    super(props)
    this.state = {
    }
  }

  render() {
    return (
      <Fragment>
        <Router> 
          <GlobalStyle />
          <Header/>
          <Route exact path="/" component= { Home } />
          <Route exact path="/detail" component= { Detail } />
        </Router> 
      </Fragment>
    );
  }
}

const mapStateToProps = (state)=>{
  return{
    data: state.todos.list
  }
}
export default connect(mapStateToProps,null)(App);
