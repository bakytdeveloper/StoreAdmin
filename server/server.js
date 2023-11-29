// server.js

const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const morgan = require('morgan');
const apiRoutes = require('./routes/api');

const Product = require('./models/Product');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log('БАЗА ДАННЫХ MongoDB ПОДКЛЮЧЕНА!!');
    })
    .catch(error => {
        console.error('Error connecting to MongoDB:', error);
    });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
    console.log('БАЗА ДАННЫХ MongoDB ПОДКЛЮЧЕНА!!');
});

// Получить список всех товаров
app.get('/api/products', async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Получить информацию о конкретном товаре
app.get('/api/products/:id', async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) {
            return res.status(404).json({ error: 'Товар не найден' });
        }
        res.json(product);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Создать новый товар
app.post('/api/products', async (req, res) => {
    const product = new Product(req.body);
    try {
        const newProduct = await product.save();
        res.status(201).json(newProduct);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Обновить информацию о товаре
app.put('/api/products/:id', async (req, res) => {
    try {
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!product) {
            return res.status(404).json({ error: 'Товар не найден' });
        }
        res.json(product);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Удалить товар
app.delete('/api/products/:id', async (req, res) => {
    try {
        const product = await Product.findByIdAndRemove(req.params.id);
        if (!product) {
            return res.status(404).json({ error: 'Товар не найден' });
        }
        res.json(product);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Получить уникальные типы товаров

// app.get('/api/products/types', async (req, res) => {
//     try {
//         console.log('ПОЛУЧЕНИЕ УНИКАЛЬНЫХ ТИПОВ ВНУТРИ КОДА: ЗАПРОС ПОЛУЧЕН');
//         const types = await Product.distinct('type');
//         console.log('ПОЛУЧЕНИЕ УНИКАЛЬНЫХ ТИПОВ ВНУТРИ КОДА :', types);
//         res.json(types);
//     } catch (error) {
//         console.error('Ошибка при получении типов продуктов:', error);
//         res.status(500).json({ error: error.message });
//     }
// });


app.get('/api/types', async (req, res) => {
    try {
        const types = await Product.find().distinct('type');
        console.log('ПОЛУЧЕНИЕ УНИКАЛЬНЫХ ТИПОВ ВНУТРИ КОДА :', types);
        res.json(types);
    } catch (error) {
        console.error('Ошибка при получении типов продуктов:', error);
        res.status(500).json({ error: error.message });
    }
});










app.listen(PORT, () => {
    console.log(`СЕРВЕР РАБОТАЕТ НА ${PORT} ПОРТУ !!!`);
});
