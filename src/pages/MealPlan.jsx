import React, { useState } from "react";

const MealPlan = () => {
  const [selectedMeals, setSelectedMeals] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const mealOptions = [
    {
      id: 1,
      name: "Breakfast",
      icon: "🌅",
      description: "Start your day with a healthy breakfast",
    },
    {
      id: 2,
      name: "Snack",
      icon: "🍎",
      description: "Healthy bites between meals",
    },
    {
      id: 3,
      name: "Lunch",
      icon: "🥗",
      description: "Nutritious midday meal",
    },
    {
      id: 4,
      name: "Dinner",
      icon: "🍽️",
      description: "Complete your day with a balanced dinner",
    },
  ];

  const handleMealSelection = (mealId) => {
    setSelectedMeals((prev) => {
      if (prev.includes(mealId)) {
        return prev.filter((id) => id !== mealId);
      }
      if (prev.length >= 4) return prev;
      return [...prev, mealId];
    });
  };

  const handleReset = () => {
    setSelectedMeals([]);
  };

  const handleSubmit = async () => {
    if (selectedMeals.length < 1) {
      alert("Please select at least 1 meal");
      return;
    }

    setIsSubmitting(true);
    try {
      // Replace with your API endpoint
      // const response = await fetch("/api/meal-plan", {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify({ selectedMeals }),
      // });

      // if (!response.ok) throw new Error("Failed to submit");

      alert("Meal plan submitted successfully!");
      handleReset();
    } catch (error) {
      console.error("Error submitting meal plan:", error);
      alert("Failed to submit meal plan. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <header className="text-blue-600 py-4 mb-8">
        <div className="max-w-4xl mx-auto px-4">
          <a
            href="/"
            className="text-2xl font-bold hover:text-blue-100 transition-colors"
          >
            CU Fit
          </a>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-green-600 mb-4">Meal Plan</h1>
          <h2 className="text-xl text-gray-600 mb-2">
            Select Your Daily Meals
          </h2>
          <p className="text-sm text-gray-500">
            Choose minimum 1 and maximum 4 meals
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {mealOptions.map((meal) => (
            <div
              key={meal.id}
              onClick={() => handleMealSelection(meal.id)}
              className={`
                p-6 rounded-lg border-2 cursor-pointer transition-all
                ${
                  selectedMeals.includes(meal.id)
                    ? "border-green-500 bg-green-50"
                    : "border-gray-200 hover:border-green-300"
                }
              `}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <span className="text-3xl">{meal.icon}</span>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">
                      {meal.name}
                    </h3>
                    <p className="text-gray-600 text-sm">{meal.description}</p>
                  </div>
                </div>
                <div className="flex-shrink-0 w-8">
                  {selectedMeals.includes(meal.id) ? (
                    <div className="bg-green-500 text-white rounded-full p-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  ) : (
                    <div className="border-2 border-gray-300 rounded-full w-6 h-6"></div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <p className="text-gray-600 mb-6">
            Selected meals: {selectedMeals.length}/4
          </p>

          <div className="space-x-4">
            <button
              onClick={handleReset}
              className="px-6 py-2 border-2 border-gray-300 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={handleSubmit}
              disabled={selectedMeals.length < 1 || isSubmitting}
              className={`px-6 py-2 bg-green-600 text-white rounded-lg transition-colors
                ${
                  selectedMeals.length < 1 || isSubmitting
                    ? "opacity-50 cursor-not-allowed"
                    : "hover:bg-green-700"
                }`}
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MealPlan;
