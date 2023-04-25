import React, { useState } from 'react';
import Web3 from 'web3';

function Transaction( status, sender, receiver ) {
  return (
    <div>
      <p>{sender}</p>
      <p>{receiver}</p>
      <p>{status}</p>
      {status.startsWith('Transaction') && (
        <p>
          View transaction on Etherscan:{' '}
          <a href={`https://etherscan.io/tx/${status.split(': ')[1]}`} target="_blank" rel="noopener noreferrer">{status.split(': ')[1]}</a>>
        </p>
      )}
    </div>
  );
}

export default Transaction;
