import React from 'react'

const CartItemDetail = ({item}) => {
    
    return (
        <div>
            <li className="list-group-ite borderCartItem d-flex justify-content-between lh-sm">
                <img src={item.image} alt={item.name} className='imgCartItem' />
                <h6 className="my-0">{item.name}</h6>
                <span className="text-body-secondary">{item.quantity}</span>
                <span className="text-body-secondary">{item.total}</span>
            </li>
        </div>
    )
            
}

export default CartItemDetail
