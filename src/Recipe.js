import React from 'react'
import style from './recipe.module.css';

function Recipe({title, image, calorie, ingredients}) {
  return (
    <div className={style.recipe}>
      <h1>{title}</h1>
     
      
      {/*  eslint-disable-next-line jsx-a11y/img-redundant-alt */}
      <img src={image} alt="Food Image" />
      <p className='calorie'> {calorie}</p>
      <ol>
        {ingredients.map(ingredient=>(
            <li>{ingredient.text}</li>
        ))}
      </ol>
      
    </div>
  )
}

export default Recipe;
