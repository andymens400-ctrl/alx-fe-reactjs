import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function HomePage() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("/src/data.json")
      .then((res) => res.json())
      .then((data) => setRecipes(data))
      .catch((error) => console.error("Error loading recipes:", error));
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-4xl font-bold text-center mb-8 text-green-700">
        🍽️ Recipe Sharing Platform
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {recipes.map((recipe) => (
          <div
            key={recipe.id}
            className="bg-white rounded-xl shadow hover:shadow-2xl transition-shadow duration-300 overflow-hidden"
          >
            <img
              src={recipe.image}
              alt={recipe.title}
              className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
            />

            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{recipe.title}</h2>
              <p className="text-gray-600 mb-3">{recipe.summary}</p>

              <div className="text-center mb-6">
  <Link
    to="/add"
    className="inline-block bg-green-600 text-white px-5 py-3 rounded-lg hover:bg-green-700 transition"
  >
    ➕ Add New Recipe
  </Link>
</div>


            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
