import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
// import { getProducts } from '../Utils/mockdata'
import Spinner from "../Spinner/spinner"
import ItemList from "../ItemList/itemlist"
import { db } from "../../Firebase/config"
import { collection, query, where, getDocs } from "firebase/firestore"

const ItemListContainer = () => {
    const [ items, setItems] = useState([]);
    const [ loading, setLoading] = useState(true);
    const { categoryId } = useParams();

    useEffect(() => {
        const productsCollection = collection (db, 'products')

        if (categoryId) {
            const queryCollection = query(
                productsCollection,
                where('category', '==', categoryId)
            )
            getDocs(queryCollection).then(({docs}) => {
                const products = docs.map((doc) => ({ id: doc.id, ...doc.data()}))
                setItems(products)
                setLoading(false)
            })
        } else {
            getDocs(productsCollection).then(({docs}) => {
                const products = docs.map((doc) => ({ id: doc.id, ...doc.data()}))
                setItems(products)
                setLoading(false)
            })
        }

    //     getProducts().then((products) => {
    //         if(categoryId) {
    //             const filteredProducts = products.filter (
    //                 (products) => products.category === categoryId
    //             )
    //             setItems(filteredProducts)
    //             setLoading(false)
    //         } else {
    //             setItems(products)
    //             setLoading(false)
    //         }
    // })
}, [categoryId])

return loading ? (
    <Spinner />
) : (
    <>
      <ItemList itemList={items} />
    </>
)
}

ItemListContainer.propTypes = {}

export default ItemListContainer