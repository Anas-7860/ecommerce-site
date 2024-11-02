import './App.css';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Shop from './Pages/Shop';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import Category from './Pages/Category';
import LoginSignup from './Pages/LoginSignup';
import Footer from './components/Footer/Footer'
import current_banner from './components/Assets/current_jersey.jpg'
import retro_banner from './components/Assets/retro_jersey.jpg'
import sale_banner from './components/Assets/sale_banner.jpeg'
function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <hr style={{width:'100%'}}></hr>
      <Routes>
        <Route path='/' element = {<Shop/>}/>
        <Route path='/current' element = {<Category banner={current_banner} category="current"/>}/>
        <Route path='/retro' element = {<Category banner={retro_banner} category="retro"/>}/>
        <Route path='/sale' element = {<Category banner={sale_banner} category="sale"/>}/>
        <Route path=':productId' element = {<Product/>}>
        </Route>
        <Route path='/cart' element = {<Cart/>}/>
        <Route path='/login' element = {<LoginSignup/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
