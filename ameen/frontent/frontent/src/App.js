
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import Navbar from './navbar/Navbar';
import Shirt from './components/shirt/Shirt';
import Pant from './components/pant/Pant';
import Login from './components/login/Login';
import Create from './components/create/Create';
import Cart from './components/cart/Cart';
import Pro from './components/shirt/Pro';
import Checkout from './components/checkout/Checkout';



function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <br></br>
     
      <Routes>
      <Route path='/s' element={<Shirt/>}></Route>
       <Route path='/p' element={<Pant/>}></Route>
       <Route path='/login' element={<Login/>}></Route>
       <Route path='/create' element={<Create/>}></Route>
       <Route path='/cart' element={<Cart/>}></Route>
       <Route path='/product' element={<Pro/>}></Route>
       <Route path='/checkout' element={<Checkout/>}></Route>


       
   </Routes>
   </BrowserRouter>
    </div>
  );
}

export default App;
