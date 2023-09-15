import './App.css';
import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Homepage, MoreGenre } from './pages'

class App extends Component {
  homeMenu = [
    {url: '/', name: 'Homepage'},
    {url: '/more', name: 'MoreGenre'},
  ]

  state = {
    open: false
  }


  render(){
    return (
      <div className="App">
        <Routes>
          <Route exact path='/' element={<Homepage/>}></Route>
          <Route exact path='/more' element={<MoreGenre/>}>
            <Route path=':genreId' element={<MoreGenre/>}/>

          </Route>
        </Routes>
      </div>
    );

  }
}

export default App;
