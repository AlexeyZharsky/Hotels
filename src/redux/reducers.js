import { ADD_TO_FAVORITES, REMOVE_FROM_FAVORITES, SET_CURRENT_HOTEL } from './actions';

const initialState = {
    favorites: [],
    selectedHotel: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_FAVORITES:
        if (!state.favorites.find(data => data.id === action.payload.id)) {
            return {
                ...state,
                favorites: [...state.favorites, action.payload],
            };
        }
        return state;

    case REMOVE_FROM_FAVORITES:
        return {
            ...state,
            favorites: state.favorites.filter(data => data.id !== action.payload),
        };
    case SET_CURRENT_HOTEL:
        return {
            ...state,
            selectedHotel: action.payload,
        };
    default:
        return state;
  }
};

export default reducer;