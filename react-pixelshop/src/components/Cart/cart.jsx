import React from 'react'
import { useCartContext } from "../Context/cartContext"
import CartItemDetail from '../CartItemDetail/cartitemdetail'


const Cart = () => {
    const { cart } = useCartContext()

    const cartItemsElements = cart.map(item => (
        <CartItemDetail key={item.id} item={item} />
    ))

  return (
      <>
          <div className='container'>
              <div className="row g-5">
                  <div className="col-md-5 col-lg-4 order-md-last">
                      <h4 className="d-flex justify-content-between align-items-center mb-3">
                          <span className="text-primary">Total del carrito</span>
                          <span className="badge bg-primary rounded-pill">3</span>
                      </h4>
                      <ul className="list-group mb-3">
                          <li className="list-group-item d-flex justify-content-between lh-sm">
                              <div>
                                  <h6 className="my-0">Nombre del producto</h6>
                                  <small className="text-body-secondary">Brief description</small>
                              </div>
                              <span className="text-body-secondary">$12</span>
                          </li>
                          <li className="list-group-item d-flex justify-content-between bg-body-tertiary">
                              <div className="text-success">
                                  <h6 className="my-0">Promo code</h6>
                                  <small>EXAMPLECODE</small>
                              </div>
                              <span className="text-success">$5</span>
                          </li>
                          <li className="list-group-item d-flex justify-content-between">
                              <span>Total (USD)</span>
                              <strong>$20</strong>
                          </li>
                      </ul>
                  </div>
                  <div className="col-md-7 col-lg-8">
                      <ul className="list-group mb-3">
                        <li className="list-group-ite d-flex justify-content-between lh-sm">
                            <h4 className="">
                                <span className="text-primary">Tu carrito</span>
                            </h4>
                            <span className="panddingColumnCant">Cantidad</span>
                            <span>Total</span>
                        </li>
                      </ul>
                      <ul className="list-group mb-3">
                          {cartItemsElements}
                          <li className="list-group-ite borderCartItem d-flex justify-content-between">
                              <span>Total (USD)</span>
                              <strong>$20</strong>
                          </li>
                      </ul>
                  </div>
              </div>
          </div>
      </>
  )
}

export default Cart
