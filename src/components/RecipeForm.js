import React, { useState, useEffect } from 'react';

const RecipeForm = ({ onSubmit, currentRecipe, setCurrentRecipe }) => {
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [instructions, setInstructions] = useState('');
  const [cuisine, setCuisine] = useState('');
  const [cookingTime, setCookingTime] = useState('');

  useEffect(() => {
    if (currentRecipe) {
      setTitle(currentRecipe.title);
      setIngredients(currentRecipe.ingredients);
      setInstructions(currentRecipe.instructions);
      setCuisine(currentRecipe.cuisine);
      setCookingTime(currentRecipe.cookingTime);
    } else {
      setTitle('');
      setIngredients('');
      setInstructions('');
      setCuisine('');
      setCookingTime('');
    }
  }, [currentRecipe]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ title, ingredients, instructions, cuisine, cookingTime });
    setCurrentRecipe(null);
    setTitle('');
    setIngredients('');
    setInstructions('');
    setCuisine('');
    setCookingTime('');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-5">
      <input
        type="text"
        placeholder="Recipe Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="border p-2 rounded w-full mb-2"
        required
      />
      <input
        type="text"
        placeholder="Ingredients (comma separated)"
        value={ingredients}
        onChange={(e) => setIngredients(e.target.value)}
        className="border p-2 rounded w-full mb-2"
        required
      />
      <textarea
        placeholder="Instructions"
        value={instructions}
        onChange={(e) => setInstructions(e.target.value)}
        className="border p-2 rounded w-full mb-2"
        required
      />
      <input
        type="text"
        placeholder="Cuisine Type"
        value={cuisine}
        onChange={(e) => setCuisine(e.target.value)}
        className="border p-2 rounded w-full mb-2"
        required
      />
      <input
        type="text"
        placeholder="Cooking Time (minutes)"
        value={cookingTime}
        onChange={(e) => setCookingTime(e.target.value)}
        className="border p-2 rounded w-full mb-2"
        required
      />
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">
        {currentRecipe ? 'Update Recipe' : 'Add Recipe'}
      </button>
    </form>
  );
};

export default RecipeForm;
