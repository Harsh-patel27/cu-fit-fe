import { useState } from "react";

export default function BMICalculator() {
  const [gender, setGender] = useState("male");
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [age, setAge] = useState(0);
  const [heightUnit, setHeightUnit] = useState("cm");
  const [weightUnit, setWeightUnit] = useState("kg");
  const [bmi, setBmi] = useState(null);
  const [comment, setComment] = useState("");

  const calculateBMI = () => {
    let heightInMeters = heightUnit === "cm" ? height / 100 : height * 0.3048;
    let weightInKg = weightUnit === "kg" ? weight : weight * 0.453592;
    let bmiValue = weightInKg / (heightInMeters * heightInMeters);
    setBmi(bmiValue.toFixed(2));

    if (bmiValue < 18.5) setComment("Underweight");
    else if (bmiValue < 24.9) setComment("Normal weight");
    else if (bmiValue < 29.9) setComment("Overweight");
    else setComment("Obese");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-xl shadow-md w-96">
        <button className="mb-4 text-blue-600">Back</button>
        <h2 className="text-2xl font-bold mb-4 text-center">BMI Calculator</h2>
        <label>Gender:</label>
        <select className="w-full p-2 border rounded mb-3" value={gender} onChange={(e) => setGender(e.target.value)}>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>

        <label>Height:</label>
        <div className="flex mb-3">
          <input type="number" className="w-full p-2 border rounded" value={height} onChange={(e) => setHeight(e.target.value)} />
          <select className="ml-2 p-2 border rounded" value={heightUnit} onChange={(e) => setHeightUnit(e.target.value)}>
            <option value="cm">cm</option>
            <option value="feet">feet</option>
          </select>
        </div>

        <label>Weight:</label>
        <div className="flex mb-3">
          <input type="number" className="w-full p-2 border rounded" value={weight} onChange={(e) => setWeight(e.target.value)} />
          <select className="ml-2 p-2 border rounded" value={weightUnit} onChange={(e) => setWeightUnit(e.target.value)}>
            <option value="kg">kg</option>
            <option value="lb">lb</option>
          </select>
        </div>

        <label>Age:</label>
        <input type="number" className="w-full p-2 border rounded mb-3" value={age} onChange={(e) => setAge(e.target.value)} />

        <button className="w-full bg-green-500 text-white p-2 rounded mt-3" onClick={calculateBMI}>
          Calculate
        </button>

        {bmi && (
          <div className="mt-4 text-center">
            <p className="text-lg font-bold">BMI: {bmi}</p>
            <p className="text-gray-600">{comment}</p>
          </div>
        )}

        <button className="mt-4 text-blue-600">Next</button>
      </div>
    </div>
  );
}
