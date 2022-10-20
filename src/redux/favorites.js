import { createSlice } from "@reduxjs/toolkit";
let wordsF = []
if(localStorage.getItem('favoritesWords')){
    wordsF = localStorage.getItem('favoritesWords').split(',')
}


const initialState = {
    wordsFavorites: wordsF,
};

export const favorites = createSlice({
    name: 'favorites',
    initialState,
    reducers: {
        addF: (state, action) => {
            
            state.wordsFavorites.push(action.payload)
        },
        deleteF: (state, action) => {
            const newFavorites = state.wordsFavorites.filter((word) => word !== action.payload);
            state.wordsFavorites = [...newFavorites]
            localStorage.setItem('favoritesWords',newFavorites)
        }
    }
})

export const {addF, deleteF} = favorites.actions;
export default favorites.reducer;