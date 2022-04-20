import React, { useState } from "react";
import SignInSingUp from "./pages/SignInSingUp";
import { ToastContainer } from "react-toastify"


export default function App() {
  const [user, setUser] = useState();

  return( 
    <div>
      {user ? (
        <div>
          <h1>Estas Logueado</h1>
        </div>
      ) : (
        <SignInSingUp />
      )}
      <ToastContainer 
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnVisibilityChange
        draggable
        pauseOnHover
      />
    </div>
  );
}
