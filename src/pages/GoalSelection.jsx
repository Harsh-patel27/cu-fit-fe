import { useState } from "react";

const fitnessGoals = [
  {
    id: "weight-loss",
    name: "Lose Weight",
    icon: "⚖️",
    description: "Reduce body fat while maintaining muscle mass",
  },
  {
    id: "muscle-gain",
    name: "Build Muscle",
    icon: "💪",
    description: "Increase muscle mass and strength",
  },
  {
    id: "get-lean",
    name: "Get Lean",
    icon: "🏃",
    description: "Reduce body fat while maintaining athletic performance",
  },
  {
    id: "maintain",
    name: "Maintain Fitness",
    icon: "🎯",
    description: "Keep current physique and improve overall health",
  },
  {
    id: "strength",
    name: "Increase Strength",
    icon: "🏋️‍♂️",
    description: "Focus on power and strength gains",
  },
  {
    id: "endurance",
    name: "Build Endurance",
    icon: "🏃‍♀️",
    description: "Improve stamina and cardiovascular fitness",
  },
  {
    id: "flexibility",
    name: "Improve Flexibility",
    icon: "🧘‍♀️",
    description: "Enhance range of motion and reduce injury risk",
  },
  {
    id: "sports",
    name: "Sports Performance",
    icon: "⚽",
    description: "Enhance athletic abilities for specific sports",
  },
  {
    id: "body-recomp",
    name: "Body Recomposition",
    icon: "🔄",
    description: "Simultaneously build muscle and lose fat",
  },
  {
    id: "powerlifting",
    name: "Powerlifting",
    icon: "🏋️",
    description: "Focus on maximizing squat, bench press, and deadlift",
  },
  {
    id: "calisthenics",
    name: "Calisthenics",
    icon: "🤸‍♂️",
    description: "Master bodyweight exercises and movements",
  },
  {
    id: "general-health",
    name: "General Health",
    icon: "❤️",
    description: "Improve overall wellness and quality of life",
  },
];

const GoalSelection = () => {
  const [selectedGoals, setSelectedGoals] = useState([]);

  const handleGoalSelect = (goalId) => {
    setSelectedGoals((prev) => {
      if (prev.includes(goalId)) {
        return prev.filter((id) => id !== goalId);
      } else {
        return [...prev, goalId];
      }
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            What Are Your Fitness Goals?
          </h1>
          <p className="text-gray-600">
            Choose one or more goals that match what you want to achieve
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {fitnessGoals.map((goal) => (
            <button
              key={goal.id}
              onClick={() => handleGoalSelect(goal.id)}
              className={`p-6 rounded-lg border-2 transition-all duration-200 hover:shadow-lg
                ${
                  selectedGoals.includes(goal.id)
                    ? "border-green-500 bg-green-50"
                    : "border-gray-200 bg-white hover:border-green-200"
                }
              `}
            >
              <div className="text-4xl mb-3">{goal.icon}</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {goal.name}
              </h3>
              <p className="text-sm text-gray-600 mb-3">{goal.description}</p>
              <div
                className={`w-full h-1 rounded-full mt-4 ${
                  selectedGoals.includes(goal.id)
                    ? "bg-green-500"
                    : "bg-gray-200"
                }`}
              />
            </button>
          ))}
        </div>

        {selectedGoals.length > 0 && (
          <div className="mt-8 text-center">
            <button
              className="bg-green-500 text-white px-8 py-3 rounded-lg font-semibold
                hover:bg-green-600 transition-colors duration-200"
            >
              Continue with {selectedGoals.length} goal
              {selectedGoals.length > 1 ? "s" : ""}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default GoalSelection;
