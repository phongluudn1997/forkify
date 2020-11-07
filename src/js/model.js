import { API_URL } from "./config";
import { getJSON } from "./helpers";

export const state = {
  recipe: {},
};

export const fetchRecipe = async function (id) {
  try {
    const data = await getJSON(`${API_URL}/${id}`);
    const { recipe } = data.data;
    const {
      title,
      publisher,
      source_url: sourceUrl,
      image_url: image,
      servings,
      cooking_time: cookingTime,
      ingredients,
    } = recipe;
    state.recipe = {
      title,
      publisher,
      sourceUrl,
      image,
      servings,
      cookingTime,
      ingredients,
    };
  } catch (error) {
    throw error;
  }
};
