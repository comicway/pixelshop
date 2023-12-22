import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './components/asset/style.css';
import NavBar from './components/NavBar/navbar';
import HeaderPixel from './components/Header/header';
import ItemListContainer from './components/ItemListContainer/itemlistcontainer';

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
            <div className='col-10'>
              <h3>HOla colum</h3>
            </div>
          </div>
          </div>
        </div>
      </>
    )
};

root.render(<App/>);