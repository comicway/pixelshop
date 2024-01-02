import { Component } from "react";
import Product from "./product";

class Products extends Component {
    render () {
        const {products,agregarAlCarro} = this.props

        return (
            <div>
                {products.map(product =>
                    <Product
                        agregarAlCarro={agregarAlCarro}
                        key={product.name}
                        product={product}
                    />
                    )}
            </div>
        )
    }
}

export default Products