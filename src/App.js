import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Signup from "./pages/signup";
import Login from "./pages/login";
import CalendarPage from "./pages/Calender";
import MealPlan from "./pages/MealPlan";
import Header from "./components/Header";
import DietSelection from "./pages/DietSelection";
import GoalSelection from "./pages/GoalSelection";
import ActivityLevelSelection from "./pages/ActivityLevel";
import Dashboard from "./pages/Dashboard";
import DietPreference from "./pages/DietPreference"; 
import MealPlanSelection from "./pages/MealPlanSelection";
import PainAndInjuryForm from "./pages/PainAndInjuryForm";

const AppLayout = ({ children }) => {
    const isAuthPage = ["/login", "/signup"].includes(window.location.pathname);

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
                    <Route path="/diet-selection" element={<DietSelection />} />
                    <Route path="/goal-selection" element={<GoalSelection />} />
                    <Route path="/activity-level" element={<ActivityLevelSelection />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/diet-preference" element={<DietPreference />} /> 
                    <Route path="/meal-plan-selection" element={<MealPlanSelection />} />
                    <Route path="/pain-injury-form" element={<PainAndInjuryForm />} />
                </Routes>
            </AppLayout>
        </Router>
    );
}

export default App; // ✅ Ensure this is not duplicated
