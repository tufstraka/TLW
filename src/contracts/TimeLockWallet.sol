// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract TimeLockWallet {
    // State variables
    address public owner;
    
    // Struct to hold lock details
    struct Lock {
        uint256 amount;
        uint256 releaseTime;
        address recipient;
        bool withdrawn;
    }
    
    // Mapping to store multiple locks
    mapping(uint256 => Lock) public locks;
    uint256 public nextLockId;

    // Events
    event FundsLocked(uint256 indexed lockId, address indexed sender, address indexed recipient, uint256 amount, uint256 releaseTime);
    event FundsWithdrawn(uint256 indexed lockId, address indexed recipient, uint256 amount);
    event OwnershipTransferred(address indexed previousOwner, address indexed newOwner);

    constructor() {
        owner = msg.sender;
    }

    // Modifiers
    modifier onlyOwner() {
        require(msg.sender == owner, "TimeLockWallet: caller is not the owner");
        _;
    }

    modifier validLock(uint256 lockId) {
        require(lockId < nextLockId, "TimeLockWallet: invalid lock id");
        require(!locks[lockId].withdrawn, "TimeLockWallet: funds already withdrawn");
        _;
    }

    /**
     * @notice Transfers ownership of the contract
     * @param newOwner Address of the new owner
     */
    function transferOwnership(address newOwner) external onlyOwner {
        require(newOwner != address(0), "TimeLockWallet: new owner is zero address");
        emit OwnershipTransferred(owner, newOwner);
        owner = newOwner;
    }

    /**
     * @notice Locks funds for a specific recipient
     * @param recipient Address that can withdraw the funds
     * @param releaseTime Timestamp when funds can be withdrawn
     * @return lockId Unique identifier for this lock
     */
    function lockFunds(address recipient, uint256 releaseTime) 
        external 
        payable 
        onlyOwner 
        returns (uint256 lockId) 
    {
        require(recipient != address(0), "TimeLockWallet: recipient is zero address");
        require(msg.value > 0, "TimeLockWallet: amount must be greater than zero");
        require(releaseTime > block.timestamp, "TimeLockWallet: release time must be in future");

        lockId = nextLockId++;
        locks[lockId] = Lock({
            amount: msg.value,
            releaseTime: releaseTime,
            recipient: recipient,
            withdrawn: false
        });

        emit FundsLocked(lockId, msg.sender, recipient, msg.value, releaseTime);
    }

    /**
     * @notice Withdraws funds from a specific lock
     * @param lockId The ID of the lock to withdraw from
     */
    function withdraw(uint256 lockId) external validLock(lockId) {
        Lock storage lock = locks[lockId];
        require(msg.sender == lock.recipient, "TimeLockWallet: caller is not the recipient");
        require(block.timestamp >= lock.releaseTime, "TimeLockWallet: release time not reached");

        lock.withdrawn = true;
        uint256 amount = lock.amount;

        (bool success, ) = lock.recipient.call{value: amount}("");
        require(success, "TimeLockWallet: transfer failed");

        emit FundsWithdrawn(lockId, lock.recipient, amount);
    }

    /**
     * @notice Gets details of a specific lock
     * @param lockId The ID of the lock
     * @return amount The locked amount
     * @return releaseTime The timestamp when funds can be withdrawn
     * @return recipient The address that can withdraw the funds
     * @return withdrawn Whether the funds have been withdrawn
     */
    function getLockDetails(uint256 lockId) 
        external 
        view 
        returns (
            uint256 amount,
            uint256 releaseTime,
            address recipient,
            bool withdrawn
        ) 
    {
        require(lockId < nextLockId, "TimeLockWallet: invalid lock id");
        Lock storage lock = locks[lockId];
        return (
            lock.amount,
            lock.releaseTime,
            lock.recipient,
            lock.withdrawn
        );
    }

    /**
     * @notice Gets the total balance of the contract
     * @return The contract's balance in wei
     */
    function getBalance() external view returns (uint256) {
        return address(this).balance;
    }

    /**
     * @notice Gets the number of locks created
     * @return The total number of locks
     */
    function getLocksCount() external view returns (uint256) {
        return nextLockId;
    }
}