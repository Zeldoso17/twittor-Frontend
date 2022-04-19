import React, { useState } from "react";
import SignInSingUp from "./pages/SignInSingUp";


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
    </div>
  );
}
