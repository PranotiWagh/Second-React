// App.jsx
import React from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from './Home'
import About from './About'
import Contact from './Contact'
import NotFound from './NotFound'



const App = () => {
    return (
        <>

       <BrowserRouter>
       <Route>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='*' element={<NotFound/>}></Route>

       </Route>
       <ul>
        <li>
            <link to='/'>home</link>
        </li>
        <li>
            <link to='/about'>abount</link>
        </li>
        <li>
            <link to='/contact'>Contact</link>
        </li>
        <li>
            <link to='/users'>users</link>
        </li>
       </ul>
       </BrowserRouter>
       </>     
    );
};

export default App;
