"use client";

import React from "react";
import Head from "next/head";
import { ToastContainer } from "react-toastify";
import { Geist, Geist_Mono } from "next/font/google";
import { Provider } from "react-redux";
import store from "./redux/store";
// import BillsTable from "../components/BillsTable";
import "react-toastify/dist/ReactToastify.css";
import "./globals.css";
import "./styles/auth-styles.scss";
import "./styles/component-styles.scss";
import "./styles/dashboard-styles.scss";
import "./styles/global.scss";
import "bootstrap/dist/css/bootstrap.min.css"

// Dynamically import AppRouter to ensure it's only rendered on the client side
import dynamic from "next/dynamic";
const AppRouter = dynamic(() => import("./router"), { ssr: false });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <Provider store={store}>
      <html lang="en">
        <Head>
          <title>Bill Management System</title>
          <meta name="description" content="Bill Management System" />
          <link rel="icon" href="/favicon.ico" />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
          />
        </Head>
        <body className={`${geistSans.variable} ${geistMono.variable}`}>
          <AppRouter>
            {children}
          </AppRouter>
        </body>
      </html>
      <ToastContainer />
    </Provider>
  );
}
