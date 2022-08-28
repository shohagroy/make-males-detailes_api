
fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
    .then(res => res.json())
    .then(data => allRecipes(data.categories))



const mainCardDiv = document.querySelector('.card-container');

const allRecipes = (recipes) =>{
    recipes.forEach(recipe => {
        displayRecipes(recipe)
        console.log(recipe.idCategory)
    });
}

const displayRecipes = (recipe) =>{
    console.log(recipe)
    const cardDiv = document.createElement('div');
    cardDiv.classList.add('col');

    cardDiv.innerHTML = `
        <div class="card">
            <img src="${recipe.strCategoryThumb}" class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title">Category: ${recipe.strCategory}</h5>
            <h3 class="card-title">ID: ${recipe.idCategory}</h3>
            <p class="card-text">${recipe.strCategoryDescription}</p>
        </div>
    `
    
    mainCardDiv.appendChild(cardDiv);
}
