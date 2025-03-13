"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Router from 'next/router';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { ToastContainer, toast } from 'react-toastify';
import Cookies from "js-cookie";

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

      // Uncomment if you plan to implement login with API
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
      <ToastContainer />
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



// "use client"

// import React, { Component } from "react";
// import Link from "next/link";
// // import Router from 'next/router';
// // import { useRouter } from "next/navigation";
// // import { useRouter } from "next/router";
// import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
// import { ToastContainer, toast } from 'react-toastify';
// // import { loginAPI } from "../../services/login-service";
// import Cookies from "js-cookie";

// const PASSWORD_REGEX = /^[a-zA-Z0-9.!#$%&'*+@/=?^_`():;,"<>{|}~-]{6,}$/;
// // const router = useRouter();

// import dynamic from "next/dynamic";
// const Router = dynamic(() => import('next/router'), { ssr: false });

// export default class Login extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             email: "",
//             password: ""
//         }
//     }


//     ValidateEmail = (mail) => {
//         // return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
//         return /^[a-zA-Z]{1}\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,100})+$/.test(
//             mail
//         )
//     }

//     ValidatePassword = (password) => {
//         return PASSWORD_REGEX.test(password)
//     }

//     validateData = () => {

//         if (this.state.email === '' && this.state.password === '') {
//             toast.error('Please enter email address and password')
//             return false
//         }

//         if (this.state.email === '') {
//             toast.error('Please enter email address')
//             return false
//         }

//         if (!this.ValidateEmail(this.state.email)) {
//             toast.error("Please enter a valid email address")
//             return false
//         }

//         if (this.state.password === '') {
//             toast.error('Please enter Password')
//             return false
//         }

//         // if (!this.ValidatePassword(this.state.password)) {
//         //     toast.error("Please enter a password with more than 6 characters")
//         //     return false
//         // }

//         return true
//     }

//     logIn = () => {
//         if (this.validateData()) {
//             let data = {
//                 "email": this.state.email,
//                 "password": this.state.password
//             };
//             if (data.email === "admin@billmanagemnetsystem.com" && data.password === "password") {
//                 toast.success('Login successfully');
//                 // Cookies.set("access_token_admin", data?.access_token);
//                 // router.push('/dashboard')
//                 Router.push('/dashboard')
//                 // window.open('/dashboard');
//             } else {
//                 toast.error('Unable to process your request, please try after sometime.', {autoClose: 5000,});
//             }

//             // Just for a representation if we need to implement the login facility through an API

//             // loginAPI.login(data).then(response => {
//             //     if (response?.data?.httpStatusCode === 200) {
//             //         let data = response.data.data
//             //         toast.success(response?.data?.message)
//             //         Cookies.set("access_token_admin", data?.access_token)
//             //         Router.push('/dashboard')
//             //     }
//             // }).catch(error => {
//             //     toast.error((error?.response && error?.response?.data && error?.response?.data?.message) ? error.response.data.message : 'Unable to process your request, please try after sometime.', {
//             //         autoClose: 5000,
//             //     })
//             // })
//         }
//     }


//     render() {
//         return (
//             <div data-component='login'>
//                 <div className="admin-login">
//                     <span>bill management system login</span>
//                 </div>
//                 <div className="login-form">
//                     <label>Email<span className="mandatory-star">*</span></label>
//                     <input type="text" placeholder="Enter your email address"
//                         value={this.state.email}
//                         onChange={(e) => {
//                             this.setState({ email: e.target.value })
//                         }}
//                     />
//                 </div>
//                 <div className="login-form">
//                     <label>Password<span className="mandatory-star">*</span></label>
//                     <input type="password" placeholder="Enter your password"
//                         value={this.state.password}
//                         onChange={(e) => {
//                             this.setState({ password: e.target.value })
//                         }}
//                     />
//                 </div>
//                 <div className="custom-btn " onClick={() => this.logIn()}>
//                     <span>Login </span>
//                     <ArrowForwardIosIcon className='arrow-icon' />
//                 </div>

//             </div>
//         )
//     }
// }
