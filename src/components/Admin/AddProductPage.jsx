import React, { useContext, useState } from 'react';
import { adminContext } from '../../contexts/AdminContext';

const AddProductPage = () => {

    const { createProduct } = useContext(adminContext)
    const [newProduct, setNewProduct] = useState({
        title: '',
        description: '',
        price: ''
    })

    function handleInput(e) {
        let obj = {
            ...newProduct,
            [e.target.name]: e.target.value
        }
        setNewProduct(obj)
    }

    function handleClick() {
        createProduct(newProduct)
        setNewProduct({
            image: '',
            title: '',
            description: '',
            meat: '',
            price: ''
        })
    }

    return (
        <>
            <div className="add__page">
                <div className="add__panel">
                    <input type="text" value={newProduct.image} onChange={handleInput} name="Изображение" />
                    <input type="text" value={newProduct.title} onChange={handleInput} name="Название" />
                    <input type="text" value={newProduct.description} onChange={handleInput} name="Описание" />
                    <input type="text" value={newProduct.meat} onChange={handleInput} name="Мясо" />
                    <input type="text" value={newProduct.price} onChange={handleInput} name="Цена" />
                </div>
            </div>
            <div className="add__block">
                <button className="add__button" onClick={handleClick}>Add</button>
            </div>
        </>
    );
};

export default AddProductPage;