//import BubbleCarrito from "../BubbleCarrito/bubblecarrito"
import { useCartContext } from "../Context/cartContext"

const CartWidget = () => {
  const { itemsTotal } = useCartContext()
  const { clearCart } = useCartContext()
    return (
        <a className="link-secondary textdecorationnone" href="#" aria-label="Cart">
            {itemsTotal}
            <input type="button" value='Limpiar carro' onClick={clearCart} />
            <i className="bi bi-basket-fill" style={{ margin: '0 10px' }}></i>
        </a>
    )
}

export default CartWidget