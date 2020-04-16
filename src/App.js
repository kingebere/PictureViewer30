import React from 'react';

import './App.css';
import NavBar from './Components/NavBar';
import Images from './Images/Images';
import {Provider }from './Context';

import Search1 from './Components/Search1';


function App() {
  return (
      < Provider>

      <React.Fragment>

     <NavBar/>
    
     <Search1/>
     <Images/>
     
   </React.Fragment>
   </Provider>
  );
}


export default App;
