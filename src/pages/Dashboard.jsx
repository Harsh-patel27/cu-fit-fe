import { useEffect, useState } from "react";

const Dashboard = () => {
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUserData = async () => {
            const token = localStorage.getItem("authToken");
            if (!token) {
                setError("User not authenticated. Please log in.");
                setLoading(false);
                return;
            }

            try {
                const response = await fetch("http://localhost:8000/get-profile/", {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Token ${token}`,
                    },
                });

                if (!response.ok) {
                    throw new Error("Failed to fetch user data");
                }

                const data = await response.json();
                setUserData(data);
            } catch (error) {
                console.error("Error fetching user data:", error);
                setError("Failed to load data. Please try again.");
            } finally {
                setLoading(false);
            }
        };

        fetchUserData();
    }, []);

    if (loading) return <p className="text-center text-gray-600">Loading...</p>;
    if (error) return <p className="text-center text-red-600">{error}</p>;
    if (!userData) return <p className="text-center text-red-600">No user data found.</p>;

    return (
        <div className="min-h-screen bg-gray-50 py-12 px-6 lg:px-8">
            <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
                <h1 className="text-3xl font-bold text-green-600 text-center">
                    Hello, {userData.username} 👋
                </h1>
                <p className="text-center text-gray-600 mb-6">
                    Here's a summary of your fitness journey!
                </p>

                <div className="space-y-4">
                    {[
                        ["Your Goals 🎯", "goal_selection"],
                        ["Diet Selection 🍽️", "diet_selection"],
                        ["Diet Preference 🌱", "diet_preference"],
                        ["Cooking Time ⏳", "cooking_time"],
                        ["Meal Plan 🍛", "meal_plan_selection"],
                        ["Activity Level 🏃‍♂️", "activity_level"],
                        ["Exercise Routine 💪", "exercise_routine"],
                        ["Pain & Injury 🚑", "pain_and_injury"],
                    ].map(([title, key]) => (
                        <div key={key} className="border-b pb-4">
                            <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
                            <p className="text-gray-600">{userData[key] || "Not selected"}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
