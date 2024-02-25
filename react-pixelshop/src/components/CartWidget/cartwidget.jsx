//import BubbleCarrito from "../BubbleCarrito/bubblecarrito"
import { useCartContext } from "../Context/cartContext"
import { Link } from "react-router-dom"

const CartWidget = () => {
  const { itemsTotal } = useCartContext()
  const { clearCart } = useCartContext()
    return (
        <>
            <div className="link-secondary textdecorationnone">
                {itemsTotal}
                <input type="button" value='Limpiar carro' onClick={clearCart} />
                <Link to={`/cart`}>
                    <i className="bi bi-basket-fill" style={{ margin: '0 10px' }}></i>
                </Link>
            </div >
        </>
    )
}

export default CartWidget