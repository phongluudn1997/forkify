import { API_URL } from "./config";
import { getJSON } from "./helpers";

export const state = {
  recipe: {},
  search: {
    query: "",
    results: [],
  },
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

export const querySearch = async function (query) {
  if (!query) return;
  try {
    const { data } = await getJSON(`${API_URL}?search=${query}`);

    state.search = {
      ...state.search,
      query,
      results: data.recipes.map(rec => {
        const { id, image_url: imageUrl, key, publisher, title } = rec;
        return { id, imageUrl, key, publisher, title };
      }),
    };
    console.log(state);
  } catch (error) {
    throw error;
  }
};
