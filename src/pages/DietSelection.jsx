import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

const diets = [
  { id: "no-diet", name: "No Diet at all", icon: "🚫" },
  { id: "keto", name: "Keto", icon: "🥑" },
  { id: "fasting", name: "Intermediate Fasting", icon: "⏳" },
  { id: "gluten-free", name: "Gluten Free", icon: "🌾🚫" },
  { id: "raw-food", name: "Raw Food", icon: "🥦" },
  { id: "bulking", name: "Bulking", icon: "💪" }
];

export default function DietSelection() {
  const [selectedDiet, setSelectedDiet] = useState(null);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <div className="bg-green-600 w-full text-white text-lg font-bold p-4 flex justify-between">
        <span>CU Fit</span>
        <span>Calendar | Diet Plan</span>
      </div>

      <div className="max-w-lg w-full mt-6 text-center">
        <h1 className="text-2xl font-semibold text-green-700">Select Your Diet</h1>
        <p className="text-gray-600">Choose the diet plan that suits you best</p>
      </div>

      <div className="max-w-lg w-full mt-4 grid grid-cols-1 gap-2">
        {diets.map((diet) => (
          <Button
            key={diet.id}
            className={`w-full p-4 text-lg flex items-center justify-center gap-2 ${
              selectedDiet === diet.id ? "bg-green-500 text-white" : "bg-white border-gray-300 border"
            }`}
            onClick={() => setSelectedDiet(diet.id)}
          >
            <span>{diet.icon}</span> {diet.name} {selectedDiet === diet.id && <CheckCircle className="ml-2 text-white" />}
          </Button>
        ))}
      </div>

      <Button className="mt-4 bg-green-500 text-white px-6 py-2 rounded-md" disabled={!selectedDiet}>
        Continue 
      </Button>
    </div>
  );
}