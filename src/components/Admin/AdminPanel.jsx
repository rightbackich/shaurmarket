import React from 'react';
import AddProductPage from './AddProductPage';

const AdminPanel = () => {
    return (
        <div>
            Admin Panel
            <AddProductPage />
            <CustomTable />
        </div>
    );
};

export default AdminPanel;