/* ------------------------- ACTIONS ------------------------- */

const LOAD_FAVORITES = 'favorites/LOAD'
const CREATE_FAVORITE = 'favorites/NEW'
const DELETE_FAVORITE = 'favorites/DELETE'

export const loadFavorites = favorites => {
    return {
        type: LOAD_FAVORITES,
        favorites
    };
};

export const createFavorite = favorite => {
    return {
        type: CREATE_FAVORITE,
        favorite
    };
};

export const removeFavorite = favorite => {
    return {
        type: DELETE_FAVORITE,
        favorite
    }
}

/* ------------------------- THUNKS ------------------------- */

export const addToFavorites = (productId) => async dispatch => {
    const response = await fetch('/api/favorites', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            productId: productId,
        })
    })
}