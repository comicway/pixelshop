import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import NavBar from './components/NavBar/navbar';
import HeaderPixel from './components/Header/header';
import ItemListContainer from './components/ItemListContainer/itemlistcontainer';

const rootDivElement = document.getElementById('root');

const root = ReactDOM.createRoot(rootDivElement);

function App(){
    return (
        <div class="container">
          <HeaderPixel/>
          <NavBar/>
          <ItemListContainer saludo= {'Hola Mundo'} despedida= {'Chao Mundo'}/>
        </div>
    )
};

root.render(<App/>);