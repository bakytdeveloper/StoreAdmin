//
// // client/src/components/ProductModal/ProductModal.js
// import React from 'react';
// import './ProductModal.css';
//
// const ProductModal = ({ product, closeModal }) => {
//     const handleCloseClick = () => {
//         closeModal();
//     };
//
//     return (
//         <div className="modal-overlay">
//             <div className="modal-content">
//         <span className="close-button" onClick={handleCloseClick}>
//           &times;
//         </span>
//                 <h2>{product.name}</h2>
//                 <div className="modal-details">
//                     <img src={product.image} alt={product.name} className="modal-image" />
//                     <div className="product-description">
//                         <p>{product.description}</p>
//                     </div>
//                     <h3>Характеристики</h3>
//                     <table>
//                         <tbody>
//                         {Object.entries(product.specifications).map(([key, value]) => (
//                             <tr key={key}>
//                                 <td>{key}</td>
//                                 <td>{value}</td>
//                             </tr>
//                         ))}
//                         </tbody>
//                     </table>
//                 </div>
//             </div>
//         </div>
//     );
// };
//
// export default ProductModal;





//
// // client/src/components/ProductModal/ProductModal.js
// import React, { useEffect } from 'react';
// import './ProductModal.css';
//
// const ProductModal = ({ product, closeModal }) => {
//     useEffect(() => {
//         // Отключаем прокрутку страницы при открытом модальном окне
//         document.body.style.overflow = 'hidden';
//
//         // Восстанавливаем прокрутку при закрытии модального окна
//         return () => {
//             document.body.style.overflow = 'auto';
//         };
//     }, []);
//
//     const handleCloseClick = () => {
//         closeModal();
//     };
//
//     return (
//         <div className="modal-overlay">
//             <div className="modal-content">
//         <span className="close-button" onClick={handleCloseClick}>
//           &times;
//         </span>
//                 <h2>{product.name}</h2>
//                 <div className="modal-details">
//                     <img src={product.image} alt={product.name} className="modal-image" />
//                     <div className="product-description">
//                         <p>{product.description}</p>
//                     </div>
//                     <h3>Характеристики</h3>
//                     <table>
//                         <tbody>
//                         {Object.entries(product.specifications).map(([key, value]) => (
//                             <tr key={key}>
//                                 <td>{key}</td>
//                                 <td>{value}</td>
//                             </tr>
//                         ))}
//                         </tbody>
//                     </table>
//                 </div>
//             </div>
//         </div>
//     );
// };
//
// export default ProductModal;


// client/src/components/ProductModal/ProductModal.js
import React, { useEffect, useRef } from 'react';
import './ProductModal.css';

const ProductModal = ({ product, closeModal }) => {
    const modalRef = useRef(null);

    useEffect(() => {
        // Отключаем прокрутку страницы при открытом модальном окне
        document.body.style.overflow = 'hidden';

        // Восстанавливаем прокрутку при закрытии модального окна
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, []);

    const handleCloseClick = () => {
        closeModal();
    };

    const handleOverlayClick = (e) => {
        if (modalRef.current && !modalRef.current.contains(e.target)) {
            closeModal();
        }
    };

    return (
        <div className="modal-overlay" onClick={handleOverlayClick}>
            <div className="modal-content" ref={modalRef}>
        <span className="close-button" onClick={handleCloseClick}>
          &times;
        </span>
                <h2>{product.name}</h2>
                <div className="modal-details">
                    <img src={product.image} alt={product.name} className="modal-image" />
                    <div className="product-description">
                        <p>{product.description}</p>
                    </div>
                    <h3>Характеристики</h3>
                    <table>
                        <tbody>
                        {Object.entries(product.specifications).map(([key, value]) => (
                            <tr key={key}>
                                <td>{key}</td>
                                <td>{value}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ProductModal;
