"use client";

import AuthLayoutComponent from "./component/layouts/auth-layout/auth-layout";
import Login from './component/login/login';

export default function Home() {

  return (
    <div>

      <main>
        <AuthLayoutComponent image={"/images/login.png"}>
          <div className='row justify-content-center margin-login '>
            <div className='col-8 p-0 '>
              <Login />
            </div>
          </div>
        </AuthLayoutComponent>
      </main>


    </div>
  )
}
