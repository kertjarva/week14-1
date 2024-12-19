const containerElement = document.querySelector('.container');
getRandomRecipe();

async function getRandomRecipe() {
    const response = await fetch('https://week12-1-f0co.onrender.com/random');
    const recipe = await response.json();

    const recipeName = recipe.recipe.recipename;
    const imageUrl = recipe.recipe.imageurl;
    const recipeInstructions = recipe.recipe.instructions;
    const ingredientsArray = recipe.ingredients;

   
    const recipeImage = document.createElement('img');
    const recipeNameTitle = document.createElement('h2');
    const instructionsBlock = document.createElement('p');
    const ingredientsList = document.createElement('ul');

    ingredientsArray.forEach(ingredient => {
        const ingredientLIElement = document.createElement('li');
        ingredientLIElement.innerHTML = ingredient;
        ingredientsList.appendChild(ingredientLIElement); 
    });
    
    recipeNameTitle.innerHTML = recipeName;
    recipeImage.src = imageUrl;
    instructionsBlock.innerHTML = recipeInstructions;

    const footer = document.createElement('footer');
    footer.innerHTML = '&#169 2024 All rights reserved';

    containerElement.appendChild(recipeNameTitle);
    containerElement.appendChild(recipeImage);
    containerElement.appendChild(ingredientsList);
    containerElement.appendChild(instructionsBlock);
    containerElement.appendChild(footer);

    console.log(recipeName);
    console.log(imageUrl); 

}