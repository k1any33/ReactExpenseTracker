import React, { useContext, useState } from "react";
import { uuid as uuidv4 } from "uuidv4";
import { TransactionContext } from "../store/TransactionContext";
import "./NewTransaction.css";

const NewTransaction = () => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");

  const { addTransaction } = useContext(TransactionContext);

  const submitHandler = (e) => {
    e.preventDefault();
    if (title.trim().length === 0 || amount.trim().length === 0) {
      return alert("Please enter a valid title or amount");
    } else {
      const newTransaction = {
        id: uuidv4(),
        title,
        amount: +amount,
      };

      addTransaction(newTransaction);

      setAmount("");
      setTitle("");
    }
  };

  return (
    <div>
      <h2>Add your transaction for today!</h2>
      <form onSubmit={submitHandler}>
        <div className="newtransaction">
          <div className="newtransaction__control">
            <label>Transaction</label>
            <input
              type="text"
              placeholder="Enter title"
              onChange={(e) => setTitle(e.target.value)}
              value={title}
            />
          </div>
          <div className="newtransaction__control">
            <label>Amount (negative - expense)</label>
            <input
              type="text"
              placeholder="Enter amount"
              onChange={(e) => setAmount(e.target.value)}
              value={amount}
            />
          </div>
        </div>
        <button className="newtransaction__button">Add Transaction</button>
      </form>
    </div>
  );
};

export default NewTransaction;
