export const state = {
  recipe: {},
};

export const fetchRecipe = async function (id) {
  try {
    const res = await fetch(
      `https://forkify-api.herokuapp.com/api/v2/recipes/${id}`
    );
    if (!res.ok) {
      throw new Error("Error");
    }
    const data = await res.json();
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
    console.log(recipe);
  } catch (error) {
    console.log(error);
    alert(error);
  }
};
