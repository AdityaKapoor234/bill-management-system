"use client";

import React from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useLocation } from 'react-router-dom';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import LocalGroceryStoreOutlinedIcon from '@mui/icons-material/LocalGroceryStoreOutlined';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import DashboardIcon from '@mui/icons-material/Dashboard';
import LogoutIcon from '@mui/icons-material/Logout';

export default function DashboardLayoutComponent({ children }) {

    const pathArr = useLocation().pathname.split("/")[1];
    const router = useRouter();

    const [tab, setTab] = useState(pathArr);
    const [tabSale, setTabSale] = useState(pathArr === "customer-list" || pathArr === "bill-generator" ? true : false);
    const [categary, setCategary] = useState(pathArr);
    const [logout, setLogout] = useState(false);
    const [email, setEmail] = useState("admin@bmsys.com");

    const handleCategary = (url, value) => {
        router.push(url)
        setCategary(value)
        setTab('')
    }
    const handleDashboard = () => {
        router.push("/dashboard")
        setTab("dashboard")
        setCategary("")
    }
    const handleLogout = () => {
        // Cookies.remove("access_token_admin")
        router.push("/");
        setTimeout(() => {
            window.location.reload(false);
        }, 1000);
    }

    return (
        <div>
            <main className="dashboard-background">
                <div className='container-fluid '>
                    <div className='header'>
                        Bill Management System
                        {logout &&
                            <ul>
                                <li onClick={() => handleLogout()}><LogoutIcon className='logout-icon' />Logout</li>
                            </ul>
                        }
                        <div className='login'>{email} <ArrowDropDownIcon className={logout ? 'drop-icon icon-drop' : 'drop-icon'} onClick={() => { setLogout(!logout) }} /></div>
                    </div>
                    <div className='main-module'>
                        <div className='module-menu'>
                            <div className='menu'>
                                <div className={tab === "dashboard" ? 'menu-btn active' : 'menu-btn'} onClick={() => handleDashboard()}>
                                    <span>
                                        {tab === "dashboard" ? <DashboardIcon className='outline-icon' /> : <DashboardOutlinedIcon className='outline-icon' />}
                                        dashboard
                                    </span>
                                </div>
                                <div className={tabSale ? 'menu-btn active' : 'menu-btn'} onClick={() => setTabSale(!tabSale)}>
                                    <span>
                                        {tabSale ? <LocalGroceryStoreIcon className='outline-icon' /> : <LocalGroceryStoreOutlinedIcon className='outline-icon' />}
                                        sales
                                    </span>
                                    <ArrowDropDownIcon className='drop-icon' />
                                </div>
                                {tabSale &&
                                    <ul>
                                        <li className={categary === "customer-list" ? "sub_active" : ""} onClick={() => handleCategary("/customer-list", "customer-list")}>customer list</li>
                                        <li className={categary === "bill-generator" ? "sub_active" : ""} onClick={() => handleCategary("/bill-generator", "bill-generator")}>bill generator</li>
                                    </ul>
                                }



                            </div>

                        </div>
                        <div className='main-componemt'>
                            {children}
                        </div>

                    </div>
                </div>
            </main>
        </div>
    )
}

