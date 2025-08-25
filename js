function mixCocktail() {
  if (ingredients.length === 0) {
    document.getElementById("result").innerText = "Please add ingredients!";
    return;
  }

  const playerIngredients = ingredients.map(i => i.name);
  let matchedCocktail = cocktails.find(cocktail => 
    cocktail.ingredients.every(ing => playerIngredients.includes(ing)) &&
    playerIngredients.length === cocktail.ingredients.length
  );

  const cocktailName = matchedCocktail ? matchedCocktail.name : "Signature Mix";
  document.getElementById("result").innerText = "You made: " + cocktailName + " 🍹";

  // Shake animation
  const glass = document.getElementById("glass");
  glass.classList.add("shake");
  setTimeout(() => glass.classList.remove("shake"), 500);
}
