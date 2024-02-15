// copia de poducts
import PropTypes from 'prop-types'
import Item from '../Item/item'

const ItemList = ({itemList}) => {
    return (
        <div className="row row-margin">
            {itemList.map(({id, name, price, img, editorial, category }) => {
                return <Item key={id} id={id} name={name} price={price} img={img} editorial={editorial} category={category}/>
            })}
        </div>
    )
}

ItemList.propTypes = {
    itemList: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,
        name: PropTypes.string,
        price: PropTypes.number,
        img: PropTypes.string,
        editorial: PropTypes.string,
        category: PropTypes.string,
      })
    ),
  }
  
  export default ItemList