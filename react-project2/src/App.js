import logo from './logo.svg';
import './App.css';

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
}

export default App;
