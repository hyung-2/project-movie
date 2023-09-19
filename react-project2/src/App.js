import './App.css';
import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Homepage, MoreGenre } from './pages'

<<<<<<< HEAD
import { Route, Routes } from 'react-router-dom';
import { Main, Tournament, Winner } from './pages'

function App() {
  return (
    <div className="App">
      {/* <Tournament></Tournament> */}
      <Routes>
        <Route exact path='/' element={<Main/>}/>
        <Route exact path='/tournament' element={<Tournament/>}/>
        <Route exact path='/result' element={<Winner/>}/>
      </Routes>
    </div>
  );
=======
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
>>>>>>> 611e3f2bb4f68412cb4883a13ccba68c82ee900a
}

export default App;
