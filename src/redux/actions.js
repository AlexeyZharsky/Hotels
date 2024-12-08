export const ADD_TO_FAVORITES = 'ADD_TO_FAVORITES';
export const REMOVE_FROM_FAVORITES = 'REMOVE_FROM_FAVORITES';
export const SET_CURRENT_HOTEL = 'SET_CURRENT_HOTEL';

export const addToFavorites = (hotel) => ({
    type: ADD_TO_FAVORITES,
    payload: hotel,
});

export const removeFromFavorites = (hotel) => ({
    type: REMOVE_FROM_FAVORITES,
    payload: hotel,
});

export const setCurrentHotel = (hotel) => ({
    type: SET_CURRENT_HOTEL,
    payload: hotel,
});