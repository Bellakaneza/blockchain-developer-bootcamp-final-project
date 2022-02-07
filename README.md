# 🏗 Scaffold-ETH - CreateElection - Bella Kaneza

> everything you need to build on Ethereum! 🚀

🧪 Create instant virtual elections on the Rinkeby Testnet

Two Contracts are used to make a full voting dApp on the Rinkeby Testnet

The first is PTBallot, which contains the functionality for voting and delegating votes.
It implements the standard Ballot functionality, but adds political parties, and time limitations to each Ballot, hence PTBallot = Party & Time Ballot.
Additionally, you can view the time left before the election expires in seconds. (ballotEndDate() function).

The second contract is CreateElection, which creates a new instance of the PTBallot contract every time startElec is called, and its purpose is that you don't need to use constructor parameters to deploy PTBallot. Instead you just put in the startElec parameters, and they are used to deploy the PTBallot contracts easily. Just input the candidate name, party name, chairperson/owner address, and the amount of days (0-255) the ballot should last, and then the ballot contract is created at the returned address. 

# 🏄‍♂️ Quick Start (Using a pre-made Contract at address 0x4aDA00ca5a0F4766F3897913BC33229C254b92D4)

http://ptballot-election.surge.sh/

# 🏄‍♂️ Quick Start (Using your own Contract on Local Host)

Prerequisites: [Node](https://nodejs.org/en/download/) plus [Yarn](https://classic.yarnpkg.com/en/docs/install/) and [Git](https://git-scm.com/downloads)

> clone/fork 🏗 scaffold-eth:

> install and start your 👷‍ Hardhat chain:

```bash
cd create-election
yarn install
yarn chain
```

> in a second terminal window, start your 📱 frontend:

```bash
cd create-election
yarn start
```

> in a third terminal window, 🛰 deploy your contract:

```bash
cd create-election
yarn deploy
```
> in a fourth terminal window, 📱 test your contract:
```bash
cd create-election
cd packages
cd hardhat
npx hardhat test
```

# 🏄‍♂️ AFTER STARTING HARDHAT CHAIN, STARTING FRONTEND, AND DEPLOYING CONTRACT:
-Go to the 'Create Election' menu tab of localhost:3000 (localhost:3000/debug), and fill in the startElec function with the following:

-Candidate names (bytes32 array), parties (bytes32 array), address of ballot chairperson (address), and length of Election in days (uint8) up to 255 days.


EXAMPLE parameters for startElec --

["0x666f6f0000000000000000000000000000000000000000000000000000000000", "0x6261720000000000000000000000000000000000000000000000000000000000"] ["0x666f6f0000000000000000000000000000000000000000000000000000000000", "0x6261720000000000000000000000000000000000000000000000000000000000"] 
(Enter your public ETH address here) 
5

--

-Get the deployed address of your Ballot from either deployedBallots or getsDeployedBallots
-Go on https://rinkeby.etherscan.io/address/DEPLOYED_ADDRESS
-Go to 'Write Contract', connect to web3 and vote!
-Go to 'Read Contract', and you can see the winning candidate
-Once the election deadline passes, the election is over, but the results are still viewable
-Vote on the ballot using the deployedAddress 




🔏 Edit your smart contract `YourContract.sol` in `packages/hardhat/contracts`

📝 Edit your frontend `App.jsx` in `packages/react-app/src`

💼 Edit your deployment scripts in `packages/hardhat/deploy`

📱 Open http://localhost:3000 to see the app

# 📚 Documentation

Documentation, tutorials, challenges, and many more resources, visit: [docs.scaffoldeth.io](https://docs.scaffoldeth.io)

