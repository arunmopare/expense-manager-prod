import React, { useReducer, createContext } from "react";
import { GetAllExpenses } from "../services/Expense";

import contextReducer from "./contextReducer";
// const trncx = await GetAllExpenses();
// console.log({ trncx });
const initialState = JSON.parse(localStorage.getItem("transactions")) || [];

export const ExpenseTrackerContext = createContext(initialState);

export const Provider = ({ children }) => {
  const [transactions, dispatch] = useReducer(contextReducer, initialState);

  const deleteTransaction = (id) => {
    dispatch({ type: "DELETE_TRANSACTION", payload: id });
  };

  const getTransactionsByUser = (userName) => {
    dispatch({ type: "GET_TRANSACTIONS_BY_USER", payload: userName });
  };

  const addTransaction = (transaction) => {
    dispatch({ type: "ADD_TRANSACTION", payload: transaction });
  };
  let balance = 0;
  if (transactions) {
    balance = transactions.reduce(
      (acc, currVal) =>
        currVal.type === "Expense"
          ? acc - currVal.amount
          : acc + currVal.amount,
      0
    );
  }

  return (
    <ExpenseTrackerContext.Provider
      value={{
        transactions,
        balance,
        deleteTransaction,
        getTransactionsByUser,
        addTransaction,
      }}
    >
      {children}
    </ExpenseTrackerContext.Provider>
  );
};
