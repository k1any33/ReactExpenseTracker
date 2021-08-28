const TransactionReducer = (state, { type, payload }) => {
  const { transactions } = state;

  switch (type) {
    case "ADD_TRANSACTION":
      return {
        ...state,
        transactions: [payload, ...transactions],
      };
    case "DELETE_TRANSACTION":
      return {
        ...state,
        transactions: transactions.filter(
          (transaction) => transaction.id !== payload
        ),
      };
    default:
      return state;
  }
};

export default TransactionReducer;
