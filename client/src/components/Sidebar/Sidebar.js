// client/src/components/Sidebar/Sidebar.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Sidebar.css';

const Sidebar = () => {
    const [types, setTypes] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3001/api/types')
            .then(response => {
                const uniqueTypes = response.data; // Оставляем только уникальные типы
                setTypes(uniqueTypes);
            })
            .catch(error => console.error('Error fetching types:', error));
    }, []);

    return (
        <div className="sidebar">
            <h3>Типы товаров</h3>
            <ul>
                {types.map((type, index) => (
                    <li key={index}>{type}</li>
                ))}
            </ul>
        </div>
    );
};

export default Sidebar;
