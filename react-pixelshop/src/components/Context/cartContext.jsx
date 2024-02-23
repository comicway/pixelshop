import { createContext, useContext, useState, useEffect } from "react";

const cartContext = createContext()

export const { Provider } = cartContext
export const useCartContext = () => useContext(cartContext)

const CartProvider = ({ children }) => {

    // cargar el estado inicial del carrito y de itemsTotal desde el localStorage
    const [cart, setCart] = useState(() => {
        const localData = localStorage.getItem('cart');
        return localData ? JSON.parse(localData) : [];
    })

    const [itemsTotal, setItemsTotal] = useState(() => {
        const localData = localStorage.getItem('itemsTotal');
        return localData ? JSON.parse(localData) : 0;
    })

    // guardar el carrito y itemsTotal en el localStorage
    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
        localStorage.setItem('itemsTotal', JSON.stringify(itemsTotal));
    }, [cart, itemsTotal]);

    const addItem = (item, quantity) => {
        setItemsTotal (itemsTotal + quantity)
        setCart([...cart, { item, quantity }])
        console.log(item)
    }

    // addItem agrega un item al carrito. Si el item ya está en el carrito, aumenta la cantidad del item. Si el item no está en el carrito, agrega el item al carrito con la quantity especificada.
    // const addItem = (item, quantity) => {
    //     const itemIndex = cart.findIndex((i) => i.item.id === item.id)
    //     if (itemIndex === -1) {
    //         setCart([...cart, { item, quantity }])
    //     } else {
    //         const newCart = [...cart]
    //         newCart[itemIndex].quantity += quantity
    //         setCart(newCart)
    //     }
    // }

    const valorDelContexto = { cart, itemsTotal, addItem }

    return (
        <Provider value={valorDelContexto}>
            {children}
        </Provider>
    )

}

export default CartProvider