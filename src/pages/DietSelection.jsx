import { useState } from "react";

const diets = [
  { id: "no-diet", name: "No Diet at all", icon: "🚫" },
  { id: "keto", name: "Keto", icon: "🥑" },
  { id: "fasting", name: "Intermediate Fasting", icon: "⏳" },
  { id: "gluten-free", name: "Gluten Free", icon: "🌾🚫" },
  { id: "raw-food", name: "Raw Food", icon: "🥦" },
  { id: "bulking", name: "Bulking", icon: "💪" },
];

const DietSelection = () => {
  const [selectedDiet, setSelectedDiet] = useState(null);

  const handleDietSelect = (dietId) => {
    setSelectedDiet(dietId);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Choose Your Diet Plan
          </h1>
          <p className="text-gray-600">
            Select the diet that best fits your lifestyle and goals
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {diets.map((diet) => (
            <button
              key={diet.id}
              onClick={() => handleDietSelect(diet.id)}
              className={`p-6 rounded-lg border-2 transition-all duration-200 hover:shadow-lg
                ${
                  selectedDiet === diet.id
                    ? "border-blue-500 bg-blue-50"
                    : "border-gray-200 bg-white hover:border-blue-200"
                }
              `}
            >
              <div className="text-4xl mb-3">{diet.icon}</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {diet.name}
              </h3>
              <div
                className={`w-full h-1 rounded-full mt-4 ${
                  selectedDiet === diet.id ? "bg-green-500" : "bg-gray-200"
                }`}
              />
            </button>
          ))}
        </div>

        {selectedDiet && (
          <div className="mt-8 text-center">
            <button
              className="bg-green-500 text-white px-8 py-3 rounded-lg font-semibold
                hover:bg-green-600 transition-colors duration-200"
            >
              Continue with {diets.find((d) => d.id === selectedDiet)?.name}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default DietSelection;
