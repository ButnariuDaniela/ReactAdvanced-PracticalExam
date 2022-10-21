import {createSlice, createAsyncThunk } from '@reduxjs/toolkit';


const initialState = {
    loading: false,
    definitions: [],
    error: ''
}

export const getDefi = createAsyncThunk (
    'getD/getDefi', 
    async function fetchDefinitions(word) {
        const res = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
        .then((data) => data.json())
        .catch(err => err)
        return res[0]
    })

export const definitionsSlice = createSlice({
    name: 'getD',
    initialState,
    extraReducers: (builder) => {
       builder.addCase(getDefi.pending, (state) => {
        state.loading = true
       })
       builder.addCase(getDefi.fulfilled, (state, action)=>{
        state.loading = false
        state.error = ''
        if(action.payload === undefined){
            state.error = "Cuvant inexistent"
        } else{
            state.definitions.push(action.payload)
        }
       })
       builder.addCase(getDefi.rejected, (state, action) => {
        state.loading = false
        state.definitions = []
        state.error = action.error.message
       })
    }
})

export const {getDef} = definitionsSlice.actions;
export default definitionsSlice.reducer;