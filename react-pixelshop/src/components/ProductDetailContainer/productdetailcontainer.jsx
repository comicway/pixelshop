import { Component, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductDetail from "../ProductDetail/productdetail";

class ProductDetailContainer extends Component {
    render(){
        const { products, agregarAlCarro} = this.props
        const {productId} = useParams()
        
        return (
            <div className="row row-margin">
                    <ProductDetail
                        id={products.id}
                        agregarAlCarro={agregarAlCarro}
                        key={product.name}
                        product={product}
                    />
            </div>
        )
    }
}

export default ProductDetailContainer