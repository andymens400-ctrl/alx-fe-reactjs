import { useState } from "react";

export default function AddRecipeForm() {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let formErrors = {};

    if (!title.trim()) formErrors.title = "Title is required";

    if (!ingredients.trim()) formErrors.ingredients = "Ingredients are required";
    else if (ingredients.split("\n").length < 2)
      formErrors.ingredients = "Please enter at least two ingredients (one per line).";

    if (!steps.trim()) formErrors.steps = "Preparation steps are required";
    else if (steps.split("\n").length < 2)
      formErrors.steps = "Please enter at least two steps (one per line).";

    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    const newRecipe = {
      title,
      ingredients: ingredients.split("\n"),
      steps: steps.split("\n"),
    };

    console.log("New Recipe Submitted:", newRecipe);

    alert("Recipe submitted successfully!");

    // Clear form
    setTitle("");
    setIngredients("");
    setSteps("");
    setErrors({});
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex justify-center">
      <div className="w-full max-w-2xl bg-white shadow-lg rounded-xl p-6">
        <h1 className="text-3xl font-bold text-green-700 mb-6 text-center">
          ➕ Add a New Recipe
        </h1>

        <form onSubmit={handleSubmit} className="space-y-5">

          {/* Title Field */}
          <div>
            <label className="font-semibold block mb-1">Recipe Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-green-500 focus:outline-none"
              placeholder="Enter recipe name..."
            />
            {errors.title && (
              <p className="text-red-600 text-sm mt-1">{errors.title}</p>
            )}
          </div>

          {/* Ingredients Field */}
          <div>
            <label className="font-semibold block mb-1">Ingredients (one per line)</label>
            <textarea
              value={ingredients}
              onChange={(e) => setIngredients(e.target.value)}
              className="w-full border rounded-lg p-3 h-32 focus:ring-2 focus:ring-green-500 focus:outline-none"
              placeholder="e.g.
2 cups rice
1 tablespoon salt"
            ></textarea>
            {errors.ingredients && (
              <p className="text-red-600 text-sm mt-1">{errors.ingredients}</p>
            )}
          </div>

          {/* Steps Field */}
          <div>
            <label className="font-semibold block mb-1">Preparation Steps (one per line)</label>
            <textarea
              value={steps}
              onChange={(e) => setSteps(e.target.value)}
              className="w-full border rounded-lg p-3 h-32 focus:ring-2 focus:ring-green-500 focus:outline-none"
              placeholder="e.g.
Boil water
Add rice and cook for 15 minutes"
            ></textarea>
            {errors.steps && (
              <p className="text-red-600 text-sm mt-1">{errors.steps}</p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-green-600 text-white px-4 py-3 rounded-lg hover:bg-green-700 transition font-semibold"
          >
            Submit Recipe
          </button>
        </form>
      </div>
    </div>
  );
}
