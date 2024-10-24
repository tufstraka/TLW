/*// This setup uses Hardhat Ignition to manage smart contract deployments.
// Learn more about it at https://hardhat.org/ignition

const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

const JAN_1ST_2030 = 1893456000;
const ONE_GWEI = 1_000_000_000n;

module.exports = buildModule("LockModule", (m) => {
  const unlockTime = m.getParameter("unlockTime", JAN_1ST_2030);
  const lockedAmount = m.getParameter("lockedAmount", ONE_GWEI);

  const lock = m.contract("Lock", [unlockTime], {
    value: lockedAmount,
  });

  return { lock };
});
const hre = require("hardhat");

async function main() {
  // Get the contract factory (it automatically references the compiled ABI and bytecode)
  const TimeLockWallet = await hre.ethers.getContractFactory("TimeLockWallet");

  // Deploy the contract instance
  const timeLockWallet = await TimeLockWallet.deploy();

  // Wait until the contract is deployed on the network
  await timeLockWallet.deployed();

  console.log("TimeLockWallet deployed to:", timeLockWallet.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });


const { buildModule } = require("@nomicfoundation/hardhat-ignition");

const deploymentModule = buildModule("TimeLockWallet", (m) => {
  // Declare the contract to be deployed
  const timeLockWallet = m.contract("TimeLockWallet");

  return {
    timeLockWallet,
  };
});

export default deploymentModule;*/

/*const { buildModule } = require("@nomicfoundation/hardhat-ignition");

const deploymentModule = buildModule("TimeLockWallet", (m) => {
  const timeLockWallet = m.contract("TimeLockWallet");

  return {
    timeLockWallet,
  };
});

module.exports = deploymentModule;*/

const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");
//const { ethers } = require("hardhat");

/**
 * @param {Object} config Deployment configuration
 * @param {string} config.initialOwner Initial owner address (optional)
 * @returns {Promise<Object>} Deployed contract instances
 */
const deploymentModule = buildModule("TimeLockWallet", (m, config) => {
  // Set default values
  const moduleConfig = {
    initialOwner: null, // Will default to deployer if not specified
    ...config,
  };

  // Deploy the TimeLockWallet contract
  const timeLockWallet = m.contract("TimeLockWallet");

  // If an initial owner is specified and it's different from the deployer,
  // schedule an ownership transfer
  if (moduleConfig.initialOwner) {
    m.call(timeLockWallet, "transferOwnership", [moduleConfig.initialOwner], {
      id: "transfer-ownership",
      after: [timeLockWallet],
    });
  }

  // Example lock setup (optional, commented out by default)
  /*
  // Calculate release time (e.g., 30 days from deployment)
  const THIRTY_DAYS = 30 * 24 * 60 * 60;
  const releaseTime = Math.floor(Date.now() / 1000) + THIRTY_DAYS;

  // Schedule initial fund lock
  m.call(
    timeLockWallet,
    "lockFunds",
    [
      moduleConfig.initialRecipient,
      releaseTime
    ],
    {
      id: "initial-lock",
      after: [timeLockWallet],
      value: ethers.utils.parseEther("1.0"), // 1 ETH
    }
  );
  */

  // Return all deployed contracts and relevant data
  return {
    timeLockWallet,
    // Add any additional return values here
  };
});

// Use CommonJS export syntax
module.exports = deploymentModule;
