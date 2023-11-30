



// client/src/App.js
import React, { useState, useEffect } from 'react';
import Header from './components/Header/Header';
import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import ProductsList from './components/ProductsList/ProductsList';
import axios from 'axios';
import ProductModal from './components/ProductModal/ProductModal';

function App() {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('http://localhost:3001/api/products');
                setProducts(response.data);
                setFilteredProducts(response.data);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchProducts();
    }, []);

    const handleOpenModal = (product) => {
        setSelectedProduct(product);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setSelectedProduct(null);
        setIsModalOpen(false);
    };

    const handleScroll = (event) => {
        if (selectedProduct) {
            event.preventDefault();
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [selectedProduct]);

    return (
        <div className="App">
            <Header setFilteredProducts={setFilteredProducts} allProducts={products} />
            <div className={`content ${isModalOpen ? 'content-modal-open' : ''}`}>
                <Sidebar setFilteredProducts={setFilteredProducts} products={products} />
                <ProductsList products={filteredProducts} openModal={handleOpenModal} />
                {selectedProduct && <ProductModal product={selectedProduct} closeModal={handleCloseModal} />}
            </div>
        </div>
    );
}

export default App;


