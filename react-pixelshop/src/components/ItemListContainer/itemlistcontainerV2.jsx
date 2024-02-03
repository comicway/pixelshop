import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { getProducts } from '../Utils/mockdata'
import Spinner from "../Spinner/spinner"
import ItemList from "../ItemList/itemlist"

const ItemListContainer = () => {
    const [ items, setItems] = useState([]);
    const [ loading, setLoading] = useState(true);
    const { categoryId } = useParams();

    useEffect(() => {
        getProducts().then((products) => {
            if(categoryId) {
                const filteredProducts = products.filter (
                    (products) => products.category === categoryId
                )
                setItems(filteredProducts)
                setLoading(false)
            } else {
                setItems(products)
                setLoading(false)
            }
    })
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