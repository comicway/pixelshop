import Spinner from "../Spinner/spinner"
import ItemCount from "../ItemCount/itemcount"

const ProductDetail = ({ item }) => {

    if (!item) {
        return <Spinner />
      }

  const { name, img, price, category } = item
  
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
                    <ItemCount/>
                </div>
            </div>
        </div>
    )
}
  
export default ProductDetail