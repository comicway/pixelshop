//copia de product
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
// import ButtonAgregar from "/src/components/ButtonAgregar/buttonagregar.jsx";

const Item = ({id, name, img, editorial, price, category}) => {
    return (
        <div className='col-4 padding-card'>
            <div className=''>
                <Link to={`/product/${id}`}>
                    <img width="418" height="586" alt={name} src={img} />
                </Link>
                <div className='card-body bodycard-grilla'>
                    <Link to={`/product/${id}`}>
                        <span className='card-text'>{name}</span>
                    </Link>
                    <div>
                        <span>{price}</span>
                    </div>
                    <div className='d-flex justify-content-between align-items-center'>
                        <small className='text-body-secondary'>{category}</small>
                            <div className='btn-group'>
                                Agregar al carro
                            </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

Item.propTypes = {
    id: PropTypes.number,
    name: PropTypes.string,
    price: PropTypes.number,
    img: PropTypes.string,
    editorial: PropTypes.string,
    category: PropTypes.string,
  }
  
export default Item