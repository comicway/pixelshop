import { Component } from 'react';
import {Link, NavLink} from 'react-router-dom';
import Products from '/src/components/products/products';
import NavBar from '../NavBar/navbar';

class ItemListContainer extends Component { 
    state = {
    products: [
      {
        name:'Aku no hana 01',
        price: 9990,
        img:'/public/asset/img/manga-aku-no-hana-tomo-02-1.webp',
        editorial: 'IVREA',
        category: 'Manga', 
      },
      {
        name:'La Broma Asesina',
        price: 24990,
        img:'/public/asset/img/manga-aku-no-hana-tomo-02-1.webp',
        editorial: 'OVNI PRESS',
        category: 'Comic',  
      },
      {
        name:'Golden Kamuy 01',
        price: 12890,
        img:'/public/asset/img/manga-golden-kamuy-tomo-01-comic-way-001.jpg',
        editorial: 'PANINI',
        category: 'Manga',  
      }
    ],
    carro: [
      /*{
        name:'La Broma Asesina',
        price: 24990,
        img:'/public/asset/img/manga-aku-no-hana-tomo-02-1.webp',
        cantidad: 1, 
      },*/
    ],
    filterCategory: 'all'
  }

  agregarAlCarro = (product) => {
    const { carro } = this.state
    if (carro.find(x => x.name === product.name)){
      const newCarro = carro.map(x => x.name === product.name
        ? ({
          ...x,
          cantidad: x.cantidad + 1
        })
        : x)
        return this.setState({ carro: newCarro})
    }
    return this.setState({
      carro: this.state.carro.concat({
        ...product,
        cantidad: 1,
      })
    })
  }

  handleFilterChange = (category) => {
    this.setState({ filterCategory: category });
  };

    render (){
        // console.log(this.state.carro)
        // <NavLink onClick={() => this.handleFilterChange('Manga')}>Manga</NavLink>
        console.log (this.state.filterCategory)
        return (
            <div>
                <Products 
                    agregarAlCarro = {this.agregarAlCarro}
                    products = {this.state.products}
                    filterCategory = {this.state.filterCategory}
                    handleFilterChange = {this.handleFilterChange}
                />
            </div>
            
        )
    }   
};

export default ItemListContainer