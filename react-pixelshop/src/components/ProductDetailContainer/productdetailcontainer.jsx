import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ProductDetail from "../ProductDetail/productdetail"
import { getProductById } from '../Utils/mockdata'
import Spinner from "../Spinner/spinner"

const ProductDetailContainer = () => {
    const [ loading, setLoading ] = useState(true)
    const [ item, setItem ] = useState()
    const { productId } = useParams()


    useEffect(() => {
        getProductById(productId).then((product) => {
            setItem(product);
            setLoading(false);  
    })
}, [productId])

return (
    <>
      {loading ? <Spinner /> : <ProductDetail item={item} />}
    </>
  );

}

export default ProductDetailContainer