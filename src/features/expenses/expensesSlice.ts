import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
interface ExpensesState {
  id: string;
  description: string;
  category: string;
  createdAt: string;
  amount: number;
}
const initialState: ExpensesState[] = [];
const expensesSlice = createSlice({
  name: "expenses",
  initialState,
  reducers: {
    addExpense: (state, action: PayloadAction<ExpensesState>) => {
      state.push(action.payload);
    },
    deleteExpense: (state, action: PayloadAction<ExpensesState>) => {
      const expenseIdx = state.findIndex((ex) => ex.id === action.payload.id);
      if (expenseIdx !== -1) {
        state.splice(expenseIdx, 1);
      }
    },
    updateExpense: (state, action: PayloadAction<ExpensesState>) => {
      const expenseIdx = state.findIndex((ex) => ex.id === action.payload.id);
      if (expenseIdx !== -1) {
        state[expenseIdx] = {
            ...state[expenseIdx],
            ...action.payload
        }
      }
    },
  },
});
export const {addExpense,deleteExpense,updateExpense} = expensesSlice.actions
export default expensesSlice.reducer;
