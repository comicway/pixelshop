import { createContext, useContext, useState } from "react";

const cartContext = createContext()

export const { Provider } = cartContext 
export const useCartContext = () => useContext(cartContext)

const CartPorvider = ({ children }) => { 
    
    const [cart, setCart] = useState([])
    const [itemsTotal, setItemsTotal] = useState(16)

    const valorDelContexto = {cart, itemsTotal}
    
    return (
        <Provider value={valorDelContexto}>
            {children}
        </Provider>
    )

}

export default CartPorvider