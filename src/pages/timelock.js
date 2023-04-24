import React, { useState, useEffect } from 'react';
import './timelock.css'
import Web3 from 'web3';
import TimeLockWallet from '../contracts/TimeLockWallet.json';
import ChatWidget from '../components/chatWidget';

function Timelock() {
  const [releaseTime, setReleaseTime] = useState('');
  const [amount, setAmount] = useState('');
  const [contract, setContract] = useState(null);
  const [web3, setWeb3] = useState(null);
  const [account, setAccount] = useState('');
  const [address, setAddress] = useState('');


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

    const tx = await contract.methods.sendFunds(address, releaseTime).send({
      from: account,
      value: amountInWei
    });

    console.log(tx);
  }

  return (
    <div>
      <h1>Time Lock Wallet</h1>
      <div className='account'>
        <p><span>Account - </span> {account}</p>
      </div>
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
          <label htmlFor="amount">Amount (Wei):</label>
          <input type="number" id="amount" value={amount} onChange={handleAmountChange} />
        </div>
        <button type="submit">Lock Funds</button>
      </form>
      <ChatWidget/>
    </div>
  );
}

export default Timelock;