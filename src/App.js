import React,{useEffect, useState} from 'react';
import './App.css';
import Recipe from './Recipe';

function App() {
  const APP_ID = "ab3aa493";
  const APP_KEY = "ad6e9d14d039d6a226a11c8b9c5b5eb8";

   const [recipes, setRecipes] = useState([]);
   const [search, setSearch]=useState("");
   const [query, setQuery]=useState("chicken")
   useEffect(()=>{
    getRecipe();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [query]);

const getRecipe = async ()=>{
  const response = await fetch(  `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
  const data =await response.json();
  setRecipes(data.hits);
  console.log(data.hits);
}
const getSearch=(e)=>{
  e.preventDefault();
  setQuery(search)
  setSearch("");
}

  return (
    <div className="App">
           <form className='search-form' onSubmit={getSearch}>
           <input className='search-bar' type="text" value={search} onChange={(e)=>setSearch(e.target.value)} />
           <button className='search-button' type="submit">Search</button>
           </form>
           <div className='recipes'>
           {recipes.map(recipe =>(
            <Recipe 
              key={recipe.recipe.label}
              title={recipe.recipe.label}
              calorie = {recipe.recipe.calories}
              image={recipe.recipe.image}
              ingredients={recipe.recipe.ingredients}
            />
           ))}
           </div>
    </div>
  );
}

export default App;
