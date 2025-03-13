"use client";

import React, { useState } from "react";
import { Container, TextField, Button, Typography, Paper } from "@mui/material";
import { useDispatch } from "react-redux";
import { addBill } from "./redux/billSlice";
import { toast } from 'react-toastify';
import DashboardLayoutComponent from "./component/layouts/dashboard-layout/dashboard-layout";

const BillGenerator = () => {
    const dispatch = useDispatch();
    const [customerName, setCustomerName] = useState("");
    const [mobileNumber, setMobileNumber] = useState("");
    const [address, setAddress] = useState("");
    const [billingDate, setBillingDate] = useState("");
    const [products, setProducts] = useState([{ name: "", quantity: "", price: "", total: "" }]);

    const handleProductChange = (index, event) => {
        const newProducts = [...products];
        newProducts[index][event.target.name] = event.target.value;
        newProducts[index].total = newProducts[index].quantity * newProducts[index].price;
        setProducts(newProducts);
    };

    const addProductField = () => {
        setProducts([...products, { name: "", quantity: "", price: "", total: "" }]);
    };

    const handleSubmit = () => {
        if (!customerName || !mobileNumber || !address || !billingDate || products.some(p => !p.name || !p.quantity || !p.price)) {
            toast.error("Please fill out all fields!");
            return;
        }

        let obj = {
            customerName: customerName,
            mobileNumber: mobileNumber,
            address: address,
            billingDate: billingDate,
            products: products
        };

        dispatch(addBill(obj));

        setCustomerName("");
        setMobileNumber("");
        setAddress("");
        setBillingDate("");
        setProducts([{ name: "", quantity: "", price: "", total: "" }]);

        
        toast.success("Bill Generated Successfully!");
    };

    return (
        <main>
            <DashboardLayoutComponent>
                <div page-component="Dashboard">
                    <div className="container-fluid">
                        <Container component={Paper} sx={{ padding: 3 }}>
                            <Typography variant="h5">Bill Generator</Typography>
                            <TextField
                                label="Customer Name"
                                fullWidth
                                margin="normal"
                                value={customerName}
                                onChange={(e) => setCustomerName(e.target.value)}
                            />
                            <TextField
                                label="Mobile Number"
                                fullWidth
                                margin="normal"
                                value={mobileNumber}
                                onChange={(e) => setMobileNumber(e.target.value)}
                            />
                            <TextField
                                label="Address"
                                fullWidth
                                margin="normal"
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                            />
                            <TextField
                                label="Billing Date"
                                type="date"
                                fullWidth
                                margin="normal"
                                value={billingDate}
                                onChange={(e) => setBillingDate(e.target.value)}
                            />
                            {products.map((product, index) => (
                                <div key={index}>
                                    <TextField
                                        label="Product Name"
                                        name="name"
                                        margin="normal"
                                        value={product.name}
                                        onChange={(e) => handleProductChange(index, e)}
                                    />
                                    <TextField
                                        label="Quantity"
                                        type="number"
                                        name="quantity"
                                        margin="normal"
                                        value={product.quantity}
                                        onChange={(e) => handleProductChange(index, e)}
                                    />
                                    <TextField
                                        label="Price"
                                        type="number"
                                        name="price"
                                        margin="normal"
                                        value={product.price}
                                        onChange={(e) => handleProductChange(index, e)}
                                    />
                                    <TextField label="Total" name="total" margin="normal" value={product.total} disabled />
                                </div>
                            ))}
                            <Button variant="contained" onClick={addProductField} sx={{ margin: 2 }}>
                                Add Product
                            </Button>
                            <Button variant="contained" onClick={handleSubmit}>
                                Generate Bill
                            </Button>
                        </Container>
                    </div>
                </div>

            </DashboardLayoutComponent>
        </main>

    );
};

export default BillGenerator;
