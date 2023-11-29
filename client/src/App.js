// // client/src/App.js
//
// import React from 'react';
// import Header from './components/Header/Header';
// import './App.css';
// import Sidebar from "./components/Sidebar/Sidebar";
//
// function App() {
//   return (
//       <div className="App">
//         <Header />
//         <Sidebar />
//         {/* Другие компоненты и контент здесь */}
//       </div>
//   );
// }
//
// export default App;




// client/src/App.js

import React, { useState, useEffect } from 'react';
import Header from './components/Header/Header';
import './App.css';
import Sidebar from "./components/Sidebar/Sidebar";
import ProductsList from "./components/ProductsList/ProductsList";
import axios from 'axios';

function App() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('http://localhost:3001/api/products');
                setProducts(response.data);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchProducts();
    }, []);

    return (
        <div className="App">
            <Header />
            <div className="content">
                <Sidebar />
                <ProductsList products={products} />
            </div>
        </div>
    );
}

export default App;
