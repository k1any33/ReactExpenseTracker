import React, { useContext } from "react";
import { TransactionContext } from "../store/TransactionContext";
import Transaction from "./Transaction";
import "./TransactionList.css";

const TransactionList = () => {
  const { transactions } = useContext(TransactionContext);

  return (
    <div>
      <h3>Transaction List</h3>
      <ul className="transactionlist">
        {transactions.map((transaction) => {
          return <Transaction transaction={transaction} key={transaction.id} />;
        })}
      </ul>
    </div>
  );
};

export default TransactionList;
