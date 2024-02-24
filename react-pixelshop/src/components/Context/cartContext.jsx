import { createContext, useContext, useState, useEffect } from "react"

const cartContext = createContext()

export const { Provider } = cartContext
export const useCartContext = () => useContext(cartContext)

const CartProvider = ({ children }) => {

    const [isVisible, setIsVisible] = useState(true)

    // cargar el estado inicial del carrito y de itemsTotal desde el localStorage
    const [cart, setCart] = useState(() => {
        const localData = localStorage.getItem('cart')
        return localData ? JSON.parse(localData) : []
    })

    const [itemsTotal, setItemsTotal] = useState(() => {
        const localData = localStorage.getItem('itemsTotal')
        return localData ? JSON.parse(localData) : 0
    })

    const [total, setTotal] = useState(() => {
        const localData = localStorage.getItem('total')
        return localData ? JSON.parse(localData) : 0
    })

    // guardar el carrito y itemsTotal en el localStorage
    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
        localStorage.setItem('itemsTotal', JSON.stringify(itemsTotal));
        localStorage.setItem('total', JSON.stringify(total));
    }, [cart, itemsTotal, total]);

    const addItem = (newItem, quantity) => {
        
        if (quantity > newItem.stock) {
            console.log('No hay stock suficiente')
            return
        } 

        setItemsTotal(itemsTotal + quantity);
        setTotal(total + (newItem.price * quantity));

        const existingItem = cart.find(item => item.item.id === newItem.id);

        if (existingItem) {
            setCart(cart.map(item =>
                item.item.id === newItem.id
                    ? { ...item, quantity: item.quantity + quantity }
                    : item
            ));
        } else {
            setCart([...cart, { item: newItem, quantity }]);
        }

        setItemsTotal(itemsTotal + quantity);

        setIsVisible(false);
        
    }
    console.log(isVisible);
    const clearCart = () => {
        setCart([]);
        setItemsTotal(0);
        setTotal(0);
    }

    const valorDelContexto = { cart, itemsTotal, addItem, clearCart }

    return (
        <Provider value={valorDelContexto}>
            {children}
        </Provider>
    )

}

export default CartProvider