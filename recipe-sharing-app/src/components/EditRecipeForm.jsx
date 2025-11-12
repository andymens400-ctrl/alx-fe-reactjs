import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useRecipeStore } from '../components/recipeStore';

const EditRecipeForm = () => {
  const { id } = useParams();
  const recipeId = Number(id);
  const navigate = useNavigate();

  const recipe = useRecipeStore((s) => s.recipes.find((r) => r.id === recipeId));
  const updateRecipe = useRecipeStore((s) => s.updateRecipe);

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    if (recipe) {
      setTitle(recipe.title);
      setDescription(recipe.description);
    }
  }, [recipe]);

  if (!recipe) {
    return <p>Recipe not found.</p>;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !description.trim()) return;

    updateRecipe({ id: recipeId, title: title.trim(), description: description.trim() });
    navigate(`/recipes/${recipeId}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Edit Recipe</h2>
      <input value={title} onChange={(e) => setTitle(e.target.value)} required />
      <br />
      <textarea value={description} onChange={(e) => setDescription(e.target.value)} required />
      <br />
      <button type="submit">Save</button>
      <button type="button" onClick={() => navigate(-1)} style={{ marginLeft: 8 }}>Cancel</button>
    </form>
  );
};

export default EditRecipeForm;
