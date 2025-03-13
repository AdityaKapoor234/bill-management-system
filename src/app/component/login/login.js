"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { toast } from 'react-toastify';
// import Cookies from "js-cookie";

const PASSWORD_REGEX = /^[a-zA-Z0-9.!#$%&'*+@/=?^_`():;,"<>{|}~-]{6,}$/;

const Login = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Email validation
  const ValidateEmail = (mail) => {
    return /^[a-zA-Z]{1}\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,100})+$/.test(mail);
  };

  // Password validation
  const ValidatePassword = (password) => {
    return PASSWORD_REGEX.test(password);
  };

  // Validate form data
  const validateData = () => {
    if (email === '' && password === '') {
      toast.error('Please enter email address and password');
      return false;
    }

    if (email === '') {
      toast.error('Please enter email address');
      return false;
    }

    if (!ValidateEmail(email)) {
      toast.error("Please enter a valid email address");
      return false;
    }

    if (password === '') {
      toast.error('Please enter Password');
      return false;
    }

    return true;
  };

  // Handle login logic
  const logIn = () => {
    if (validateData()) {
      let data = {
        email: email,
        password: password,
      };
      
      if (data.email === "admin@billmanagemnetsystem.com" && data.password === "password") {
        toast.success('Login successfully');
        // Cookies.set("access_token_admin", data?.access_token);
        router.push('/dashboard'); // Navigate to the dashboard
      } else {
        toast.error('Unable to process your request, please try after sometime.', { autoClose: 5000 });
      }

      // If we want to implement Login through API then this method can be followed
      // loginAPI.login(data).then(response => {
      //   if (response?.data?.httpStatusCode === 200) {
      //     let data = response.data.data;
      //     toast.success(response?.data?.message);
      //     Cookies.set("access_token_admin", data?.access_token);
      //     router.push('/dashboard');
      //   }
      // }).catch(error => {
      //   toast.error(
      //     (error?.response && error?.response?.data && error?.response?.data?.message) ? error.response.data.message : 'Unable to process your request, please try after sometime.',
      //     { autoClose: 5000 }
      //   );
      // });
    }
  };

  return (
    <div data-component="login">
      <div className="admin-login">
        <span>Bill Management System Login</span>
      </div>
      <div className="login-form">
        <label>Email<span className="mandatory-star">*</span></label>
        <input
          type="text"
          placeholder="Enter your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)} // Update email state
        />
      </div>
      <div className="login-form">
        <label>Password<span className="mandatory-star">*</span></label>
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)} // Update password state
        />
      </div>
      <div className="custom-btn" onClick={logIn}>
        <span>Login</span>
        <ArrowForwardIosIcon className="arrow-icon" />
      </div>
    </div>
  );
};

export default Login;


