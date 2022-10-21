import { createSlice } from "@reduxjs/toolkit";
let wordsF = []
let wordsO = []
if(localStorage.getItem('favoritesWords')){
    wordsF = localStorage.getItem('favoritesWords').split(',')
}
if(localStorage.getItem('wordsDefinitions')){
    wordsO = JSON.parse(localStorage.getItem("wordsDefinitions"))
}


const initialState = {
    wordsFavorites: wordsF,
    wordsDefinitionsF: wordsO,
};

export const favorites = createSlice({
    name: 'favorites',
    initialState,
    reducers: {
        addF: (state, action) => {  
            state.wordsFavorites.push(action.payload)
        },
        addDef: (state, action) => {
            state.wordsDefinitionsF = [...wordsO, action.payload]
        },
        deleteF: (state, action) => {
            const newFavorites = state.wordsFavorites.filter((word) => word !== action.payload);
            state.wordsFavorites = [...newFavorites]
            localStorage.setItem('favoritesWords',newFavorites)
        }
    }
})

export const {addF, deleteF, addDef} = favorites.actions;
export default favorites.reducer;