"use client";

import React from "react";
import { useSelector } from "react-redux";
import DashboardLayoutComponent from "./component/layouts/dashboard-layout/dashboard-layout";

const BillsTable = () => {
    const bills = useSelector((state) => state.bill.bills);

    return (
        <main>
            <DashboardLayoutComponent>
                <div page-component="Dashboard">
                    <div data-component="bill-table">
                        <div className="container-fluid">
                            <div>
                                {console.log(bills, "bills")}
                                <h2>Bill Table</h2>
                                <div className="billTableHead row">
                                    <div className="col-3">Customer Name</div>
                                    <div className="col-3">Mobile Number</div>
                                    <div className="col-3">Address</div>
                                    <div className="col-3">Billing Date</div>
                                </div>

                                {bills.length === 0 ? (
                                    <div className="text-center my-3">No bills available</div>
                                ) : (
                                    bills.map((bill, index) => (

                                        <div className="billTableRow my-3" key={index}>
                                            <div className="row">
                                                <div className="col-3">{bill.customerName}</div>
                                                <div className="col-3">{bill.mobileNumber}</div>
                                                <div className="col-3">{bill.address}</div>
                                                <div className="col-3">{bill.billingDate}</div>
                                            </div>
                                            <div className="billTableHeadProducts">
                                                Products
                                            </div>
                                            {bill.products.map((p, idx) => (
                                                <div key={idx}>
                                                    {p.name} - {p.quantity} x {p.price} = {p.total}
                                                </div>
                                            ))}
                                        </div>
                                    ))
                                )}

                                {/* <div className="billTableRow my-3">
                                    <div className="row">
                                        <div className="col-3">Customer Name</div>
                                        <div className="col-3">Mobile Number</div>
                                        <div className="col-3">Address</div>
                                        <div className="col-3">Billing Date</div>
                                    </div>
                                    <div className="billTableHeadProducts">
                                        Products
                                    </div>
                                    <div>
                                        name - quantity x price = total
                                    </div>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>

            </DashboardLayoutComponent>
        </main>

    );
};

export default BillsTable;
