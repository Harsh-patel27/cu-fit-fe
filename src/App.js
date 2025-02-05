import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Signup from "./pages/signup";
import Login from "./pages/login";
import CalendarPage from "./pages/Calender";
import MealPlan from "./pages/MealPlan";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/calender" element={<CalendarPage />} />
        <Route path="/mealplan" element={<MealPlan />} />
      </Routes>
    </Router>
  );
}

export default App;
