import React, { useContext } from "react";
import { TransactionContext } from "../store/TransactionContext";
import "./Dashboard.css";

const Dashboard = () => {
  const { transactions } = useContext(TransactionContext);
  const filteredAmount = transactions.map((transaction) => transaction.amount);
  const totalIncome = filteredAmount
    .filter((amount) => amount > 0)
    .reduce((total, income) => total + income, 0);

  const totalExpense = filteredAmount
    .filter((amount) => amount < 0)
    .reduce((total, expense) => total + expense, 0);

  const total = totalIncome - totalExpense;

  return (
    <div className="dashboard">
      <div>
        <h4>Income</h4>
        <p>${totalIncome.toFixed(2)}</p>
      </div>
      <div>
        <h4>Expense</h4>
        <p>-${Math.abs(totalExpense).toFixed(2)}</p>
      </div>
      <div>
        <h4>Total</h4>
        <p>${total.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default Dashboard;
