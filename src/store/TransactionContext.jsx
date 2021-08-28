import React, { createContext, useReducer } from "react";
import TransactionReducer from "./TransactionReducer";

//Initial State
const initialState = {
  transactions: [
    { id: "1", title: "KFC", amount: -6.99 },
    { id: "2", title: "MacDonalds", amount: -5 },
    { id: "3", title: "Part-time Salary", amount: 100 },
  ],
};

//Create Context
export const TransactionContext = createContext(initialState);

//Provider Component
export const TransactionProvider = ({ children }) => {
  const [state, dispatch] = useReducer(TransactionReducer, initialState);
  const addTransaction = (transaction) => {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: transaction,
    });
  };
  const deleteTransaction = (id) => {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id,
    });
  };

  // Destructure state before passing it in as value
  const { transactions } = state;

  return (
    <TransactionContext.Provider
      value={{
        transactions,
        addTransaction,
        deleteTransaction,
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
};
