import React from 'react'

const CartItemCheckOut = ({item}) => {

    const { item: { name }, quantity } = item
    const total = item.item.price * quantity
    
    return (
        <li className="list-group-item d-flex justify-content-between lh-sm">
            <div>
                <h6 className="my-0">{name}</h6>
                <small className="text-body-secondary">x {quantity}</small>
            </div>
            <span className="text-body-secondary">${total}</span>
        </li>
    )        
}

export default CartItemCheckOut