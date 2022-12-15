/* ------------------------- ACTIONS ------------------------- */

const LOAD_FAVORITES = "favorites/LOAD";
const CREATE_FAVORITE = "favorites/NEW";
const DELETE_FAVORITE = "favorites/DELETE";

export const loadFavorites = (favorites) => {
  return {
    type: LOAD_FAVORITES,
    favorites,
  };
};

export const createFavorite = (favorite) => {
  return {
    type: CREATE_FAVORITE,
    favorite,
  };
};

export const removeFavorite = (favorite) => {
  return {
    type: DELETE_FAVORITE,
    favorite,
  };
};

/* ------------------------- THUNKS ------------------------- */

export const addToFavorites = (productId) => async (dispatch) => {
  const response = await fetch("/api/favorites", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      productId: productId,
    }),
  });

  if (response.ok) {
    const data = await response.json();
    dispatch(createFavorite(data));
    return data;
  }
  return response;
};

export const getFavorites = (userId) => async (dispatch) => {
  const response = await fetch(`/api/favorites/${userId}`);

  if (response.ok) {
    const favorites = await response.json();
    dispatch(loadFavorites(favorites));
    return favorites;
  }
};

/* ------------------------- REDUCER ------------------------- */

const initialState = {};

const allFavoritesReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_FAVORITES:
      return action.favorites.Favorites.reduce((favorites, favorite) => {
        favorites[favorite.id] = favorite;
        return favorites;
      }, {});
    default:
      return state;
  }
};

export default allFavoritesReducer;
