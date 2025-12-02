import { useState } from "react";

export default function AddRecipeForm() {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation
    if (!title.trim() || !ingredients.trim() || !steps.trim()) {
      setError("All fields are required.");
      return;
    }

    const ingredientList = ingredients.split("\n").filter((item) => item.trim() !== "");
    if (ingredientList.length < 2) {
      setError("Please provide at least two ingredients.");
      return;
    }

    setError("");
    alert("Recipe submitted successfully!");

    // Clear form
    setTitle("");
    setIngredients("");
    setSteps("");
  };

  return (
    <div className="flex justify-center mt-8 px-4">
      <form
        onSubmit={handleSubmit}
        className="w-full md:w-1/2 bg-white shadow-lg rounded-xl p-4 md:p-6"
      >
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center">
          Add a New Recipe
        </h2>

        {error && (
          <p className="text-red-600 mb-4 text-sm md:text-base">{error}</p>
        )}

        {/* Title */}
        <div className="mb-4">
          <label className="block font-semibold mb-1 text-sm md:text-base">
            Recipe Title
          </label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded-md p-2 md:p-3 focus:outline-none focus:ring focus:ring-blue-300"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter recipe title"
          />
        </div>

        {/* Ingredients */}
        <div className="mb-4">
          <label className="block font-semibold mb-1 text-sm md:text-base">
            Ingredients (one per line)
          </label>
          <textarea
            className="w-full border border-gray-300 rounded-md p-2 md:p-3 h-28 focus:outline-none focus:ring focus:ring-blue-300"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            placeholder="List ingredients..."
          ></textarea>
        </div>

        {/* Preparation Steps */}
        <div className="mb-4">
          <label className="block font-semibold mb-1 text-sm md:text-base">
            Preparation Steps
          </label>
          <textarea
            className="w-full border border-gray-300 rounded-md p-2 md:p-3 h-32 focus:outline-none focus:ring focus:ring-blue-300"
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
            placeholder="Describe the preparation steps..."
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 md:py-3 rounded-md hover:bg-blue-700 transition"
        >
          Submit Recipe
        </button>
      </form>
    </div>
  );
}
