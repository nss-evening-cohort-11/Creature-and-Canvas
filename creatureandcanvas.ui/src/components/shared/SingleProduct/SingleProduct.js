import React from "react";
import "./SingleProduct.scss";

class SingleProduct extends React.Component {
    render() {
        const {product} = this.props;
        return (
            <>
                <ul>
                    <li>Id: {product.productID} </li>
                    
                </ul>
            </>
        )
    }
}

export default SingleProduct; 
