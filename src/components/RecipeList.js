import React from 'react';
import RecipeItem from './RecipeItem';

const RecipeList = ({ recipes, onDelete, onEdit }) => {
  return (
    <div>
      {recipes.length === 0 ? (
        <p>No recipes found.</p>
      ) : (
        recipes.map((recipe) => (
          <RecipeItem
            key={recipe.title}
            recipe={recipe}
            onDelete={onDelete}
            onEdit={onEdit}
          />
        ))
      )}
    </div>
  );
};

export default RecipeList;
