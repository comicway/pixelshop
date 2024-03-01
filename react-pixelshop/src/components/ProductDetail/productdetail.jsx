import Spinner from "../Spinner/spinner"
import ItemCount from "../ItemCount/itemcount"
import { useCartContext } from "../Context/cartContext"

const ProductDetail = ({ item }) => {

    if (!item) {
        return <Spinner />
      }

  const { name, img, price, category, stock } = item
  const { addItem, isVisible } = useCartContext()

  const onAdd = (count) => {
    addItem(item, count)
  }
  
    return (
        <div className='col-4 padding-card'>
            <div className=''>
                    <img width="418" height="586" alt={name} src={img} />
                <div className='card-body bodycard-grilla'>
                        <span className='card-text'>{name}</span>
                    <div>
                        <span>{price}</span>
                    </div>
                    <div className='d-flex justify-content-between align-items-center'>
                        <small className='text-body-secondary'>{category}</small>
                    </div>
                    <div className='d-flex justify-content-between align-items-center'>
                        <small className='text-body-secondary'>{stock} disponibles</small>
                    </div>
                    <div style={{display: isVisible == false && 'none' }}>
                        <ItemCount onAdd={onAdd}/>
                    </div>
                </div>
            </div>
        </div>
    )
}
  
export default ProductDetail