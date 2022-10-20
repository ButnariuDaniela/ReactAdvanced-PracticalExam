import { configureStore } from '@reduxjs/toolkit';
import getD from './definitionsSlice';
import favorites from './favorites';

export const store = configureStore({
  reducer: {
    definitions: getD,
    favorites: favorites
  },
})

