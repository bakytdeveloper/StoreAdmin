const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Product = require('./../models/Product');
const morgan = require("morgan");

console.log("ПРОВЕРКА ПРОБРОССА ТОВАРОВ :", Product);

// Получить список всех товаров
router.get('/products', async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Получить информацию о конкретном товаре
router.get('/products/:id', async (req, res) => {
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
router.post('/', async (req, res) => {
    const product = new Product(req.body);
    try {
        const newProduct = await product.save();
        res.status(201).json(newProduct);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Обновить информацию о товаре
router.put('/products/:id', async (req, res) => {
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
router.delete('/products/:id', async (req, res) => {
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






Product.findOne({})
    .then(product => {
        console.log('ПОЛУЧЕНИЕ ТОВАРОВ ДО КОДА :', product);
    })
    .catch(error => {
        console.error('Error finding product:', error);
    });

router.get('/types', async (req, res) => {
    try {
        const types = await Product.distinct('type');
        console.log('ПОЛУЧЕНИЕ УНИКАЛЬНЫХ ТИПОВ ВНУТРИ КОДА :', types);

        res.json(types);
    } catch (error) {
        console.error('Ошибка при получении типов продуктов:', error);
        res.status(500).json({ error: 'Внутренняя ошибка сервера' });
    }
});

Product.findOne({})
    .then(product => {
        console.log('ПОЛУЧЕНИЕ ТОВАРОВ ПОСЛЕ КОДА :', product);
    })
    .catch(error => {
        console.error('Error finding product:', error);
    });







module.exports = router;
