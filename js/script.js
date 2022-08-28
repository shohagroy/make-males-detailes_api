
fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
    .then(res => res.json())
    .then(data => allRecipes(data.categories))



const mainCardDiv = document.querySelector('.card-container');

const allRecipes = (recipes) =>{
    console.log(recipes)
    recipes.forEach(recipe => {
        displayRecipes(recipe)
    });
}

const displayRecipes = (recipe) =>{
    console.log(recipe)
    const cardDiv = document.createElement('div');
    cardDiv.classList.add('col');

    cardDiv.innerHTML = `
        <div class="card">
            <img src="${strCategory}" class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <h3 class="card-title">Card title</h3>
            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        </div>
    `
    
    mainCardDiv.appendChild(cardDiv);
}
