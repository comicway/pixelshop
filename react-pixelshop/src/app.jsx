import "../public/asset/css/style.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from "./components/Home/home" 
import ItemListContainer from "./components/ItemListContainer/itemlistcontainerV2"
import HeaderPixel from "./components/Header/header"
import PageNotFound from "./components/PageNotFound/pagenotfound"
import ProductDetailContainer from "./components/ProductDetailContainer/productdetailcontainer"
import CartPorvider from "./components/Context/cartContext"
import Cart from "./components/Cart/cart"
import CheckOut from "./components/CheckOut/checkout"
import ThankyouPage from "./components/ThankyouPage/thankyoupage"
import CheckOutNoControlado from "./components/CheckOut/CheckOutNoCotrolado"

function App(){
    return (
      <CartPorvider>
        <BrowserRouter>
        <div className="container">
            <HeaderPixel/>
        </div>
          <div className='container-fluid'>
            <div className='row'>
                {/* <div className='col-2'>
                  <div className="d-flex flex-row mb-2">
                    <div className="p-2"><h4>Mangas</h4></div>
                    <div className="p-2"><i className="bi bi-plus-circle-fill"></i></div>
                  </div>
                  <h4>Generos</h4>
                  <h4>Editoriales</h4>
                </div>*/}
              <div className='col-12'>
                <Routes>
                  <Route path='/' element={<Home />} />
                  <Route path='/shop' element={<ItemListContainer/>} />
                  <Route path='/shop/:categoryId' element={<ItemListContainer/>} />
                  <Route path='/product/:productId' element={<ProductDetailContainer/>} />
                  <Route path='/cart' element={<Cart/>} />
                  <Route path='/checkout' element={<CheckOut/>} />
                  <Route path='/thankyoupage' element={<ThankyouPage/>} />
                  <Route path='/checkoutnocontrolado' element={<CheckOutNoControlado/>} />
                  <Route path='*' element={<PageNotFound/>} />
                </Routes>
              </div>
            </div>
          </div>
      </BrowserRouter>
    </CartPorvider>
    )
}

export default App