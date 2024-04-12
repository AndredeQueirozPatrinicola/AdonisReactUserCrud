import { Route, Routes } from "react-router-dom";

import { Login } from "./pages/Login";
import { Home } from "./pages/Home";
import ProtectedRoute from "./components/ProtectedRoute"

function App() {

  return (
    <Routes> 
      <Route path="/login" element={<Login />} />

      <Route path="/" element={<ProtectedRoute/>} >
          <Route path="/" element={<Home/>}/>
      </Route >

    </Routes> 
  )
}

export default App
