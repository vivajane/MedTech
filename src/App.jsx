import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import HomePage from "./Pages/HomePage";
import Footer from "./Components/Footer";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import Dashboard from "./Components/Dashboard";


function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<SignUp/>}></Route>
        <Route path="/dashboard" element={<Dashboard/>}></Route>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
