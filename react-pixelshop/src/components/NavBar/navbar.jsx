import { Component } from "react";
import {Link, NavLink} from 'react-router-dom';

class NavBar extends Component {
    handleFilterChange = (category) => {
        this.props.handleFilterChange(category);
      };
    render(){
        return(
            <div className="nav-scroller py-1 mb-3 border-bottom">
                <nav className="nav nav-underline justify-content-center">
                    <NavLink className="nav-item nav-link link-body-emphasis margin-menu" to='/shop' onClick={() => this.handleFilterChange('all')}>Tienda</NavLink>
                    <NavLink className="nav-item nav-link link-body-emphasis margin-menu" to='/shop/Manga' onClick={() => this.handleFilterChange('Manga')}>Manga</NavLink>
                    <NavLink className="nav-item nav-link link-body-emphasis margin-menu" to='/shop/Comic' onClick={() => this.handleFilterChange('Comic')}>Comic</NavLink>
                    <a className="nav-item nav-link link-body-emphasis margin-menu" href="#">Mi cuenta</a>
                    <a className="nav-item nav-link link-body-emphasis margin-menu" href="#">Contacto</a>
                </nav>
            </div>
        )
    }
}

export default NavBar