import { state, fetchRecipe } from "./model";
import recipeView from "./views/recipeView";

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////

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
