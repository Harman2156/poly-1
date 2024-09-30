 # Polygon-Advanced-Module-1: NFT Collection on Ethereum and Polygon
## Project Overview
This project focuses on deploying an NFT collection on the Ethereum blockchain (sepolia Testnet), mapping that collection to the Polygon network, and transferring assets between Ethereum and Polygon using the Polygon Bridge.

## Key Steps to Execute:
1. Cloning the Repository:
 - First, download the project repository to get access to the entire project structure and files.
2. Installing Dependencies:

 - Navigate to the project directory and install all required dependencies like Hardhat and necessary Node.js packages.
3. Running Tests:

 - After setting up the environment, run the available test files to verify the code and contract functionalities.
4. Deploying the ERC721 Contract:

 - Before deploying, configure the environment by renaming the .env file and providing your wallet private key.
Deploy the contract to the Goerli Testnet (a testing version of Ethereum).
5. Updating Contract Addresses:

 - After deploying the contract, you'll receive a generated address. You’ll need to update this address in relevant script files such as those used for batch minting NFTs.
6. Minting NFTs:

 - You can batch mint a specified number of NFTs on the Goerli Testnet using the deployed ERC721 contract. The NFTs will be assigned to your wallet address.
7. Approving and Transferring NFTs to Polygon:

 - Once the NFTs are minted, they can be approved and transferred to the Polygon Mumbai network using the FxPortal Bridge. This process allows your assets to move between Ethereum and Polygon networks.
## Licensing and Author:
This project is licensed under the MIT License and easy to use.
## Technical Information:
Languages Used: The project is primarily built using JavaScript and Solidity.





