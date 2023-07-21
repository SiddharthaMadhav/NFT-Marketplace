require("@nomiclabs/hardhat-waffle");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 1337
    },
    mumbai: {
      url: "https://polygon-mumbai.g.alchemy.com/v2/49-V6mqinAKsY_i-kytfM0CNCayALarQ",
      accounts: ["a5e2ce81d3325966fae028b59952636d04faa25a37603e7620d36d471c47d6e4"]
    }
  },
  solidity: {
    version: "0.8.4",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
};
