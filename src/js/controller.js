import { state, fetchRecipe } from "./model";
import recipeView from "./views/recipeView";

const renderRecipe = async function () {
  console.log("EVENT FIRED");
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

const init = function () {
  recipeView.addHandlerRender(renderRecipe);
};

init();
