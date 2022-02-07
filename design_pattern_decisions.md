Interface
The front-end interface of Scaffold-Eth provides a safe and user-friendly means of utilizing both the YourContract and the PTBallot smart contracts. Using the interface, you interact with YourContract and enter ballot information that goes into the constructor of PTBallot and deploys the contract at an external address. Within the contract, the address is indexed and on Scaffold-Eth you can see the index of the contract you created and retrieve your deployed address. Then, you can look at your deployed contract on https://rinkeby.etherscan.io/address/YOUR_ADDRESS and vote once on the ballot within time limitations. Additionally, since you are the chairperson, you can give another person the ability to vote. 

Access Control Design Patterns
Purposely, the only access control is within the PTBallot contract. Within YourContract, anyone can create an election, and designate the chairperson (owner of the Ballot contract), which makes deploying the contract universally usable. In PTBallot, only the chairperson can grant access to vote for each candidate, and no write functions are allowed to external users unless they are granted access as a voter.

