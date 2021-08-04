import React, { useContext, useEffect, useState } from 'react';
import { adminContext } from '../../contexts/AdminContext';

const EditProductPage = ({ setChangeId }) => {

    const { productToEdit } = useContext(adminContext)
    const { saveEditedProduct } = useContext(adminContext)
    const [editProduct, setEditProduct] = useState(productToEdit)

    useEffect(() => {
        setEditProduct(productToEdit)
    }, [productToEdit])

    const handleInput = (e) => {
        let obj = {
            ...editProduct,
            [e.target.name]: e.target.value
        }
        setEditProduct(id)
    }

    const handleClick = () => {
        saveEditedProduct(editProduct)
        setChangeId(null)
    }

    return (
        <>
            {editProduct ? (
                <TableRow>
                    <TableCell align="right"><button disabled>Delete</button></TableCell>
                    <TableCell align="right"><button onClick={handleClick}>Save</button></TableCell>
                    <TableCell component="th" scope="row"> <input onChange={handleInput} value={editProduct.title} name="title" type="text" /> </TableCell>
                    <TableCell align="right"> <input onChange={handleInput} value={editProduct.image} type="text" name="image" /> </TableCell>
                    <TableCell align="right"> <input onChange={handleInput} value={editProduct.description} type="text" name="description" /> </TableCell>
                    <TableCell align="number"> <input onChange={handleInput} value={editProduct.price} type="text" name="price" /> </TableCell>
                    <TableCell align="right"> <input onChange={handleInput} value={editProduct.meat} type="text" name="author" /> </TableCell>
                </TableRow>
            ) : (null)}
        </>
    );
};

export default EditProductPage;