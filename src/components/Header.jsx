import React from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path ? "text-green-300" : "text-white";
  };

  return (
    <header className="bg-green-600 text-white py-4 sticky top-0 z-50 shadow-md">
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
        <Link
          to="/"
          className="text-2xl font-bold hover:text-green-100 transition-colors"
        >
          CU Fit
        </Link>

        {/* <nav className="flex space-x-6">
          <Link
            to="/calender"
            className={`hover:text-green-100 transition-colors ${isActive(
              "/calender"
            )}`}
          >
            Calendar
          </Link>
          <Link
            to="/mealplan"
            className={`hover:text-green-100 transition-colors ${isActive(
              "/mealplan"
            )}`}
          >
            Meal Plan
          </Link>
         <Link
           to="/diet-preference"
           className={`hover:text-green-100 transition-colors ${isActive("/diet-preference")}`}
         >
           Diet Preference
         </Link>

        </nav> */}
      </div>
    </header>
  );
};

export default Header;
