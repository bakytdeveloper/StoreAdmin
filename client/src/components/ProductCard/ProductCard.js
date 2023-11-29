// import React from 'react';
// import './ProductCard.css';
//
// const ProductCard = ({ product }) => {
//     return (
//         <div className="product-card">
//             <img className="product-image" src={product.image} alt={product.name} />
//             <div className="product-details">
//                 <h3 className="product-name">{product.name}</h3>
//                 <p className="product-description">{product.description.substring(0, 55)}...</p>
//                 <p className="product-price">${product.price}</p>
//             </div>
//         </div>
//     );
// };
//
// export default ProductCard;



// // client/src/components/ProductCard/ProductCard.js
//
// import React from 'react';
// import './ProductCard.css';
//
// const ProductCard = ({ product }) => {
//     const { image, name, description, price } = product;
//
//     return (
//         <div className="product-card">
//             <img src={image} alt={name} className="product-image" />
//             <div className="product-info">
//                 <h3 className="product-name">{name}</h3>
//                 <p className="product-description">{description.slice(0, 55)}...</p>
//                 <p className="product-price">${price}</p>
//             </div>
//         </div>
//     );
// };
//
// export default ProductCard;



// components/ProductCard.js
import React from 'react';
import './ProductCard.css';

const ProductCard = ({ product }) => {
    return (
        <div className="product-card">
            <img src={product.image} alt={product.name} className="product-image" />
            <div className="product-details">
                <h3 className="product-name">{product.name}</h3>
                <p className="product-description">{product.description.slice(0, 55)}</p>
                <p className="product-price">${product.price}</p>
            </div>
        </div>
    );
};

export default ProductCard;
