import { createSlice } from "@reduxjs/toolkit";
import alimentos from "../../Data/alimentos.json";
import categories from "../../Data/categories.json";
import misAlimentos from "../../Data/misAlimentos.json";

const initialState = {
  value: {
    dishes: alimentos,
    allCategories: categories,
    ourDishes: misAlimentos,
    dishSelected: {},
    dishesFilter: [],
    categorySelected: "",
  },
};

export const dishesSlice = createSlice({
  name: "dishes",
  initialState,
  reducers: {
    setCategoryFilter: (state, actions) => {
        state.value.dishesFilter = state.value.dishes.filter((ele) => ele.categorías.includes(actions.payload))

    },
  }
});

export const { setCategoryFilter } = dishesSlice.actions;

export default dishesSlice.reducer;
