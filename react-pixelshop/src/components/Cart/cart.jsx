import React from 'react'
import { useCartContext } from "../Context/cartContext"
import CartItemDetail from '../CartItemDetail/cartitemdetail'
import { Link } from "react-router-dom"

const Cart = () => {

    const { cart, total, clearCart, itemsTotal } = useCartContext()

    const cartItemsElements = cart.map((item, key) => (
        <CartItemDetail key={`item-list-${key}`} item={item} />
    ))

  return (
      <>
          <div className='container'>
              <div className="row g-5">
                  <div className="col-md-5 col-lg-4 order-md-last">
                      <h4 className="d-flex justify-content-between align-items-center mb-3">
                          <span className="text-primary">Total del carrito</span>
                          <span className="badge bg-primary rounded-pill">{itemsTotal}</span>
                      </h4>
                      <ul className="list-group mb-3">
                          <li className="list-group-item d-flex justify-content-between lh-sm">
                              <div>
                                    <h6 className="my-0">Subtotal: </h6>
                                    <small className="text-body-secondary">Subtotal de los productos</small>
                              </div>
                              <span className="text-body-secondary">${total}</span>
                          </li>
                          <li className="list-group-item d-flex justify-content-between bg-body-tertiary">
                              <div className="text-success">
                                  <h6 className="my-0">Envío</h6>
                                  <small className="text-body-secondary">Los costes de envío se calculan al finalizar la compra.</small>
                              </div>
                              <span className="text-success">$0</span>
                          </li>
                          <li className="list-group-item d-flex justify-content-between">
                              <span>Total:</span>
                              <strong>${total}</strong>
                          </li>
                      </ul>
                      <Link to={`/checkout`}>
                            <input type="button" value='COMPRAR AHORA' />     
                      </Link>
                  </div>
                  <div className="col-md-7 col-lg-8">
                      <ul className="list-group mb-3">
                        <li className="list-group-ite d-flex justify-content-between lh-sm">
                            <h4 className="">
                                <span className="text-primary">Tu carrito</span>
                            </h4>
                            <span className="panddingColumnCant">Cantidad</span>
                            <span>Totales</span>
                        </li>
                      </ul>
                      <ul className="list-group mb-3">
                          {cartItemsElements}
                      </ul>
                      <ul>
                        <li className="list-group-ite borderCartItem d-flex justify-content-between">
                            <span>Subtotal:</span>
                            <strong>${total}</strong>
                        </li>
                      </ul>
                      <input type="button" value='LIMPIAR CARRO' onClick={clearCart} />
                  </div>
              </div>
          </div>
      </>
  )
}

export default Cart
