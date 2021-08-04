import React, { useContext, useEffect, useState } from 'react';
import { adminContext } from '../../contexts/AdminContext';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';

const CustomTable = () => {
    const { getProducts, products, deleteProduct, getProductToEdit } = useContext(adminContext)

    useEffect(() => {
        getProducts()
    }, [])

    const [changeId, setChangeId] = useState(null)

    const handleEditChange = (id) => {
        getProductToEdit(id)
        setChangeId(id)
    }

    return (
        <TableContainer component={Paper}>
            <Table size="small" aria-label="a dense table">
                <TableHead>
                    <TableRow>
                        <TableCell>#</TableCell>
                        <TableCell>#</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell align="right">Photo</TableCell>
                        <TableCell align="right">Description</TableCell>
                        <TableCell align="right">Price</TableCell>
                        <TableCell align="right">Author</TableCell>
                        <TableCell align="right">Discount (%)</TableCell>
                        <TableCell align="right">Phone number</TableCell>
                        <TableCell align="right">Category</TableCell>
                        <TableCell align="right">Col</TableCell>
                        <TableCell align="right">Location</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        products ? (
                            <>
                                {
                                    products.length ? (
                                        products.map(product => (
                                            <React.Fragment key={product.id}>
                                                {
                                                    changeId === product.id ? (
                                                        <Edit setChangeId={setChangeId} />
                                                    ) : (
                                                        <TableRow>
                                                            <TableCell align="right"><button onClick={() => deleteProduct(product.id)}>Delete</button></TableCell>
                                                            <TableCell align="right"><button onClick={() => handleEditChange(product.id)}>Edit</button></TableCell>
                                                            <TableCell component="th" scope="row">{product.title}</TableCell>
                                                            <TableCell align="right"><img width={100} src={product.image} /></TableCell>
                                                            <TableCell align="right">{product.description} </TableCell>
                                                            <TableCell align="right">{product.meat} </TableCell>
                                                            <TableCell align="right">{product.price} </TableCell>

                                                        </TableRow>
                                                    )
                                                }
                                            </React.Fragment>
                                        ))
                                    ) : (
                                        <h1>Empty</h1>
                                    )
                                }
                            </>
                        ) : (
                            <h1>loading</h1>
                        )
                    }
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default CustomTable;