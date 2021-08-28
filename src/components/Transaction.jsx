import React, { useContext } from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import { TransactionContext } from "../store/TransactionContext";
import "./Transaction.css";

const Transaction = ({ transaction }) => {
  const { deleteTransaction } = useContext(TransactionContext);

  const deleteHandler = () => {
    deleteTransaction(transaction.id);
  };
  return (
    <div className="transaction">
      <li>
        <div className="transaction__left">{transaction.title}</div>
        <div className="transaction__right">
          <span>{transaction.amount.toFixed(2)}</span>
          <DeleteIcon onClick={deleteHandler} className="transaction__button" />
        </div>
      </li>
    </div>
  );
};

export default Transaction;
