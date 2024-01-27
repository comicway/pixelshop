import { Component } from "react";
import Product from "./product";

class Products extends Component {
    render () {
        const {products,agregarAlCarro} = this.props

        return (
            <div className='row row-margin'>
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