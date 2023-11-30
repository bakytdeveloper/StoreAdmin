//
//
// // components/ProductsList.js
// import React from 'react';
// import ProductCard from './../ProductCard/ProductCard';
// import "./ProductsList.css";
//
// const ProductsList = ({ products }) => {
//     return (
//         <div className="products-list">
//             {products.map((product) => (
//                 <ProductCard key={product._id} product={product} />
//             ))}
//         </div>
//     );
// };
//
// export default ProductsList;
//
//
//
//
//
//






// client/src/components/ProductsList/ProductsList.js
import React from 'react';
import ProductCard from '../ProductCard/ProductCard';
import './ProductsList.css';

const ProductsList = ({ products, openModal }) => {
    return (
        <div className="products-list">
            {products.map((product) => (
                <ProductCard key={product._id} product={product} openModal={openModal} />
            ))}
        </div>
    );
};

export default ProductsList;
