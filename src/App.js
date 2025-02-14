import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Signup from "./pages/signup";
import Login from "./pages/login";
import CalendarPage from "./pages/Calender";
import MealPlan from "./pages/MealPlan";
import Header from "./components/Header";
import { useLocation } from "react-router-dom";
import { Test } from "./pages/Test";
import DietSelection from "./pages/DietSelection";
import GoalSelection from "./pages/GoalSelection";
import ActivityLevelSelection from "./pages/ActivityLevel";
import Dashboard from "./pages/Dashboard";
const AppLayout = ({ children }) => {
  const location = useLocation();
  const isAuthPage = ["/login", "/signup"].includes(location.pathname);

  return (
    <>
      {!isAuthPage && <Header />}
      {children}
    </>
  );
};

function App() {
  return (
    <Router>
      <AppLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/calender" element={<CalendarPage />} />
          <Route path="/mealplan" element={<MealPlan />} />
          <Route path="/test" element={<Test />} />
          <Route path="/diet-selection" element={<DietSelection />} />
          <Route path="/goal-selection" element={<GoalSelection />} />
          <Route path="/activity-level" element={<ActivityLevelSelection />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </AppLayout>
    </Router>
  );
}

export default App;
