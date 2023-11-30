// //
// // // components/ProductCard.js
// import React from 'react';
// import './ProductCard.css';
//
// const ProductCard = ({ product }) => {
//     return (
//         <div className="product-card">
//             <img src={product.image} alt={product.name} className="product-image" />
//             <div className="product-details">
//                 <h3 className="product-name">{product.name}</h3>
//                 <p className="product-description">{product.description.slice(0, 55)}</p>
//                 <p className="product-price">${product.price}</p>
//             </div>
//         </div>
//     );
// };
//
// export default ProductCard;





// client/src/components/ProductCard/ProductCard.js
import React from 'react';
import './ProductCard.css';

const ProductCard = ({ product, openModal }) => {
    const handleClick = () => {
        openModal(product);
    };

    return (
        <div className="product-card" onClick={handleClick}>
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
