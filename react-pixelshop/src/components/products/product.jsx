import { Component } from "react";
import ButtonAgregar from "/src/components/ButtonAgregar/buttonagregar.jsx";
import { Link } from "react-router-dom";
 
class Product extends Component {
    render () {
        const { id, product, agregarAlCarro} = this.props
        return (
            
                  <div className='col-4 padding-card'>
                      <div className=''>
                        <Link to={`/product/${id}`}>
                          <img width="418" height="586" alt={product.name} src={product.img} />
                        </Link>
                        <div className='card-body bodycard-grilla'>
                          <Link to={`/product/${id}`}>
                            <span className='card-text'>{product.name}</span>
                          </Link>
                          <div>
                          <span>{product.price}</span>
                          </div>
                          <div className='d-flex justify-content-between align-items-center'>
                            <small className='text-body-secondary'>{product.editorial}</small>
                              <div className='btn-group'>
                                <ButtonAgregar onClick={() => agregarAlCarro(product)} />
                              </div>
                          </div>
                        </div>
                      </div>
                  </div>
            
        )
    }
}

export default Product