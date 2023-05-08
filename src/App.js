import React from 'react';
import { BrowserRouter , Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Login from './Components/Login';
import MenuList from './Components/MenuList';
import Navigation from './Components/Navigation';
import AddMenu from './Components/AddItem/AddMenu';
import UpdateMenu from './Components/UpdateItem/UpdateMenu';
import UpdateCategory from './Components/UpdateItem/UpdateCategory';
import '..//src/styles.css';
import AddCategory from './Components/AddItem/AddCategory';
import AddDish from './Components/AddItem/AddDish';

function App() {
  return (
    <div>
      <Navigation />
      <h1 className='headline'>Indulge in a flavor adventure at Flavour Frenzy - where taste and passion collide</h1>
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/menulist" element={<MenuList />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path='/navigation' element = {<Navigation />} />
          <Route path='/AddDish' element = {<AddDish/>} />
          <Route path="/AddMenu" element={<AddMenu />} />
          <Route path="/AddCategory" element={<AddCategory />} />
          <Route path="/UpdateMenu" element={<UpdateMenu />} />
          <Route path="/UpdateCategory" element={<UpdateCategory />} />
        </Routes>
        </BrowserRouter>
    </div>
   
  );

  
}

export default App;
