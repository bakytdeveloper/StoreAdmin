//
// /// client/src/components/Sidebar/Sidebar.js
//
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import './Sidebar.css';
//
// const Sidebar = ({ setFilteredProducts }) => {
//     const [types, setTypes] = useState([]);
//
//     useEffect(() => {
//         axios.get('http://localhost:3001/api/types')
//             .then(response => {
//                 const uniqueTypes = response.data;
//                 setTypes(uniqueTypes);
//             })
//             .catch(error => console.error('Error fetching types:', error));
//     }, []);
//
//     const handleTypeClick = async (type) => {
//         try {
//             const response = await axios.get(`http://localhost:3001/api/products?type=${encodeURIComponent(type)}`);
//             setFilteredProducts(response.data);
//         } catch (error) {
//             console.error('Error fetching filtered products:', error);
//         }
//     };
//
//     const handleShowAllClick = async () => {
//         try {
//             const response = await axios.get('http://localhost:3001/api/products');
//             setFilteredProducts(response.data);
//         } catch (error) {
//             console.error('Error fetching all products:', error);
//         }
//     };
//
//     return (
//         <div className="sidebar">
//             <h3>Типы товаров</h3>
//             <ul>
//                 <li onClick={() => handleShowAllClick()}>Все товары</li>
//                 {types.map((type, index) => (
//                     <li key={index} onClick={() => handleTypeClick(type)}>{type}</li>
//                 ))}
//             </ul>
//         </div>
//     );
// };
//
// export default Sidebar;



import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Sidebar.css';

const Sidebar = ({ setFilteredProducts, products }) => {
    const [types, setTypes] = useState([]);
    const [selectedType, setSelectedType] = useState(null);

    useEffect(() => {
        const fetchTypes = async () => {
            try {
                const response = await axios.get('http://localhost:3001/api/types');
                const uniqueTypes = response.data;
                setTypes(uniqueTypes);
            } catch (error) {
                console.error('Error fetching types:', error);
            }
        };

        fetchTypes();
    }, []);

    const handleTypeClick = (type) => {
        const filteredProducts = products.filter(product => product.type === type);
        setFilteredProducts(filteredProducts);
        setSelectedType(type);
    };

    const handleShowAllClick = () => {
        setFilteredProducts(products);
        setSelectedType(null);
    };

    return (
        <div className="sidebar">
            <h3>Типы товаров</h3>
            <ul>
                <li className={!selectedType && 'selected'} onClick={handleShowAllClick}>
                    Все товары
                </li>
                {types.map((type, index) => (
                    <li
                        key={index}
                        className={selectedType === type && 'selected'}
                        onClick={() => handleTypeClick(type)}
                    >
                        {type}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Sidebar;
