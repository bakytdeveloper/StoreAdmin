// // client/src/components/Header/Header.js
//
// import React from 'react';
// import './Header.css';
//
// const Header = () => {
//     const instagramLink = 'https://www.instagram.com/';
//     const whatsappLink = 'https://web.whatsapp.com/';
//     const tiktokLink = 'https://www.tiktok.com/';
//     const telegramLink = 'https://t.me/';
//
//     return (
//         <div className="header">
//             <span className="site-name">NURStore</span>
//             <div className="icons-and-number">
//                 <div className="social-icons">
//                     <a className="one" href={instagramLink} target="_blank" rel="noopener noreferrer">
//                         <i className="fab fa-instagram"></i>
//                     </a>
//                     <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
//                         <i className="fab fa-whatsapp"></i>
//                     </a>
//                     <a href={tiktokLink} target="_blank" rel="noopener noreferrer">
//                         <i className="fab fa-tiktok"></i>
//                     </a>
//                     <a href={telegramLink} target="_blank" rel="noopener noreferrer">
//                         <i className="fab fa-telegram"></i>
//                     </a>
//                 </div>
//                 <div className="tel">
//                 <span className="phone-number">XXX-XX-XX-XX</span>
//                 </div>
//             </div>
//             <div className="search-section">
//                 <input type="text" placeholder="Search" />
//             </div>
//         </div>
//     );
// };
//
// export default Header;






// client/src/components/Header/Header.js

import React, { useState } from 'react';
import './Header.css';

const Header = ({ setFilteredProducts, allProducts }) => {
    const [searchQuery, setSearchQuery] = useState('');

    const instagramLink = 'https://www.instagram.com/';
    const whatsappLink = 'https://web.whatsapp.com/';
    const tiktokLink = 'https://www.tiktok.com/';
    const telegramLink = 'https://t.me/';

    const handleSearchChange = (event) => {
        const query = event.target.value;
        setSearchQuery(query);

        if (!query) {
            setFilteredProducts(allProducts);
            return;
        }

        const filtered = allProducts.filter((product) =>
            product.name.toLowerCase().includes(query.toLowerCase()) ||
            product.description.toLowerCase().includes(query.toLowerCase())
        );

        setFilteredProducts(filtered);
    };

    return (
        <div className="header">
            <span className="site-name">NURStore</span>
            <div className="icons-and-number">
                <div className="social-icons">
                    <a className="one" href={instagramLink} target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-instagram"></i>
                    </a>
                    <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-whatsapp"></i>
                    </a>
                    <a href={tiktokLink} target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-tiktok"></i>
                    </a>
                    <a href={telegramLink} target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-telegram"></i>
                    </a>
                </div>
                <div className="tel">
                    <span className="phone-number">XXX-XX-XX-XX</span>
                </div>
            </div>
            <div className="search-section">
                <input
                    type="text"
                    placeholder="Search"
                    value={searchQuery}
                    onChange={handleSearchChange}
                />
            </div>
        </div>
    );
};

export default Header;
