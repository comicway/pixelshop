import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './components/asset/style.css';
import NavBar from './components/NavBar/navbar';
import HeaderPixel from './components/Header/header';
import ItemListContainer from './components/ItemListContainer/itemlistcontainer';
import ImgProduct from "./components/asset/manga-aku-no-hana-tomo-02-1.webp"

const rootDivElement = document.getElementById('root');

const root = ReactDOM.createRoot(rootDivElement);

function App(){
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
                  <div class="p-2"><h4>Mangas</h4></div>
                  <div class="p-2"><i class="bi bi-plus-circle-fill"></i></div>
                </div>
                <h4>Generos</h4>
                <h4>Editoriales</h4>
            </div>
            <div className='col-10'>
                <div className='row row-margin'>
                  <div className='col-4 padding-card'>
                      <div className=''>
                      <img src={ImgProduct} width="418" height="586" alt="manga imagen de prioducto" />
                        <div className='card-body bodycard-grilla'>
                          <spam className='card-text'>Aku No Hana 01</spam>
                          <div>
                          <spam>$9.990</spam>
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
                          <spam className='card-text'>Aku No Hana 01</spam>
                          <div>
                          <spam>$9.990</spam>
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
                          <spam className='card-text'>Aku No Hana 01</spam>
                          <div>
                          <spam>$9.990</spam>
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
                          <spam className='card-text'>Aku No Hana 01</spam>
                          <div>
                          <spam>$9.990</spam>
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
                          <spam className='card-text'>Aku No Hana 01</spam>
                          <div>
                          <spam>$9.990</spam>
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
                          <spam className='card-text'>Aku No Hana 01</spam>
                          <div>
                          <spam>$9.990</spam>
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
                          <spam className='card-text'>Aku No Hana 01</spam>
                          <div>
                          <spam>$9.990</spam>
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
                          <spam className='card-text'>Aku No Hana 01</spam>
                          <div>
                          <spam>$9.990</spam>
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
                          <spam className='card-text'>Aku No Hana 01</spam>
                          <div>
                          <spam>$9.990</spam>
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
                          <spam className='card-text'>Aku No Hana 01</spam>
                          <div>
                          <spam>$9.990</spam>
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
                          <spam className='card-text'>Aku No Hana 01</spam>
                          <div>
                          <spam>$9.990</spam>
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
                          <spam className='card-text'>Aku No Hana 01</spam>
                          <div>
                          <spam>$9.990</spam>
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
};

root.render(<App/>);