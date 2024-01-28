import { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '/public/asset/css/style.css'
import HeaderPixel from './components/Header/header';
import ItemListContainer from './components/ItemListContainer/itemlistcontainer';
import Home from './components/Home/home';
import PageNotFound from './components/PageNotFound/pagenotfound';
import ProductDetailContainer from './components/ProductDetailContainer/productdetailcontainer';

const rootDivElement = document.getElementById('root');

const root = ReactDOM.createRoot(rootDivElement);

class App extends Component {
  render(){
    return (
      <BrowserRouter>
        <div className="container">
            <HeaderPixel/>
        </div>
          <div className='container-fluid'>
            <div className='row'>
                <div className='col-2'>
                  <div className="d-flex flex-row mb-2">
                    <div className="p-2"><h4>Mangas</h4></div>
                    <div className="p-2"><i className="bi bi-plus-circle-fill"></i></div>
                  </div>
                  <h4>Generos</h4>
                  <h4>Editoriales</h4>
              </div>
              <div className='col-10'>
                <Routes>
                  <Route path='/' element={<Home />} />
                  <Route path='/shop' element={<ItemListContainer/>} />
                  <Route path='/shop/:filterCategory' element={<ItemListContainer/>} />
                  <Route path='/product/:id' element={<ProductDetailContainer/>} />
                  <Route path='*' element={<PageNotFound/>} />
                </Routes>
              </div>
            </div>
          </div>
      </BrowserRouter>
    )
  }
};

//export default App;
root.render(<App/>);