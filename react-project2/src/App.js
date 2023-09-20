import './App.css';
import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Homepage, MoreGenre, Main, Tournament, Winner } from './pages'

class App extends Component {
  homeMenu = [
    {url: '/home', name: 'Homepage'},
    {url: '/more', name: 'MoreGenre'},
  ]

  state = {
    open: false
  }


  render(){
    return (
      <div className="App">
        <Routes>
          <Route exact path='/' element={<Main/>}/>
          <Route exact path='/tournament' element={<Tournament/>}/>
          <Route exact path='/result' element={<Winner/>}/>
          <Route exact path='/home' element={<Homepage/>}></Route>
          <Route exact path='/more' element={<MoreGenre/>}>
          </Route>
        </Routes>
      </div>
    );

  }
}

export default App;
