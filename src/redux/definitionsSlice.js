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
// export const getDefi = createAsyncThunk (
//     'getD/getDefi', 
//     async function fetchDefinitions(word) {
//         const res = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
//         .then((data) => data.json())
//         .catch(err => console.log(err.message))
//         return res[0]
//     })
// export const getDefi = createAsyncThunk('getD/getDefi', (word) =>{
//     return fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
//     .then(response => response.json())
//     .then ((objectDefinitions) => objectDefinitions[0])
//     .catch(error => error)
//     //     {
//     //     if(objectR.status === 404){
//     //         console.log(objectR.response.message)
//     //     }
//     // }
//     // .catch(error => error);
//     // return fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
//     // .then(response => response.json())
//     // .then((objectDefinitions) => objectDefinitions[0])
//     // .catch(error => error);
// })

console.log(getDefi.rejected())

export const definitionsSlice = createSlice({
    name: 'getD',
    initialState,
    extraReducers: (builder) => {
       builder.addCase(getDefi.pending, (state) => {
        state.loading = true
       })
       builder.addCase(getDefi.fulfilled, (state, action)=>{
        console.log(action)
        state.loading = false
        state.error = ''
        if(action.payload === undefined){
            state.error = "Cuvant inexistent"
        } else{
            state.definitions.push(action.payload)
        }
        // state.error = ''
       })
       builder.addCase(getDefi.rejected, (state, action) => {
        state.loading = false
        state.definitions = []
        state.error = action.error.message
       })
    }
})


// export const definitionsSlice = createSlice({
//     name: 'getD',
//     initialState,
//     reducers: {
//        getDefinitions: (state, action) => {
//         console.log(fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${action.payload}`)
//         .then(response => response.json())
//         .then((objectDefinitions) => {
//             const meanings = objectDefinitions[0].meanings.map((meaning) => {
//                 // const defA = meaning.definitons.map((def) => {
//                 //     return {
//                 //         partOfSpeech: meaning.partOfSpeech,
//                 //         definition: def.definition,
//                 //         example: def.example
//                 //     }
//                 // })
//                 return  {
//                     partOfSpeech: meaning.partOfSpeech,
//                     definitions: meaning.definitions
//                 }
//             })
//             console.log(meanings);
//             return meanings;
//         }))
//        }
       
//     }
// })


export const {getDef} = definitionsSlice.actions;
export default definitionsSlice.reducer;