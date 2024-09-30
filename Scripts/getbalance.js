const hre = require("hardhat");
const tokenContractJSON = require("../artifacts/contracts/harman.sol/harman.json");

const tokenAddress = " 0x0c2EA56b2dcEE9cc2b0bA8187d004C560cbC3cA9"; // place your erc20 contract address here
const tokenABI = tokenContractJSON.abi;
const walletAddress = "0x4e5d280e914A0F67E49b204795acF4aa7BFfd526"; // place your public address for your wallet here

async function main() {

    const token = await hre.ethers.getContractAt(tokenABI, tokenAddress);

    console.log("You now have: " + await token.balanceOf(walletAddress) + " tokens");
  }
  
  // We recommend this pattern to be able to use async/await everywhere
  // and properly handle errors.
  main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
