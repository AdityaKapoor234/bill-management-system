"use client";

import React from "react";
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
