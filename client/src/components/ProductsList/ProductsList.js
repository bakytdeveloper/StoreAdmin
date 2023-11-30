
// components/ProductsList.js
import React from 'react';
import ProductCard from './../ProductCard/ProductCard';
import "./ProductsList.css";

const ProductsList = ({ products }) => {
    return (
        <div className="products-list">
            {products.map((product) => (
                <ProductCard key={product._id} product={product} />
            ))}
        </div>
    );
};

export default ProductsList;
