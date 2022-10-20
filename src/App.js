import './App.css';
import React from 'react';
import {Route, Routes} from 'react-router-dom';
import Home from './pages/Home/Home';
import Favorites from './pages/Favorites/Favorites';
import Details from './pages/Details/Details';
import Page404 from './pages/Page404/Page404';
import './utils/utility-classes.css'

class App extends React.Component{

  render(){
    return(
      <div>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route path='/favorites' element={<Favorites/>}/>
          <Route path="/favorites/:word" element={<Details/>}/>
          <Route path='*' element={<Page404/>} />
        </Routes>
      </div>
    )
  }
}

export default App;
