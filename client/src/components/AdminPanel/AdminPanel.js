// // client/src/components/AdminPanel/AdminPanel.js
// import React, { useState } from 'react';
// import axios from 'axios';
//
// const AdminPanel = () => {
//     const [name, setName] = useState('');
//     const [description, setDescription] = useState('');
//     const [image, setImage] = useState('');
//     const [price, setPrice] = useState('');
//     const [specifications, setSpecifications] = useState({});
//     const [editingProductId, setEditingProductId] = useState(null);
//
//     const handleAddProduct = async () => {
//         try {
//             const newProduct = {
//                 name,
//                 description,
//                 image,
//                 price: parseFloat(price),
//                 specifications,
//             };
//
//             await axios.post('http://localhost:3001/api/products', newProduct);
//             // Очистим поля после добавления
//             setName('');
//             setDescription('');
//             setImage('');
//             setPrice('');
//             setSpecifications({});
//         } catch (error) {
//             console.error('Error adding product:', error);
//         }
//     };
//
//     const handleEditProduct = async () => {
//         try {
//             if (!editingProductId) {
//                 return;
//             }
//
//             const updatedProduct = {
//                 price: parseFloat(price),
//                 specifications,
//             };
//
//             await axios.put(`http://localhost:3001/api/products/${editingProductId}`, updatedProduct);
//             // Очистим поля после изменения
//             setEditingProductId(null);
//             setPrice('');
//             setSpecifications({});
//         } catch (error) {
//             console.error('Error editing product:', error);
//         }
//     };
//
//     return (
//         <div className="admin-panel">
//             <h2>Административная панель</h2>
//             <label>
//                 Название товара:
//                 <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
//             </label>
//             <label>
//                 Описание товара:
//                 <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
//             </label>
//             <label>
//                 Ссылка на изображение:
//                 <input type="text" value={image} onChange={(e) => setImage(e.target.value)} />
//             </label>
//             <label>
//                 Цена товара:
//                 <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} />
//             </label>
//             <label>
//                 Характеристики товара (введите в формате "ключ: значение"):
//                 <input type="text" value={specifications} onChange={(e) => setSpecifications(e.target.value)} />
//             </label>
//             {editingProductId ? (
//                 <button onClick={handleEditProduct}>Изменить товар</button>
//             ) : (
//                 <button onClick={handleAddProduct}>Добавить товар</button>
//             )}
//         </div>
//     );
// };
//
// export default AdminPanel;




//
//
// // components/AdminPanel/AdminPanel.js
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import './AdminPanel.css'
//
// const AdminPanel = () => {
//     const [products, setProducts] = useState([]);
//     const [name, setName] = useState('');
//     const [description, setDescription] = useState('');
//     const [image, setImage] = useState('');
//     const [price, setPrice] = useState('');
//     const [specifications, setSpecifications] = useState({}); // Изменения тут, характеристики как объект
//
//     useEffect(() => {
//         fetchProducts();
//     }, []);
//
//     const fetchProducts = async () => {
//         try {
//             const response = await axios.get('http://localhost:3001/api/products');
//             setProducts(response.data);
//         } catch (error) {
//             console.error('Error fetching products:', error);
//         }
//     };
//
//     const handleAddProduct = async () => {
//         try {
//             const newProduct = {
//                 name,
//                 description,
//                 image,
//                 price,
//                 specifications // Изменения тут, отправляем характеристики как объект
//             };
//             await axios.post('http://localhost:3001/api/products', newProduct);
//             fetchProducts();
//             // Очистка полей после добавления
//             setName('');
//             setDescription('');
//             setImage('');
//             setPrice('');
//             setSpecifications({});
//         } catch (error) {
//             console.error('Error adding product:', error);
//         }
//     };
//
//     return (
//         <div className="admin-panel">
//             <h2>Административная панель</h2>
//             <div className="add-product">
//                 <h3>Добавить новый товар</h3>
//                 <input
//                     type="text"
//                     placeholder="Название"
//                     value={name}
//                     onChange={(e) => setName(e.target.value)}
//                 />
//                 <input
//                     type="text"
//                     placeholder="Описание"
//                     value={description}
//                     onChange={(e) => setDescription(e.target.value)}
//                 />
//                 <input
//                     type="text"
//                     placeholder="Ссылка на изображение"
//                     value={image}
//                     onChange={(e) => setImage(e.target.value)}
//                 />
//                 <input
//                     type="text"
//                     placeholder="Цена"
//                     value={price}
//                     onChange={(e) => setPrice(e.target.value)}
//                 />
//                 {/* Изменения тут, поля для характеристик */}
//                 <input
//                     type="text"
//                     placeholder="Характеристика - ключ"
//                     onChange={(e) => {
//                         const key = e.target.value;
//                         setSpecifications({ ...specifications, [key]: '' });
//                     }}
//                 />
//                 <input
//                     type="text"
//                     placeholder="Значение"
//                     onChange={(e) => {
//                         const key = Object.keys(specifications)[Object.keys(specifications).length - 1];
//                         setSpecifications({ ...specifications, [key]: e.target.value });
//                     }}
//                 />
//                 <button onClick={handleAddProduct}>Добавить товар</button>
//             </div>
//             <div className="product-list">
//                 <h3>Список товаров</h3>
//                 <ul>
//                     {products.map((product) => (
//                         <li key={product._id}>
//                             {product.name} - {product.price}
//                             <button>Редактировать</button>
//                             <button>Удалить</button>
//                         </li>
//                     ))}
//                 </ul>
//             </div>
//         </div>
//     );
// };
//
// export default AdminPanel;















// // components/AdminPanel/AdminPanel.js
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import './AdminPanel.css';
//
// const AdminPanel = () => {
//     const [productName, setProductName] = useState('');
//     const [productDescription, setProductDescription] = useState('');
//     const [productType, setProductType] = useState('');
//     const [productPrice, setProductPrice] = useState('');
//     const [productSpecifications, setProductSpecifications] = useState({});
//     const [productImage, setProductImage] = useState(null);
//
//     const [products, setProducts] = useState([]);
//
//     useEffect(() => {
//         const fetchProducts = async () => {
//             try {
//                 const response = await axios.get('http://localhost:3001/api/products');
//                 setProducts(response.data);
//             } catch (error) {
//                 console.error('Error fetching products:', error);
//             }
//         };
//
//         fetchProducts();
//     }, []);
//
//     const handleAddProduct = async () => {
//         const formData = new FormData();
//         formData.append('name', productName);
//         formData.append('description', productDescription);
//         formData.append('type', productType);
//         formData.append('price', productPrice);
//         formData.append('specifications', JSON.stringify(productSpecifications));
//
//         if (productImage) {
//             formData.append('image', productImage);
//         }
//
//         try {
//             const response = await axios.post('http://localhost:3001/api/products', formData, {
//                 headers: {
//                     'Content-Type': 'multipart/form-data',
//                 },
//             });
//
//             setProducts([...products, response.data]);
//
//             // Очищаем поля после добавления товара
//             setProductName('');
//             setProductDescription('');
//             setProductType('');
//             setProductPrice('');
//             setProductSpecifications({});
//             setProductImage(null);
//         } catch (error) {
//             console.error('Error adding product:', error);
//         }
//     };
//
//     const handleInputChange = (key, value) => {
//         setProductSpecifications({
//             ...productSpecifications,
//             [key]: value,
//         });
//     };
//
//     return (
//         <div className="admin-panel">
//             <div className="add-product">
//                 <h3>Add Product</h3>
//                 <input type="text" placeholder="Name" value={productName} onChange={(e) => setProductName(e.target.value)} />
//                 <input type="text" placeholder="Description" value={productDescription} onChange={(e) => setProductDescription(e.target.value)} />
//                 <input type="text" placeholder="Type" value={productType} onChange={(e) => setProductType(e.target.value)} />
//                 <input type="text" placeholder="Price" value={productPrice} onChange={(e) => setProductPrice(e.target.value)} />
//
//                 <h4>Specifications</h4>
//                 <input type="text" placeholder="Key" onChange={(e) => handleInputChange(e.target.value, '')} />
//                 <input type="text" placeholder="Value" onChange={(e) => handleInputChange('', e.target.value)} />
//
//                 <h4>Image</h4>
//                 <input type="file" onChange={(e) => setProductImage(e.target.files[0])} />
//
//                 <button onClick={handleAddProduct}>Add Product</button>
//             </div>
//
//             <div className="product-list">
//                 <h3>Product List</h3>
//                 <ul>
//                     {products.map((product) => (
//                         <li key={product._id}>
//                             {product.name}
//                         </li>
//                     ))}
//                 </ul>
//             </div>
//         </div>
//     );
// };
//
// export default AdminPanel;





// // components/AdminPanel/AdminPanel.js
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import './AdminPanel.css';
//
// const AdminPanel = () => {
//     const [productName, setProductName] = useState('');
//     const [productDescription, setProductDescription] = useState('');
//     const [productType, setProductType] = useState('');
//     const [productPrice, setProductPrice] = useState('');
//     const [productSpecifications, setProductSpecifications] = useState({});
//     const [productImage, setProductImage] = useState(null);
//
//     const [products, setProducts] = useState([]);
//
//     useEffect(() => {
//         const fetchProducts = async () => {
//             try {
//                 const response = await axios.get('http://localhost:3001/api/products');
//                 setProducts(response.data);
//             } catch (error) {
//                 console.error('Error fetching products:', error);
//             }
//         };
//
//         fetchProducts();
//     }, []);
//
//     const handleAddProduct = async () => {
//         const formData = new FormData();
//         formData.append('name', productName);
//         formData.append('description', productDescription);
//         formData.append('type', productType);
//         formData.append('price', productPrice);
//         formData.append('specifications', JSON.stringify(productSpecifications));
//
//         if (productImage) {
//             formData.append('image', productImage);
//         }
//
//         try {
//             const response = await axios.post('http://localhost:3001/api/products', formData, {
//                 headers: {
//                     'Content-Type': 'multipart/form-data',
//                 },
//             });
//
//             setProducts([...products, response.data]);
//
//             // Очищаем поля после добавления товара
//             setProductName('');
//             setProductDescription('');
//             setProductType('');
//             setProductPrice('');
//             setProductSpecifications({});
//             setProductImage(null);
//         } catch (error) {
//             console.error('Error adding product:', error);
//         }
//     };
//
//     const handleInputChange = (key, value) => {
//         setProductSpecifications({
//             ...productSpecifications,
//             [key]: value,
//         });
//     };
//
//     const handleEditProduct = (productId) => {
//         // Обработка редактирования товара
//         console.log('Edit product:', productId);
//     };
//
//     const handleDeleteProduct = async (productId) => {
//         try {
//             await axios.delete(`http://localhost:3001/api/products/${productId}`);
//             setProducts(products.filter((product) => product._id !== productId));
//         } catch (error) {
//             console.error('Error deleting product:', error);
//         }
//     };
//
//     return (
//         <div className="admin-panel">
//             <div className="add-product">
//                 <h3>Add Product</h3>
//                 <input type="text" placeholder="Name" value={productName} onChange={(e) => setProductName(e.target.value)} />
//                 <input type="text" placeholder="Description" value={productDescription} onChange={(e) => setProductDescription(e.target.value)} />
//                 <input type="text" placeholder="Type" value={productType} onChange={(e) => setProductType(e.target.value)} />
//                 <input type="text" placeholder="Price" value={productPrice} onChange={(e) => setProductPrice(e.target.value)} />
//
//                 <h4>Specifications</h4>
//                 <input type="text" placeholder="Key" onChange={(e) => handleInputChange(e.target.value, '')} />
//                 <input type="text" placeholder="Value" onChange={(e) => handleInputChange('', e.target.value)} />
//
//                 <h4>Image</h4>
//                 <input type="file" onChange={(e) => setProductImage(e.target.files[0])} />
//
//                 <button onClick={handleAddProduct}>Add Product</button>
//             </div>
//
//             <div className="product-list">
//                 <h3>Product List</h3>
//                 <ul>
//                     {products.map((product) => (
//                         <li key={product._id}>
//                             {product.name} - {product.price}
//                             <button onClick={() => handleEditProduct(product._id)}>Редактировать</button>
//                             <button onClick={() => handleDeleteProduct(product._id)}>Удалить</button>
//                         </li>
//                     ))}
//                 </ul>
//             </div>
//         </div>
//     );
// };
//
// export default AdminPanel;



//
//
// // components/AdminPanel/AdminPanel.js
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import './AdminPanel.css';
//
// const AdminPanel = () => {
//     const [productName, setProductName] = useState('');
//     const [productDescription, setProductDescription] = useState('');
//     const [productType, setProductType] = useState('');
//     const [productPrice, setProductPrice] = useState('');
//     const [productSpecifications, setProductSpecifications] = useState({});
//     const [productImage, setProductImage] = useState(null);
//
//     const [products, setProducts] = useState([]);
//     const [selectedProduct, setSelectedProduct] = useState(null);
//
//     useEffect(() => {
//         const fetchProducts = async () => {
//             try {
//                 const response = await axios.get('http://localhost:3001/api/products');
//                 setProducts(response.data);
//             } catch (error) {
//                 console.error('Error fetching products:', error);
//             }
//         };
//
//         fetchProducts();
//     }, []);
//
//     const handleAddProduct = async () => {
//         const formData = new FormData();
//         formData.append('name', productName);
//         formData.append('description', productDescription);
//         formData.append('type', productType);
//         formData.append('price', productPrice);
//         formData.append('specifications', JSON.stringify(productSpecifications));
//
//         if (productImage) {
//             formData.append('image', productImage);
//         }
//
//         try {
//             const response = await axios.post('http://localhost:3001/api/products', formData, {
//                 headers: {
//                     'Content-Type': 'multipart/form-data',
//                 },
//             });
//
//             setProducts([...products, response.data]);
//
//             // Очищаем поля после добавления товара
//             setProductName('');
//             setProductDescription('');
//             setProductType('');
//             setProductPrice('');
//             setProductSpecifications({});
//             setProductImage(null);
//         } catch (error) {
//             console.error('Error adding product:', error);
//         }
//     };
//
//     const handleEditProduct = async () => {
//         if (!selectedProduct) {
//             return;
//         }
//
//         const formData = new FormData();
//         formData.append('name', productName || selectedProduct.name);
//         formData.append('description', productDescription || selectedProduct.description);
//         formData.append('type', productType || selectedProduct.type);
//         formData.append('price', productPrice || selectedProduct.price);
//         formData.append('specifications', JSON.stringify(productSpecifications));
//
//         if (productImage) {
//             formData.append('image', productImage);
//         }
//
//         try {
//             const response = await axios.put(`http://localhost:3001/api/products/${selectedProduct._id}`, formData, {
//                 headers: {
//                     'Content-Type': 'multipart/form-data',
//                 },
//             });
//
//             setProducts(products.map((product) => (product._id === selectedProduct._id ? response.data : product)));
//             setSelectedProduct(null);
//
//             // Очищаем поля после редактирования товара
//             setProductName('');
//             setProductDescription('');
//             setProductType('');
//             setProductPrice('');
//             setProductSpecifications({});
//             setProductImage(null);
//         } catch (error) {
//             console.error('Error editing product:', error);
//         }
//     };
//
//     const handleInputChange = (key, value) => {
//         setProductSpecifications({
//             ...productSpecifications,
//             [key]: value,
//         });
//     };
//
//     const handleSelectProduct = (product) => {
//         setSelectedProduct(product);
//
//         // Заполняем поля формы данными выбранного товара
//         setProductName(product.name);
//         setProductDescription(product.description);
//         setProductType(product.type);
//         setProductPrice(product.price);
//         setProductSpecifications(product.specifications);
//     };
//
//     const handleDeleteProduct = async (productId) => {
//         try {
//             await axios.delete(`http://localhost:3001/api/products/${productId}`);
//             setProducts(products.filter((product) => product._id !== productId));
//         } catch (error) {
//             console.error('Error deleting product:', error);
//         }
//     };
//
//     return (
//         <div className="admin-panel">
//             <div className="add-product">
//                 <h3>{selectedProduct ? 'Edit Product' : 'Add Product'}</h3>
//                 <input type="text" placeholder="Name" value={productName} onChange={(e) => setProductName(e.target.value)} />
//                 <input type="text" placeholder="Description" value={productDescription} onChange={(e) => setProductDescription(e.target.value)} />
//                 <input type="text" placeholder="Type" value={productType} onChange={(e) => setProductType(e.target.value)} />
//                 <input type="text" placeholder="Price" value={productPrice} onChange={(e) => setProductPrice(e.target.value)} />
//
//                 <h4>Specifications</h4>
//                 <input type="text" placeholder="Key" onChange={(e) => handleInputChange(e.target.value, '')} />
//                 <input type="text" placeholder="Value" onChange={(e) => handleInputChange('', e.target.value)} />
//
//                 <h4>Image</h4>
//                 <input type="file" onChange={(e) => setProductImage(e.target.files[0])} />
//
//                 {selectedProduct ? (
//                     <button onClick={handleEditProduct}>Edit Product</button>
//                 ) : (
//                     <button onClick={handleAddProduct}>Add Product</button>
//                 )}
//             </div>
//
//             <div className="product-list">
//                 <h3>Product List</h3>
//                 <ul>
//                     {products.map((product) => (
//                         <li key={product._id}>
//                             {product.name} - {product.price}
//                             <button onClick={() => handleSelectProduct(product)}>Редактировать</button>
//                             <button onClick={() => handleDeleteProduct(product._id)}>Удалить</button>
//                         </li>
//                     ))}
//                 </ul>
//             </div>
//         </div>
//     );
// };
//
// export default AdminPanel;






//
//
// // components/AdminPanel/AdminPanel.js
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import './AdminPanel.css';
//
// const AdminPanel = () => {
//     const [productName, setProductName] = useState('');
//     const [productDescription, setProductDescription] = useState('');
//     const [productType, setProductType] = useState('');
//     const [productPrice, setProductPrice] = useState('');
//     const [productSpecifications, setProductSpecifications] = useState([{
//         key: '',
//         value: ''
//     }]);
//     const [productImage, setProductImage] = useState(null);
//
//     const [products, setProducts] = useState([]);
//
//     useEffect(() => {
//         const fetchProducts = async () => {
//             try {
//                 const response = await axios.get('http://localhost:3001/api/products');
//                 setProducts(response.data);
//             } catch (error) {
//                 console.error('Error fetching products:', error);
//             }
//         };
//
//         fetchProducts();
//     }, []);
//
//     const handleAddProduct = async () => {
//         const formData = new FormData();
//         formData.append('name', productName);
//         formData.append('description', productDescription);
//         formData.append('type', productType);
//         formData.append('price', productPrice);
//         formData.append('specifications', JSON.stringify(productSpecifications));
//
//         if (productImage) {
//             formData.append('image', productImage);
//         }
//
//         try {
//             const response = await axios.post('http://localhost:3001/api/products', formData, {
//                 headers: {
//                     'Content-Type': 'multipart/form-data',
//                 },
//             });
//
//             setProducts([...products, response.data]);
//
//             // Очищаем поля после добавления товара
//             setProductName('');
//             setProductDescription('');
//             setProductType('');
//             setProductPrice('');
//             setProductSpecifications([{ key: '', value: '' }]);
//             setProductImage(null);
//         } catch (error) {
//             console.error('Error adding product:', error);
//         }
//     };
//
//     const handleInputChange = (index, key, value) => {
//         const updatedSpecifications = [...productSpecifications];
//         updatedSpecifications[index] = { ...updatedSpecifications[index], [key]: value };
//         setProductSpecifications(updatedSpecifications);
//     };
//
//     const handleAddField = () => {
//         setProductSpecifications([...productSpecifications, { key: '', value: '' }]);
//     };
//
//     const handleEditProduct = (productId) => {
//         // Обработка редактирования товара
//         console.log('Edit product:', productId);
//     };
//
//     const handleDeleteProduct = async (productId) => {
//         try {
//             await axios.delete(`http://localhost:3001/api/products/${productId}`);
//             setProducts(products.filter((product) => product._id !== productId));
//         } catch (error) {
//             console.error('Error deleting product:', error);
//         }
//     };
//
//     return (
//         <div className="admin-panel">
//             <h2>Админ панель</h2>
//             <div className="add-product">
//                 <h3>Add Product</h3>
//                 {/* ... (остальной код добавления товара) */}
//                 <h4>Specifications</h4>
//                 {productSpecifications.map((specification, index) => (
//                     <div key={index} className="specification-inputs">
//                         <input
//                             type="text"
//                             placeholder="Key"
//                             value={specification.key}
//                             onChange={(e) => handleInputChange(index, 'key', e.target.value)}
//                         />
//                         <input
//                             type="text"
//                             placeholder="Value"
//                             value={specification.value}
//                             onChange={(e) => handleInputChange(index, 'value', e.target.value)}
//                         />
//                     </div>
//                 ))}
//                 <button onClick={handleAddField}>Добавить поле</button>
//                 {/* ... (остальной код добавления товара) */}
//             </div>
//
//             <div className="product-list">
//                 <h3>Product List</h3>
//                 <ul>
//                     {products.map((product) => (
//                         <li key={product._id}>
//                             {product.name} - {product.price}
//                             <button onClick={() => handleEditProduct(product._id)}>Редактировать</button>
//                             <button onClick={() => handleDeleteProduct(product._id)}>Удалить</button>
//                         </li>
//                     ))}
//                 </ul>
//             </div>
//         </div>
//     );
// };
//
// export default AdminPanel;






// components/AdminPanel/AdminPanel.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './AdminPanel.css';

const AdminPanel = () => {
    const [productName, setProductName] = useState('');
    const [productDescription, setProductDescription] = useState('');
    const [productType, setProductType] = useState('');
    const [productPrice, setProductPrice] = useState('');
    const [productSpecifications, setProductSpecifications] = useState([{
        key: '',
        value: ''
    }]);
    const [productImage, setProductImage] = useState(null);

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

    const handleAddProduct = async () => {
        const formData = new FormData();
        formData.append('name', productName);
        formData.append('description', productDescription);
        formData.append('type', productType);
        formData.append('price', productPrice);
        formData.append('specifications', JSON.stringify(productSpecifications));

        if (productImage) {
            formData.append('image', productImage);
        }

        try {
            const response = await axios.post('http://localhost:3001/api/products', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            setProducts([...products, response.data]);

            // Очищаем поля после добавления товара
            setProductName('');
            setProductDescription('');
            setProductType('');
            setProductPrice('');
            setProductSpecifications([{ key: '', value: '' }]);
            setProductImage(null);
        } catch (error) {
            console.error('Error adding product:', error);
        }
    };

    const handleInputChange = (index, key, value) => {
        const updatedSpecifications = [...productSpecifications];
        updatedSpecifications[index] = { ...updatedSpecifications[index], [key]: value };
        setProductSpecifications(updatedSpecifications);
    };

    const handleAddField = () => {
        setProductSpecifications([...productSpecifications, { key: '', value: '' }]);
    };

    const handleDeleteField = (index) => {
        const updatedSpecifications = [...productSpecifications];
        updatedSpecifications.splice(index, 1);
        setProductSpecifications(updatedSpecifications);
    };

    const handleEditProduct = (productId) => {
        // Обработка редактирования товара
        console.log('Edit product:', productId);
    };

    const handleDeleteProduct = async (productId) => {
        try {
            await axios.delete(`http://localhost:3001/api/products/${productId}`);
            setProducts(products.filter((product) => product._id !== productId));
        } catch (error) {
            console.error('Error deleting product:', error);
        }
    };

    return (
        <div className="admin-panel">
            <h2>Админ панель</h2>
            <div className="add-product">
                <h3>Add Product</h3>
                <input type="text" placeholder="Name" value={productName} onChange={(e) => setProductName(e.target.value)} />
                <input type="text" placeholder="Description" value={productDescription} onChange={(e) => setProductDescription(e.target.value)} />
                <input type="text" placeholder="Type" value={productType} onChange={(e) => setProductType(e.target.value)} />
                <input type="text" placeholder="Price" value={productPrice} onChange={(e) => setProductPrice(e.target.value)} />

                <h4>Specifications</h4>
                {productSpecifications.map((specification, index) => (
                    <div key={index} className="specification-inputs">
                        <input
                            type="text"
                            placeholder="Key"
                            value={specification.key}
                            onChange={(e) => handleInputChange(index, 'key', e.target.value)}
                        />
                        <input
                            type="text"
                            placeholder="Value"
                            value={specification.value}
                            onChange={(e) => handleInputChange(index, 'value', e.target.value)}
                        />
                        <button onClick={() => handleDeleteField(index)}>Удалить поле</button>
                    </div>
                ))}
                <button onClick={handleAddField}>Добавить поле</button>

                <h4>Image</h4>
                <input type="file" onChange={(e) => setProductImage(e.target.files[0])} />

                <button onClick={handleAddProduct}>Add Product</button>
            </div>

            <div className="product-list">
                <h3>Product List</h3>
                <ul>
                    {products.map((product) => (
                        <li key={product._id}>
                            {product.name} - {product.price}
                            <button onClick={() => handleEditProduct(product._id)}>Редактировать</button>
                            <button onClick={() => handleDeleteProduct(product._id)}>Удалить</button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default AdminPanel;








