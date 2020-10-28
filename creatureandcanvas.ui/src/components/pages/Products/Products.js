import React from "react";
import "./Products.scss";
import productsData  from "../../../helpers/data/productsData";
import SingleProduct from "../../shared/SingleProduct/SingleProduct";

class Products extends React.Component {

    state = { products: [] };

    componentDidMount() {
        productsData.getAllProducts()
            .then(products => { this.setState({products})});
    }

    render() {
        const {products} = this.state;
        const buildProductsList = products.map((product) => {
            return (<SingleProduct key={product.productID} product={product}/>)
        });

        return (
            <>
            {buildProductsList}
            </>
        );
    }
}

export default Products; 