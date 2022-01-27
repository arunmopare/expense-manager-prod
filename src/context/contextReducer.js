import {
  DeleteExpense,
  GetAllExpenses,
  PostExpense,
} from "../services/Expense";

const contextReducer = (state, action) => {
  let transactions;

  switch (action.type) {
    case "DELETE_TRANSACTION":
      DeleteExpense(action.payload);
      transactions = state.filter(
        (transaction) => transaction.id !== action.payload
      );

      localStorage.setItem("transactions", JSON.stringify(transactions));

      return transactions;

    case "GET_TRANSACTIONS_BY_USER":
      transactions = state.filter(
        (transaction) => transaction.owner === action.payload
      );
      return transactions;

    case "ADD_TRANSACTION":
      transactions = [action.payload, ...state];
      PostExpense(action.payload);
      localStorage.setItem("transactions", JSON.stringify(transactions));

      return transactions;
    default:
      return state;
  }
};

export default contextReducer;
