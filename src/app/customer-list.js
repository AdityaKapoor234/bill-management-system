"use client";

import React from "react";
import { useSelector } from "react-redux";
import DashboardLayoutComponent from "./component/layouts/dashboard-layout/dashboard-layout";

const BillsTable = () => {
    const bills = useSelector((state) => state.bill.bills);

    const convertDateStringToDate = (dateStr) => {
        let months = [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
        ];

        let date = new Date(dateStr);
        let str =
            date.getDate() + " " + months[date.getMonth()] + " " + date.getFullYear();
        return str;
    };

    return (
        <main>
            <DashboardLayoutComponent>
                <div page-component="Dashboard">
                    <div data-component="bill-table">
                        <div className="container-fluid">
                            <div>
                                <h2>Customer Table</h2>
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
                                                <div className="col-3">{convertDateStringToDate(bill.billingDate)}</div>
                                            </div>
                                            <div className="billTableHeadProducts">
                                                Products
                                            </div>
                                            {bill.products.map((p, idx) => (
                                                <div key={idx}>
                                                    {idx+1}) {p.name} - {p.quantity}(Qty) x ₹{parseInt(p.price)?.toFixed(2).toString().replace(/\B(?=(?:(\d\d)+(\d)(?!\d))+(?!\d))/g, ',')}/- = ₹{parseInt(p.total)?.toFixed(2).toString().replace(/\B(?=(?:(\d\d)+(\d)(?!\d))+(?!\d))/g, ',')}/-
                                                </div>
                                            ))}
                                        </div>
                                    ))
                                )}
                            </div>
                        </div>
                    </div>
                </div>

            </DashboardLayoutComponent>
        </main>

    );
};

export default BillsTable;
