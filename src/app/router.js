import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./dashboard";
import CustomerList from "./customer-list";
import BillGenerator from "./bill-generator";
// import NotFound from "./pages/NotFound";

const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/customer-list" element={<CustomerList />} />
                <Route path="/bill-generator" element={<BillGenerator />} />
                {/* Catch all other routes */}
                {/* <Route path="*" element={<NotFound />} /> */}
            </Routes>
        </Router>
    );
};

export default AppRouter;
