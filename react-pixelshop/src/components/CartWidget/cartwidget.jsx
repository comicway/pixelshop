import { Component } from "react";
import BubbleCarrito from "../BubbleCarrito/bubblecarrito";

class CartWidget extends Component {
  render () {
    return (
      <a className="link-secondary textdecorationnone" href="#" aria-label="Cart">
          <BubbleCarrito value={10}/>
          <i className="bi bi-basket-fill" style={{ margin: '0 10px' }}></i>
        </a>
    )
  }
    
}

export default CartWidget