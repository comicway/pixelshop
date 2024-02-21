import { useState } from "react"

const ItemCount = () => {
    const [count, setCount] = useState(1)

    const onClickHandler = () => {
        console.log('Comprar')
        console.log(count)
    }

    const onChangeHandler = (e) => { 
        setCount(e.target.value)
    }
    
    return (
        <>
            <div>
                <input type="button" value='-' />
                <input type="number" value={count} onChange={onChangeHandler} />
                <input type="button" value='+' />
            </div>
            <div className='btn-group'>
                <input type="button" value='Agregar al carro' onClick={onClickHandler} />
            </div>
        </>
    )
}

export default ItemCount 

