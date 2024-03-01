import React from 'react'

const CartItemDetail = ({item}) => {

    const { item: { name, img }, quantity } = item
    const total = item.item.price * quantity
    
    return (
        <li className="list-group-ite borderCartItem d-flex justify-content-between lh-sm">
            <img src={img} alt={name} className='imgCartItem' />
            <h6 className="my-0">{name}</h6>
            <span className="text-body-secondary">{quantity}</span>
            <span className="text-body-secondary">${total}</span>
        </li>
    )        
}

export default CartItemDetail
