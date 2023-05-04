import React, { Component } from 'react'
import Home from './views/Home';
import TodoPage from './views/TodoPage';
import ResponsiveAppBar from './components/Appbar';
import { Routes, Route } from 'react-router-dom';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      user:{
        username:'Tyler'
      }
    }
  }

  render() {
    return (
      <div>
      <ResponsiveAppBar user={this.state.user} />
      <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/todo' element={<TodoPage />}/>
      </Routes>
      </div>
    )
  }
}

