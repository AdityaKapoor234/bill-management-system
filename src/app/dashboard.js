"use client";

import React, { useState } from "react";
import { Container, TextField, Button, Typography, Paper } from "@mui/material";
import { useDispatch } from "react-redux";
import { addBill } from "./redux/billSlice";
import DashboardLayoutComponent from "./component/layouts/dashboard-layout/dashboard-layout";

const BillGenerator = () => {

    return (
        <main>
            <DashboardLayoutComponent>
                <div page-component="Dashboard">
                    <div className="container-fluid">
                        Dashboard
                    </div>
                </div>

            </DashboardLayoutComponent>
        </main>

    );
};

export default BillGenerator;
