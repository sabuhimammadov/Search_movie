import { createContext, useReducer,  } from "react";
import { ADD_FAVORITE, ADD_MOVIES, Show_Details, FILL_MOVIES, Search_Movie } from "./types";



export const globalContext = createContext({
  count: null,
});
const initialState = {
  movies: [],
  favorite: [],
  details: [],
  moviesSearch:[]
};

const globalReducer = (state, action) => {
  switch (action.type) {
    case FILL_MOVIES:
      return { ...state, movies: action.payload };

    case ADD_MOVIES:
      return { ...state, favorite: [action.payload, ...state.favorite] };
    case Show_Details:
      return { ...state, details: action.payload }
      case Search_Movie:
        return{...state,moviesSearch:action.payload}
    case ADD_FAVORITE:
      const movie_id = action.payload.imdbID
      let newFavList;
      const isHasMovie = state.favorite.findIndex((item) => item.imdbID === movie_id)
      if (isHasMovie === -1) {
        newFavList = [action.payload, ...state.favorite]
      } else {
        newFavList = state.favorite.filter((item) => item.imdbID !== movie_id)
      }
      return { ...state, favorite: newFavList }
      default:return ""
  }

}
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(globalReducer, initialState);
  const value = {
    state,
    dispatch,
  };

  return (
    <globalContext.Provider value={value}>{children}</globalContext.Provider>
  );
};