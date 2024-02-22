import { useState } from "react"

const ItemCount = ({onAdd}) => {
    const [count, setCount] = useState(1)

    //const onClickHandler = () => {
    //    console.log('Comprar')
    //    console.log(count)
    //}

    const onChangeHandler = (e) => { 
        setCount(Number(e.target.value))
    }
    
    return (
        <>
            <div>
                <input type="button" value='-' onClick={() => (count > 1 && setCount(count - 1))} />
                <input type="number" value={count} onChange={onChangeHandler} />
                <input type="button" value='+' onClick={() => (count < 99 && setCount(count + 1))} />
            </div>
            <div className='btn-group'>
                <input type="button" value='Agregar al carro' onClick={() => onAdd(count)} />
            </div>
        </>
    )
}

export default ItemCount