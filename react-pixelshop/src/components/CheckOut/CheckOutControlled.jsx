import { useState } from "react"

const CheckOutControlled = () => {
    const [value, setValue] = useState('')
    
    const handleChange = (e) => {
        setValue(e.target.value)
    }

    console.log(value)

    return (
        <div>
            {value.length < 5 ? <span> longitud minima de 5</span> : null}
            <input type="text" name="normal" value={value} onChange={handleChange} />
        </div>
    )
    
}

export default CheckOutControlled

