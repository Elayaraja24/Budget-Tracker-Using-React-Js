import React from 'react';

const Transaction = ({ transaction, deleteTransaction }) => {
  const symbol = transaction.amount < 0 ? '-' : '+';

  return (
    <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
      {transaction.text} <span>{symbol}₹{Math.abs(transaction.amount)}</span>
      <button onClick={() => deleteTransaction(transaction.id)} className="delete-btn">x</button> 
    </li>
  );
};

export default Transaction;