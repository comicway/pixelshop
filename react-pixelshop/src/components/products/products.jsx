import { Component } from "react";
import Product from "./product";

class Products extends Component {
    render () {
        const { id, products, agregarAlCarro, filterCategory} = this.props

        const filteredProducts = products.filter((products) => {
            return filterCategory === 'all' || products.category === filterCategory;
          });
        
        return (
            <div className="row row-margin">
                {filteredProducts.map((product) => (
                    <Product
                        id={product.id}
                        agregarAlCarro={agregarAlCarro}
                        key={product.name}
                        product={product}
                    />
                ))}
            </div>
        )
    }
}

export default Products