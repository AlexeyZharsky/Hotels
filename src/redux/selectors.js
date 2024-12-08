export const isHotelInFavorites = (state, dataId) => {
    return state.favorites.some(data => data.id === dataId);
};

export const getFavoriteHotels = (state) => {
    return state.favorites;
};
