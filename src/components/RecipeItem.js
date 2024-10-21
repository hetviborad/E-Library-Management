import React from 'react';

const RecipeItem = ({ recipe, onDelete, onEdit }) => {
  return (
    <div className="border p-4 rounded mb-2">
      <h3 className="font-bold">{recipe.title}</h3>
      <p><strong>Ingredients:</strong> {recipe.ingredients}</p>
      <p><strong>Instructions:</strong> {recipe.instructions}</p>
      <p><strong>Cuisine:</strong> {recipe.cuisine}</p>
      <p><strong>Cooking Time:</strong> {recipe.cookingTime} minutes</p>
      <button onClick={() => onEdit(recipe)} className="bg-yellow-500 text-white p-2 rounded mr-2">
        Edit
      </button>
      <button onClick={() => onDelete(recipe.title)} className="bg-red-500 text-white p-2 rounded">
        Delete
      </button>
    </div>
  );
};

export default RecipeItem;
