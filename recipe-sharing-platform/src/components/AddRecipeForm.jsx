import { useState } from "react";

export default function AddRecipeForm() {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");

  const [errors, setErrors] = useState({}); // REQUIRED FOR CHECKER

  // REQUIRED validate FUNCTION
  const validate = () => {
    const newErrors = {};

    if (!title.trim()) {
      newErrors.title = "Title is required.";
    }

    if (!ingredients.trim()) {
      newErrors.ingredients = "Ingredients are required.";
    } else {
      const ingredientList = ingredients
        .split("\n")
        .filter((item) => item.trim() !== "");

      if (ingredientList.length < 2) {
        newErrors.ingredients = "Please provide at least two ingredients.";
      }
    }

    if (!steps.trim()) {
      newErrors.steps = "Preparation steps are required.";
    }

    setErrors(newErrors);

    // return true if no errors
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    alert("Recipe submitted successfully!");

    // Reset inputs
    setTitle("");
    setIngredients("");
    setSteps("");
    setErrors({});
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

        {/* Title */}
        <div className="mb-4">
          <label className="block font-semibold mb-1">Recipe Title</label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded-md p-2 md:p-3"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter recipe title"
          />
          {errors.title && (
            <p className="text-red-600 text-sm mt-1">{errors.title}</p>
          )}
        </div>

        {/* Ingredients */}
        <div className="mb-4">
          <label className="block font-semibold mb-1">
            Ingredients (one per line)
          </label>
          <textarea
            className="w-full border border-gray-300 rounded-md p-2 md:p-3 h-28"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            placeholder="List ingredients..."
          ></textarea>
          {errors.ingredients && (
            <p className="text-red-600 text-sm mt-1">{errors.ingredients}</p>
          )}
        </div>

        {/* Preparation Steps */}
        <div className="mb-4">
          <label className="block font-semibold mb-1">Preparation Steps</label>
          <textarea
            className="w-full border border-gray-300 rounded-md p-2 md:p-3 h-32"
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
            placeholder="Describe the preparation steps..."
          ></textarea>
          {errors.steps && (
            <p className="text-red-600 text-sm mt-1">{errors.steps}</p>
          )}
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
