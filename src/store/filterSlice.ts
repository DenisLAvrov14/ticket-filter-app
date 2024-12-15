import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { saveToLocalStorage, loadFromLocalStorage } from '../utils/localStorage';

interface FilterState {
  filterStops: number | null;
}

const initialState: FilterState = {
  filterStops: loadFromLocalStorage('filterStops') || null, // Загружаем из localStorage
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setFilterStops: (state, action: PayloadAction<number | null>) => {
      state.filterStops = action.payload;
      saveToLocalStorage('filterStops', action.payload); // Сохраняем в localStorage
    },
  },
});

export const { setFilterStops } = filterSlice.actions;
export default filterSlice.reducer;
