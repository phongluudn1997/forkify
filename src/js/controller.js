import { state, fetchRecipe, querySearch } from "./model";
import recipeView from "./views/recipeView";
import searchView from "./views/searchView";

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
    recipeView.renderError();
  }
};

const queryRecipe = async function () {
  const query = searchView.getQuery();
  await querySearch(query);
};

const init = function () {
  recipeView.addHandlerRender(renderRecipe);
  searchView.addHandlerSearch(queryRecipe);
};

init();
