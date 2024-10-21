import React, { useState } from 'react';
import RecipeForm from './components/RecipeForm';
import RecipeList from './components/RecipeList';
import SearchBar from './components/SearchBar';

const App = () => {
  const [recipes, setRecipes] = useState([]);
  const [currentRecipe, setCurrentRecipe] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const addOrUpdateRecipe = (recipe) => {
    if (currentRecipe) {
      setRecipes(recipes.map((r) => (r.title === recipe.title ? recipe : r)));
    } else {
      setRecipes([...recipes, recipe]);
    }
    setCurrentRecipe(null);
  };

  const deleteRecipe = (title) => {
    setRecipes(recipes.filter((recipe) => recipe.title !== title));
  };

  const editRecipe = (recipe) => {
    setCurrentRecipe(recipe);
  };

  const filteredRecipes = recipes.filter(
    (recipe) =>
      recipe.ingredients.toLowerCase().includes(searchQuery.toLowerCase()) ||
      recipe.cuisine.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <center>
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Recipe Management App</h1>
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <RecipeForm onSubmit={addOrUpdateRecipe} currentRecipe={currentRecipe} setCurrentRecipe={setCurrentRecipe} />
      <RecipeList recipes={filteredRecipes} onDelete={deleteRecipe} onEdit={editRecipe} />
    </div>
    </center>
  );
};

export default App;
