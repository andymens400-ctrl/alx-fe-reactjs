import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function RecipeDetail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    fetch("/src/data.json")
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((item) => item.id === Number(id));
        setRecipe(found);
      })
      .catch((error) => console.error("Error loading recipe:", error));
  }, [id]);

  if (!recipe) {
    return (
      <div className="min-h-screen flex items-center justify-center text-xl">
        Recipe not found.
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <Link
        to="/"
        className="text-green-700 underline hover:text-green-800 text-lg"
      >
        ← Back to Recipes
      </Link>

      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-xl mt-6 p-6">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-64 object-cover rounded-lg mb-6"
        />

        <h1 className="text-3xl font-bold mb-4 text-green-700">
          {recipe.title}
        </h1>

        <p className="text-gray-700 mb-6">{recipe.summary}</p>

        {/* Ingredients Section */}
        <h2 className="text-2xl font-semibold mb-2">Ingredients</h2>
        <ul className="list-disc list-inside bg-gray-50 p-4 rounded-lg mb-6">
          {recipe.ingredients?.map((item, index) => (
            <li key={index} className="text-gray-700">
              {item}
            </li>
          ))}
        </ul>

        {/* instructions Section */}
        <h2 className="text-2xl font-semibold mb-2">instructions</h2>
        <ol className="list-decimal list-inside bg-gray-50 p-4 rounded-lg space-y-2">
          {recipe.steps?.map((step, index) => (
            <li key={index} className="text-gray-700">
              {step}
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
