"use client";

import 'react-toastify/dist/ReactToastify.css';
import React from "react";

export default function AuthLayoutComponent({ children, image }) {
  return (
    <div>
      <main className="auth-layout-body">
        <div className="container-fluid auth-layout-container">
          <div className="row auth-layout-row">
            <div className="col-md-6 auth-hero-container" style={{ background: `url(${image})` }} />
            <div className="col-md-6 col-sm-12">
              {/* <div className="row auth-margin">
                <div className="col-md-12 col-12 text-center h-70">
                  <img
                    className="auth-logo"
                    src="/images/tagline-logo.svg"
                    alt="tagline-logo"
                  />
                </div>
              </div> */}
              {children}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
