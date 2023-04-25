import React from 'react';

//ToDo:  Finish working on this component
function Transaction( status, sender, receiver ) {
  
  //const transactionHash = status.split(': ')[1];


  return (
    <div>
      <p>{sender}</p>
      <p>{receiver}</p>
      {/*<p>{status}</p>
        <p>
          View transaction on Etherscan:{' '}
          <a href={`https://etherscan.io/tx/${transactionHash}`} target="_blank" rel="noopener noreferrer">{status.split(': ')[1]}</a>
  </p>*/}
      
    </div>
  );
}

export default Transaction;
