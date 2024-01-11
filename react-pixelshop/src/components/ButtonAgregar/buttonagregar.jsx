import { Component } from "react";

class ButtonAgregar extends Component {
    render () {
        return (
            <button {...this.props} type="button" className='btn btn-cart'>Añadir al carrito</button>
        )
    }
}

export default ButtonAgregar