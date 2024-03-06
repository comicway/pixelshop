import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ProductDetail from "../ProductDetail/productdetail"
//import { getProductById } from '../Utils/mockdata'
import Spinner from "../Spinner/spinner"
import { db } from "../../Firebase/config"
import { collection, doc, getDoc } from "firebase/firestore"
import { Toaster } from 'react-hot-toast'

const ProductDetailContainer = () => {
    const [ loading, setLoading ] = useState(true)
    const [ item, setItem ] = useState()
    const { productId } = useParams()


    useEffect(() => {
      const productsCollection = collection (db, 'products')
      const refDoc = doc(productsCollection, productId)

      getDoc(refDoc).then((doc) => {
        if (doc.exists()){
          setItem({id: doc.id, ...doc.data()})
        }
        setLoading(false)
      })
      setLoading(false)
        // getProductById(productId).then((product) => {
        //     setItem(product);
        //     setLoading(false);  
}, [productId])

return (
    <>
      {loading ? <Spinner /> : <ProductDetail item={item} />}
      <Toaster />
    </>
  );

}

export default ProductDetailContainer