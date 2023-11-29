// // client/src/components/ProductsList/ProductsList.js
//
// import React from 'react';
// import ProductCard from '../ProductCard/ProductCard';
// import './ProductsList.css';
//
// function ProductsList({ products }) {
//     return (
//         <div className="product-list">
//             {products.map(product => (
//                 <div key={product._id}>
//                     <ProductCard product={product} className="product-card" />
//                 </div>
//             ))}
//         </div>
//     );
// }
//
// export default ProductsList;



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
