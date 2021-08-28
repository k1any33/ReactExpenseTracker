import React from "react";
import { TransactionProvider } from "./store/TransactionContext";
import NewTransaction from "./components/NewTransaction";
import Dashboard from "./components/Dashboard";
import TransactionList from "./components/TransactionList";
import "./App.css";

function App() {
  return (
    <TransactionProvider>
      <div className="app">
        <div className="app__container">
          <NewTransaction />
          <Dashboard />
          <TransactionList />
        </div>
      </div>
    </TransactionProvider>
  );
}
export default App;
