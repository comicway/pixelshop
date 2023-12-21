import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/navbar';
import CartWidget from './components/CartWidget/cartwidget';


const rootDivElement = document.getElementById('root');

const root = ReactDOM.createRoot(rootDivElement);

function App(){
    return (
        <div class="container">
  <header class="border-bottom lh-1 py-3">
    <div class="row flex-nowrap justify-content-between align-items-center">
      <div class="col-4 pt-1">
        <a class="link-secondary" href="#">Subscribe</a>
      </div>
      <div class="col-4 text-center">
        <a class="blog-header-logo text-body-emphasis text-decoration-none" href="#">Comic Way</a>
      </div>
      <div class="col-4 d-flex justify-content-end align-items-center">
        <CartWidget/>
        <a class="btn btn-sm btn-outline-secondary" href="#">Sign up</a>
      </div>
    </div>
  </header>
        <NavBar/>
</div>
    )
};

root.render(<App/>);