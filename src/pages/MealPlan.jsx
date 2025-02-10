import React, { useState } from "react";

const MealPlan = () => {
  const [selectedMeals, setSelectedMeals] = useState([]); // ✅ Correct for JSX
  const [showSubscription, setShowSubscription] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);
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

  const basePrices = {
    1: {
      weekly: 4.99,
      monthly: 14.99,
      threeMonth: 39.99,
      sixMonth: 69.99,
      annual: 119.99,
    },
    2: {
      weekly: 8.99,
      monthly: 29.99,
      threeMonth: 79.99,
      sixMonth: 149.99,
      annual: 279.99,
    },
    3: {
      weekly: 11.99,
      monthly: 39.99,
      threeMonth: 109.99,
      sixMonth: 199.99,
      annual: 379.99,
    },
    4: {
      weekly: 14.99,
      monthly: 49.99,
      threeMonth: 139.99,
      sixMonth: 259.99,
      annual: 479.99,
    },
  };

  const getSubscriptionPlans = () => {
    const mealCount = selectedMeals.length;
    const prices = basePrices[mealCount];

    return [
      {
        id: 1,
        name: "Weekly Plan",
        price: prices.weekly,
        duration: "1 Week",
        icon: "📅",
        features: [
          "Perfect for trial",
          "No long-term commitment",
          "Full menu access",
        ],
      },
      {
        id: 2,
        name: "Monthly Plan",
        price: prices.monthly,
        duration: "1 Month",
        icon: "📆",
        features: [
          "Save 10%",
          "Monthly menu updates",
          "Flexible meal selection",
        ],
        popular: true,
      },
      {
        id: 3,
        name: "3 Months Plan",
        price: prices.threeMonth,
        duration: "3 Months",
        icon: "🗓️",
        features: ["Save 15%", "Priority selection", "Free delivery"],
      },
      {
        id: 4,
        name: "6 Months Plan",
        price: prices.sixMonth,
        duration: "6 Months",
        icon: "📅",
        features: [
          "Save 20%",
          "Premium menu access",
          "Nutritionist consultation",
        ],
      },
      {
        id: 5,
        name: "Annual Plan",
        price: prices.annual,
        duration: "1 Year",
        icon: "🎯",
        features: [
          "Best value - Save 25%",
          "All premium features",
          "Personal meal planning",
        ],
      },
    ];
  };

  const handleMealSelection = (mealId) => {
    setSelectedMeals((prev) => {
      if (!Array.isArray(prev)) return []; // Ensure prev is always an array
      if (prev.includes(mealId)) {
        return prev.filter((id) => id !== mealId);
      }
      if (prev.length >= 4) return prev;
      return [...prev, mealId]; // Ensure mealId is properly added
    });
  };
  
  const handleMealSubmit = () => {
    if (selectedMeals.length < 1) {
      alert("Please select at least 1 meal");
      return;
    }
    setShowSubscription(true);
  };

  const handlePlanSelection = (planId) => {
    setSelectedPlan(planId);
  };

  const handleSubscriptionSubmit = async () => {
    if (!selectedPlan) {
      alert("Please select a subscription plan");
      return;
    }

    setIsSubmitting(true);
    try {
      // Replace with your API endpoint
      // const response = await fetch("/api/subscription", {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify({
      //     selectedMeals,
      //     selectedPlan,
      //   }),
      // });

      // if (!response.ok) throw new Error("Failed to submit");

      alert("Subscription plan selected successfully!");
      setSelectedMeals([]);
      setSelectedPlan(null);
      setShowSubscription(false);
    } catch (error) {
      console.error("Error submitting subscription:", error);
      alert("Failed to submit subscription. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setSelectedMeals([]);
    setSelectedPlan(null);
    setShowSubscription(false);
  };

  return (
    <>
      {/* <header className="bg-green-600 text-white py-4 mb-8">
        <div className="max-w-4xl mx-auto px-4">
          <a
            href="/"
            className="text-2xl font-bold hover:text-green-100 transition-colors"
          >
            CU Fit
          </a>
        </div>
      </header> */}

      <div className="max-w-6xl mx-auto px-4 py-8">
        {!showSubscription ? (
          <>
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-green-600 mb-4">
                Meal Plan
              </h1>
              <h2 className="text-xl text-gray-600 mb-2">
                Select Your Daily Meals
              </h2>
              <p className="text-sm text-gray-500">
                Choose minimum 1 and maximum 4 meals
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
      {mealOptions?.length > 0 ? (
        mealOptions.map((meal) => (
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
                    ✅
                  </div>
                ) : (
                  <div className="border-2 border-gray-300 rounded-full w-6 h-6"></div>
                )}
              </div>
            </div>
          </div>
        ))
      ) : (
        <p className="text-gray-500">No meals available.</p>
      )}
    </div>

            <div className="text-center">
              <p className="text-gray-600 mb-6">
                Selected meals: {selectedMeals.length}/4
              </p>
              <button
                onClick={handleMealSubmit}
                disabled={selectedMeals.length < 1}
                className={`
                  px-8 py-3 bg-green-600 text-white rounded-lg text-lg transition-colors
                  ${
                    selectedMeals.length < 1
                      ? "opacity-50 cursor-not-allowed"
                      : "hover:bg-green-700"
                  }
                `}
              >
                Continue to Subscription
              </button>
            </div>
          </>
        ) : (
          <>
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-green-600 mb-4">
                Choose Your Subscription
              </h1>
              <h2 className="text-xl text-gray-600 mb-4">
                Select a Plan for {selectedMeals.length} Meal
                {selectedMeals.length > 1 ? "s" : ""}
              </h2>
              <p className="text-lg text-gray-500 max-w-2xl mx-auto">
                Affordable meal plans designed for students. Eat healthy without
                breaking the bank!
                <span className="block mt-2 text-green-600 font-medium">
                  Save more with longer subscriptions
                </span>
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {getSubscriptionPlans().map((plan) => (
                <div
                  key={plan.id}
                  onClick={() => handlePlanSelection(plan.id)}
                  className={`
                    relative p-6 rounded-xl border-2 cursor-pointer transition-all
                    ${
                      selectedPlan === plan.id
                        ? "border-green-500 bg-green-50"
                        : "border-gray-200 hover:border-green-300"
                    }
                    ${plan.popular ? "transform hover:-translate-y-1" : ""}
                  `}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-green-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                        Most Popular
                      </span>
                    </div>
                  )}

                  <div className="text-center mb-4">
                    <span className="text-3xl mb-2 block">{plan.icon}</span>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                      {plan.name}
                    </h3>
                    <div className="text-green-600 font-bold mb-2">
                      <span className="text-3xl">${plan.price}</span>
                      <span className="text-gray-500 text-base font-normal">
                        {" "}
                        CAD
                      </span>
                    </div>
                    <p className="text-gray-600">{plan.duration}</p>
                  </div>

                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, index) => (
                      <li
                        key={index}
                        className="flex items-center text-gray-600"
                      >
                        <svg
                          className="h-5 w-5 text-green-500 mr-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="absolute bottom-6 right-6">
                    {selectedPlan === plan.id ? (
                      <div className="bg-green-500 text-white rounded-full p-2">
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
              ))}
            </div>

            <div className="text-center">
              <div className="space-x-4">
                <button
                  onClick={handleReset}
                  className="px-6 py-2 border-2 border-gray-300 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors"
                >
                  Back
                </button>
                <button
                  onClick={handleSubscriptionSubmit}
                  disabled={!selectedPlan || isSubmitting}
                  className={`
                    px-8 py-3 bg-green-600 text-white rounded-lg text-lg transition-colors
                    ${
                      !selectedPlan || isSubmitting
                        ? "opacity-50 cursor-not-allowed"
                        : "hover:bg-green-700"
                    }
                  `}
                >
                  {isSubmitting ? "Processing..." : "Subscribe Now"}
                </button>
              </div>

              <p className="mt-4 text-sm text-gray-500">
                * Prices are in Canadian Dollars (CAD). Taxes may apply.
              </p>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default MealPlan;
