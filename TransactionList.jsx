import React from 'react';
import Transaction from './Transaction';

const TransactionList = ({ transactions, deleteTransaction }) => {
  return (
    <div>
      <h3>History</h3>
      <ul className="list">
        {transactions.map(transaction => (
          <Transaction key={transaction.id} transaction={transaction} deleteTransaction={deleteTransaction} />
        ))}
      </ul>
    </div>
  );
};

export default TransactionList;