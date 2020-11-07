import { state, fetchRecipe } from "./model";
import recipeView from "./views/recipeView";

const renderRecipe = async function () {
  try {
    const id = window.location.hash.slice(1);
    if (!id) return;
    recipeView.renderSpinner();

    await fetchRecipe(id);
    const { recipe } = state;

    recipeView.render(recipe);
  } catch (error) {
    alert(error);
  }
};

window.addEventListener("hashchange", renderRecipe);
window.addEventListener("load", renderRecipe);
