import { Component } from "react";

class Products extends Component {
    render () {
        const {products,agregarAlCarro} = this.props

        return (
            <div>
                {products.map(product =>
                    <Product
                        agregarAlCarro={agregarAlCarro}
                        key={producto.name}
                        product={product}
                    />
                    )}
            </div>
        )
    }
}

export default Products