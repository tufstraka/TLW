import React, { useState, useEffect } from 'react';
import './timelock.css'
import Web3 from 'web3';
import TimeLockWallet from '../contracts/TimeLockWallet.json';
import HowItWorks from './HowItWorks';

function Timelock() {
  const [releaseTime, setReleaseTime] = useState('');
  const [amount, setAmount] = useState('');
  const [contract, setContract] = useState(null);
  const [web3, setWeb3] = useState(null);
  const [account, setAccount] = useState('');
  const [address, setAddress] = useState('');
  const [status, setStatus] = useState('');

  
  // Load Web3 on component mount
  useEffect(() => {
    async function loadWeb3() {
      if (window.ethereum) {
        window.web3 = new Web3(window.ethereum);
        await window.ethereum.enable();
        setWeb3(window.web3);

      
      } else if (window.web3) {
        window.web3 = new Web3(window.web3.currentProvider);
        setWeb3(window.web3);

      } else {
        alert('Please install Metamask to use this app.');
      }
    }

    loadWeb3();
    
  }, []);
  
    // ToDo: use a testnet for development
    // Load TimeLockWallet contract on web3 instance update
  useEffect(() => {
    async function loadContract() {
      const networkId = await web3.eth.net.getId();
      const deployedNetwork = TimeLockWallet.networks[networkId];

      console.log(deployedNetwork);
      const contractAddress = deployedNetwork.address;
      const contract = new web3.eth.Contract(TimeLockWallet.abi, contractAddress);
      setContract(contract);
    }

    if (web3) {
        loadContract();
    }
  }, [web3]);
  
    // Load account on web3 instance update
  useEffect(() => {
    async function loadAccount() {
      const accounts = await web3.eth.getAccounts();
      setAccount(accounts[0]);
      
    }

    if (web3) {
      loadAccount();
    }
  }, [web3]);

  const handleClick = async () => {
    // Create a new Web3 instance using the provider for the desired network (e.g., mainnet, ropsten, etc.)
    const web3 = new Web3(Web3.givenProvider);

    // Generate a new Ethereum account and retrieve its address
    const account = await web3.eth.accounts.create();
    setAddress(account.address);
    console.log(address);
  };

  function handleReleaseTimeChange(event) {
    setReleaseTime(event.target.value);
  }

  function handleAmountChange(event) {
    setAmount(event.target.value);
  }

  async function handleSubmit(event) {
    event.preventDefault();

    const amountInWei = web3.utils.toWei(amount);

    //Temporarily set status to pending while I work on the smart contract

    setStatus(`Pending transaction... Amount: ${amountInWei} Wei || Receiver: ${address} || Release Time: ${releaseTime}`);


    // TODO: Call the smart contract's sendFunds function

    /*const tx = await contract.methods.sendFunds(address, releaseTime).send({
      from: account,
      value: amountInWei
    }).on('transactionHash', (hash) => {
        setStatus(`Transaction submitted: ${hash}`);
  }) 
    .on('receipt', (receipt) => {
        setStatus(`Transaction confirmed: ${receipt.transactionHash}`);
      })
      .on('error', (error) => {
        setStatus(`Transaction failed: ${error.message}`);
      });

    console.log(tx);*/
  }

  return (
    <div className='TimeLockContainer'>
      <h1><span className='TimeLockHeader'>Time Lock</span> Wallet</h1>

      <div className='account'>
        <p><span>Account - </span> {account}</p>
      </div>
      <HowItWorks/>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="hodlerAddress">Address to send funds</label>
          <input type="text" id="hodlerAddress" defaultValue={address} placeholder={address} />
          <button onClick={handleClick}>Generate address</button>
        </div>
        <div>
          <label htmlFor="releaseTime">Release date & time:</label>
          <input type="datetime-local" id="releaseTime" value={releaseTime} onChange={handleReleaseTimeChange} />
        </div>
        <div>
          <label htmlFor="amount">Amount:</label>
          <input type="number" id="amount" value={amount} onChange={handleAmountChange} />
        </div>
        <button type="submit">Lock Funds</button>
      </form>
      <p>{status}</p>
    </div>
  );
}

export default Timelock;