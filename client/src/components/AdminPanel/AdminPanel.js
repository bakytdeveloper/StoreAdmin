// src/components/AdminPanel/AdminPanel.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './AdminPanel.css'; // Создайте файл стилей AdminPanel.css

const AdminPanel = () => {
    const [products, setProducts] = useState([]);
    const [newProduct, setNewProduct] = useState({
        name: '',
        description: '',
        image: '',
        specifications: {},
    });

    useEffect(() => {
        // Загрузите список товаров при монтировании компонента
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        try {
            const response = await axios.get('http://localhost:3001/api/products');
            setProducts(response.data);
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewProduct((prevProduct) => ({ ...prevProduct, [name]: value }));
    };

    const handleAddProduct = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:3001/api/products', newProduct);
            // После успешного добавления товара, очистите форму и обновите список товаров
            setNewProduct({
                name: '',
                description: '',
                image: '',
                specifications: {},
            });
            fetchProducts();
        } catch (error) {
            console.error('Error adding product:', error);
        }
    };

    return (
        <div className="admin-panel">
            <h2>Административная панель</h2>
            <form onSubmit={handleAddProduct}>
                <label htmlFor="name">Название:</label>
                <input type="text" id="name" name="name" value={newProduct.name} onChange={handleInputChange} />

                <label htmlFor="description">Описание:</label>
                <textarea
                    id="description"
                    name="description"
                    value={newProduct.description}
                    onChange={handleInputChange}
                />

                <label htmlFor="image">Изображение (URL):</label>
                <input type="text" id="image" name="image" value={newProduct.image} onChange={handleInputChange} />

                {/* Добавьте другие поля для характеристик, если нужно */}

                <button type="submit">Добавить товар</button>
            </form>

            {/* Список существующих товаров */}
            <h3>Существующие товары:</h3>
            <ul>
                {products.map((product) => (
                    <li key={product._id}>
                        {product.name} - <button>Редактировать</button> <button>Удалить</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AdminPanel;
