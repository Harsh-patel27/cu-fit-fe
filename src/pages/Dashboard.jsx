const Dashboard = () => {
  // Example data matching our previous selection pages
  const userPlan = {
    name: "John Doe",
    diet: "Keto", // From DietSelection.jsx
    goals: [
      // From GoalSelection.jsx
      "Build Muscle",
      "Increase Strength",
      "Body Recomposition",
    ],
    activityLevel: "Very Active", // From ActivityLevel.jsx
    dailyCalories: 2800,
    waterIntake: "4L",
    currentWeight: "75kg",
    targetWeight: "82kg",
    todaysMeals: {
      breakfast: {
        time: "8:00 AM",
        items: ["Eggs & Bacon", "Avocado", "Bulletproof Coffee"],
        calories: 650,
      },
      lunch: {
        time: "1:00 PM",
        items: ["Grilled Chicken", "Spinach Salad", "MCT Oil Dressing"],
        calories: 750,
      },
      dinner: {
        time: "7:00 PM",
        items: ["Salmon", "Cauliflower Rice", "Asparagus"],
        calories: 600,
      },
      snacks: {
        time: "Various",
        items: ["Protein Shake", "Macadamia Nuts", "String Cheese"],
        calories: 400,
      },
    },
    todaysWorkout: [
      { name: "Bench Press", sets: "4x10", weight: "80kg" },
      { name: "Squats", sets: "4x8", weight: "100kg" },
      { name: "Pull-ups", sets: "3x12", weight: "Bodyweight" },
      { name: "Deadlifts", sets: "3x8", weight: "120kg" },
      { name: "Shoulder Press", sets: "3x10", weight: "45kg" },
    ],
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { label: "Current Diet", value: userPlan.diet, icon: "🥑" },
            {
              label: "Activity Level",
              value: userPlan.activityLevel,
              icon: "🏋️‍♀️",
            },
            {
              label: "Daily Calories",
              value: `${userPlan.dailyCalories} kcal`,
              icon: "🔥",
            },
            { label: "Water Goal", value: userPlan.waterIntake, icon: "💧" },
          ].map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 shadow-sm border border-gray-200"
            >
              <div className="flex items-center space-x-3">
                <span className="text-2xl">{stat.icon}</span>
                <div>
                  <p className="text-sm text-gray-500">{stat.label}</p>
                  <p className="text-lg font-semibold text-gray-900">
                    {stat.value}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Goals Section */}
        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            Your Fitness Goals
          </h2>
          <div className="flex flex-wrap gap-2">
            {userPlan.goals.map((goal, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium"
              >
                {goal}
              </span>
            ))}
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Meal Plan - Keto-focused meals */}
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold text-gray-900">
                Today's Keto Meals
              </h2>
              <span className="text-sm text-green-600 font-medium">
                {Object.values(userPlan.todaysMeals).reduce(
                  (acc, meal) => acc + meal.calories,
                  0
                )}{" "}
                kcal total
              </span>
            </div>
            <div className="space-y-4">
              {Object.entries(userPlan.todaysMeals).map(([meal, data]) => (
                <div
                  key={meal}
                  className="border-b border-gray-100 pb-4 last:border-0"
                >
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-medium text-gray-900 capitalize">
                      {meal}
                    </h3>
                    <span className="text-sm text-gray-500">{data.time}</span>
                  </div>
                  <div className="text-sm text-gray-600">
                    {data.items.join(", ")}
                  </div>
                  <div className="text-sm text-green-600 mt-1">
                    {data.calories} calories
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Workout Plan - Strength-focused */}
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Today's Strength Training
            </h2>
            <div className="divide-y divide-gray-100">
              {userPlan.todaysWorkout.map((exercise, index) => (
                <div key={index} className="py-3 first:pt-0 last:pb-0">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-gray-900">
                      {exercise.name}
                    </span>
                    <span className="text-sm text-gray-500">
                      {exercise.sets}
                    </span>
                  </div>
                  <div className="text-sm text-gray-600 mt-1">
                    Weight: {exercise.weight}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Progress Section */}
        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            Weight Progress
          </h2>
          <div className="flex items-center justify-around">
            <div className="text-center">
              <p className="text-sm text-gray-500">Current</p>
              <p className="text-2xl font-bold text-green-600">
                {userPlan.currentWeight}
              </p>
            </div>
            <div className="text-green-500">→</div>
            <div className="text-center">
              <p className="text-sm text-gray-500">Target</p>
              <p className="text-2xl font-bold text-green-600">
                {userPlan.targetWeight}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
