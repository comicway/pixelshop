import { Component } from "react";

class Product extends Component {
    render () {
        const {product} = this.props
        return (
            <div>
                  <div className='col-4 padding-card'>
                      <div className=''>
                      <img width="418" height="586" alt={product.name} src={product.img} />
                        <div className='card-body bodycard-grilla'>
                          <span className='card-text'>{product.name}</span>
                          <div>
                          <span>{product.price}</span>
                          </div>
                          <div className='d-flex justify-content-between align-items-center'>
                            <small className='text-body-secondary'>{product.editorial}</small>
                              <div className='btn-group'>
                                <button type="button" className='btn btn-cart'>Añadir al carrito</button>
                              </div>
                          </div>
                        </div>
                      </div>
                  </div>
            </div>
        )
    }
}

export default Product