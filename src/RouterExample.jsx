import React from 'react'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Home from './Home';
import Contact from './Contact';
import Navbar from './Navbar';
import Error from './Error';

const RouterExample = () => {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
     <Route path='/'element={<Home/>}></Route>
     <Route path='/contact'element={<Contact/>}></Route>
     <Route path="*" element={<Error/>}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default RouterExample
