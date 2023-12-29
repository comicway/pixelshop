import { Component } from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './components/asset/style.css';
import NavBar from './components/NavBar/navbar';
import HeaderPixel from './components/Header/header';
import ItemListContainer from './components/ItemListContainer/itemlistcontainer';
import ImgProduct from "./components/asset/manga-aku-no-hana-tomo-02-1.webp"
import Products from './components/products/products';

const rootDivElement = document.getElementById('root');

const root = ReactDOM.createRoot(rootDivElement);

class App extends Component {
  state = {
    products: [
      {
        name:'Aku no hana 01',
        price: 9990,
        img:'./components/asset/manga-aku-no-hana-tomo-02-1.webp',
        editorial: 'IVREA', 
      },
      {
        name:'La Broma Asesina',
        price: 24990,
        img:'./components/asset/manga-aku-no-hana-tomo-02-1.webp',
        editorial: 'OVNI PRESS', 
      },
      {
        name:'Golden Kamuy 01',
        price: 12890,
        img:'./components/asset/manga-aku-no-hana-tomo-02-1.webp',
        editorial: 'PANINI', 
      }
    ]
  };
  render(){
    return (
      <>
        <div className="container">
            <HeaderPixel/>
            <NavBar/>
            <ItemListContainer saludo= {'Hola Mundo'} despedida= {'Chao Mundo'}/>
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
                <Products
                  agregarAlCarro = { () => console.log('por ahora no hace nada')}
                  products = {this.state.products}
                />
                <div className='row row-margin'>
                  <div className='col-4 padding-card'>
                      <div className=''>
                      <img src={ImgProduct} width="418" height="586" alt="manga imagen de prioducto" />
                        <div className='card-body bodycard-grilla'>
                          <span className='card-text'>Aku No Hana 01</span>
                          <div>
                          <span>$9.990</span>
                          </div>
                          <div className='d-flex justify-content-between align-items-center'>
                            <small className='text-body-secondary'>IVREA</small>
                              <div className='btn-group'>
                                <button type="button" className='btn btn-cart'>Añadir al carrito</button>
                              </div>
                          </div>
                        </div>
                      </div>
                  </div>
                  <div className='col-4 padding-card'>
                      <div className=''>
                      <img src={ImgProduct} width="418" height="586" alt="manga imagen de prioducto" />
                        <div className='card-body bodycard-grilla'>
                          <span className='card-text'>Aku No Hana 01</span>
                          <div>
                          <span>$9.990</span>
                          </div>
                          <div className='d-flex justify-content-between align-items-center'>
                            <small className='text-body-secondary'>IVREA</small>
                              <div className='btn-group'>
                                <button type="button" className='btn btn-cart'>Añadir al carrito</button>
                              </div>
                          </div>
                        </div>
                      </div>
                  </div>
                  <div className='col-4 padding-card'>
                      <div className=''>
                      <img src={ImgProduct} width="418" height="586" alt="manga imagen de prioducto" />
                        <div className='card-body bodycard-grilla'>
                          <span className='card-text'>Aku No Hana 01</span>
                          <div>
                          <span>$9.990</span>
                          </div>
                          <div className='d-flex justify-content-between align-items-center'>
                            <small className='text-body-secondary'>IVREA</small>
                              <div className='btn-group'>
                                <button type="button" className='btn btn-cart'>Añadir al carrito</button>
                              </div>
                          </div>
                        </div>
                      </div>
                  </div>
                </div>
                <div className='row row-margin'>
                  <div className='col-4 padding-card'>
                      <div className=''>
                      <img src={ImgProduct} width="418" height="586" alt="manga imagen de prioducto" />
                        <div className='card-body bodycard-grilla'>
                          <span className='card-text'>Aku No Hana 01</span>
                          <div>
                          <span>$9.990</span>
                          </div>
                          <div className='d-flex justify-content-between align-items-center'>
                            <small className='text-body-secondary'>IVREA</small>
                              <div className='btn-group'>
                                <button type="button" className='btn btn-cart'>Añadir al carrito</button>
                              </div>
                          </div>
                        </div>
                      </div>
                  </div>
                  <div className='col-4 padding-card'>
                      <div className=''>
                      <img src={ImgProduct} width="418" height="586" alt="manga imagen de prioducto" />
                        <div className='card-body bodycard-grilla'>
                          <span className='card-text'>Aku No Hana 01</span>
                          <div>
                          <span>$9.990</span>
                          </div>
                          <div className='d-flex justify-content-between align-items-center'>
                            <small className='text-body-secondary'>IVREA</small>
                              <div className='btn-group'>
                                <button type="button" className='btn btn-cart'>Añadir al carrito</button>
                              </div>
                          </div>
                        </div>
                      </div>
                  </div>
                  <div className='col-4 padding-card'>
                      <div className=''>
                      <img src={ImgProduct} width="418" height="586" alt="manga imagen de prioducto" />
                        <div className='card-body bodycard-grilla'>
                          <span className='card-text'>Aku No Hana 01</span>
                          <div>
                          <span>$9.990</span>
                          </div>
                          <div className='d-flex justify-content-between align-items-center'>
                            <small className='text-body-secondary'>IVREA</small>
                              <div className='btn-group'>
                                <button type="button" className='btn btn-cart'>Añadir al carrito</button>
                              </div>
                          </div>
                        </div>
                      </div>
                  </div>
                </div>
                <div className='row row-margin'>
                  <div className='col-4 padding-card'>
                      <div className=''>
                      <img src={ImgProduct} width="418" height="586" alt="manga imagen de prioducto" />
                        <div className='card-body bodycard-grilla'>
                          <span className='card-text'>Aku No Hana 01</span>
                          <div>
                          <span>$9.990</span>
                          </div>
                          <div className='d-flex justify-content-between align-items-center'>
                            <small className='text-body-secondary'>IVREA</small>
                              <div className='btn-group'>
                                <button type="button" className='btn btn-cart'>Añadir al carrito</button>
                              </div>
                          </div>
                        </div>
                      </div>
                  </div>
                  <div className='col-4 padding-card'>
                      <div className=''>
                      <img src={ImgProduct} width="418" height="586" alt="manga imagen de prioducto" />
                        <div className='card-body bodycard-grilla'>
                          <span className='card-text'>Aku No Hana 01</span>
                          <div>
                          <span>$9.990</span>
                          </div>
                          <div className='d-flex justify-content-between align-items-center'>
                            <small className='text-body-secondary'>IVREA</small>
                              <div className='btn-group'>
                                <button type="button" className='btn btn-cart'>Añadir al carrito</button>
                              </div>
                          </div>
                        </div>
                      </div>
                  </div>
                  <div className='col-4 padding-card'>
                      <div className=''>
                      <img src={ImgProduct} width="418" height="586" alt="manga imagen de prioducto" />
                        <div className='card-body bodycard-grilla'>
                          <span className='card-text'>Aku No Hana 01</span>
                          <div>
                          <span>$9.990</span>
                          </div>
                          <div className='d-flex justify-content-between align-items-center'>
                            <small className='text-body-secondary'>IVREA</small>
                              <div className='btn-group'>
                                <button type="button" className='btn btn-cart'>Añadir al carrito</button>
                              </div>
                          </div>
                        </div>
                      </div>
                  </div>
                </div>
                <div className='row row-margin'>
                  <div className='col-4 padding-card'>
                      <div className=''>
                      <img src={ImgProduct} width="418" height="586" alt="manga imagen de prioducto" />
                        <div className='card-body bodycard-grilla'>
                          <span className='card-text'>Aku No Hana 01</span>
                          <div>
                          <span>$9.990</span>
                          </div>
                          <div className='d-flex justify-content-between align-items-center'>
                            <small className='text-body-secondary'>IVREA</small>
                              <div className='btn-group'>
                                <button type="button" className='btn btn-cart'>Añadir al carrito</button>
                              </div>
                          </div>
                        </div>
                      </div>
                  </div>
                  <div className='col-4 padding-card'>
                      <div className=''>
                      <img src={ImgProduct} width="418" height="586" alt="manga imagen de prioducto" />
                        <div className='card-body bodycard-grilla'>
                          <span className='card-text'>Aku No Hana 01</span>
                          <div>
                          <span>$9.990</span>
                          </div>
                          <div className='d-flex justify-content-between align-items-center'>
                            <small className='text-body-secondary'>IVREA</small>
                              <div className='btn-group'>
                                <button type="button" className='btn btn-cart'>Añadir al carrito</button>
                              </div>
                          </div>
                        </div>
                      </div>
                  </div>
                  <div className='col-4 padding-card'>
                      <div className=''>
                      <img src={ImgProduct} width="418" height="586" alt="manga imagen de prioducto" />
                        <div className='card-body bodycard-grilla'>
                          <span className='card-text'>Aku No Hana 01</span>
                          <div>
                          <span>$9.990</span>
                          </div>
                          <div className='d-flex justify-content-between align-items-center'>
                            <small className='text-body-secondary'>IVREA</small>
                              <div className='btn-group'>
                                <button type="button" className='btn btn-cart'>Añadir al carrito</button>
                              </div>
                          </div>
                        </div>
                      </div>
                  </div>
                </div>
            </div>
          </div>
          
        </div>
      </>
    )
  }
};

//export default App;
root.render(<App/>);