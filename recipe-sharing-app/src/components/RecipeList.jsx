import { Link } from 'react-router-dom';
import { useRecipeStore } from '../components/recipeStore';

const RecipeList = () => {
  const recipes = useRecipeStore((s) => s.recipes);

  return (
    <div>
      <h2>Recipe List</h2>
      {recipes.length === 0 ? (
        <p>No recipes yet. Add one below!</p>
      ) : (
        recipes.map((recipe) => (
          <div key={recipe.id} style={{ marginBottom: '1rem', border: '1px solid #eee', padding: '0.5rem' }}>
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
            <Link to={`/recipes/${recipe.id}`} style={{ marginRight: 8 }}>View</Link>
            <Link to={`/recipes/${recipe.id}/edit`}>Edit</Link>
          </div>
        ))
      )}
    </div>
  );
};

export default RecipeList;

