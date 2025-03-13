"use client"

import Head from 'next/head'
import Image from 'next/image'
import { toast } from 'react-toastify';
import { useState, useEffect } from "react";
import AuthLayoutComponent from "./component/layouts/auth-layout/auth-layout";
import Login from './component/login/login';

export default function Home() {

  return (
    <div>
      <Head>
        <title>Bill Management System - login</title>
        <meta name="description" content="Bill MAnagement System" />
        <link rel="icon" href="/fitcart.ico" />
        </Head>

      <main>
      <AuthLayoutComponent image={"/images/login.png"}>
        <div className='row justify-content-center margin-login '>
          <div className='col-8 p-0 '>
            <Login/>
          </div>
        </div>
      </AuthLayoutComponent>
      </main>

      
    </div>
  )
}
