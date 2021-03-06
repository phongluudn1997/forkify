import { state, fetchRecipe, querySearch, getSearchResultsPage } from "./model";
import recipeView from "./views/recipeView";
import searchView from "./views/searchView";
import resultsView from "./views/resultsView";
import paginationView from "./views/paginationView";

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
  try {
    resultsView.renderSpinner();
    const query = searchView.getQuery();
    if (!query) return;
    await querySearch(query);
    resultsView.render(getSearchResultsPage());
    paginationView.render(state.search);
  } catch (error) {
    console.log(error);
  }
};

const paginationControl = function (gotoPage) {
  state.search.currentPage = gotoPage;
  resultsView.render(getSearchResultsPage());
  paginationView.render(state.search);
};

const init = function () {
  recipeView.addHandlerRender(renderRecipe);
  searchView.addHandlerSearch(queryRecipe);
  paginationView.handleChangePage(paginationControl);
};

init();
