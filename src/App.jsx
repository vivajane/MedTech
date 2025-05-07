import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import HomePage from "./Pages/HomePage";
import Footer from "./Components/Footer";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import { useLocation } from "react-router-dom";
import DashBoards from "./Pages/DashBoards";
import DoctorsDesc from "./Pages/DoctorsDesc";
import AllDoctors from "./Pages/AllDoctors";
import Appointment from "./Pages/Appointment";
import AppointmentPage from "./Pages/AppointmentPage";
import SubmitAppointment from "./Pages/SubmitAppointment";


const Layout = ({ children }) => {
  const location = useLocation();
  const removeLogin =
    location.pathname === "/login" || location.pathname === "/signup";
  return (
    <div>
      {!removeLogin && <Header />}
      {children}
      {!removeLogin && <Footer />}
    </div>
  );
};

function App({setAdd, add}) {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/dashboard" element={<DashBoards/>}></Route>
          <Route path="/alldoctors" element={<AllDoctors/>}></Route>
          <Route path="/doctordesc/:doctordescId" element={<DoctorsDesc/>}></Route>
          <Route path="/appointment" element ={<Appointment setAdd={setAdd} />}></Route>
          <Route path="/appointmentpage" element ={<AppointmentPage />}></Route>
          <Route path="/submit-appointment" element ={<SubmitAppointment add= {add} setAdd={setAdd} />}></Route>
          
        </Routes>
      </Layout>
    </>
  );
}

export default App;
