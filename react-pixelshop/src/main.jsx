import { Component } from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '/public/asset/css/style.css'
import HeaderPixel from './components/Header/header';
import ItemListContainer from './components/ItemListContainer/itemlistcontainer';
import Products from './components/products/products';

const rootDivElement = document.getElementById('root');

const root = ReactDOM.createRoot(rootDivElement);

class App extends Component {
  state = {
    products: [
      {
        name:'Aku no hana 01',
        price: 9990,
        img:'/public/asset/img/manga-aku-no-hana-tomo-02-1.webp',
        editorial: 'IVREA', 
      },
      {
        name:'La Broma Asesina',
        price: 24990,
        img:'/public/asset/img/manga-aku-no-hana-tomo-02-1.webp',
        editorial: 'OVNI PRESS', 
      },
      {
        name:'Golden Kamuy 01',
        price: 12890,
        img:'/public/asset/img/manga-golden-kamuy-tomo-01-comic-way-001.jpg',
        editorial: 'PANINI', 
      }
    ]
  };
  render(){
    return (
      <>
        <div className="container">
            <HeaderPixel/>
            {/* <ItemListContainer saludo= {'Hola Mundo'} despedida= {'Chao Mundo'}/> */}
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
            </div>
          </div>
          
        </div>
      </>
    )
  }
};

//export default App;
root.render(<App/>);