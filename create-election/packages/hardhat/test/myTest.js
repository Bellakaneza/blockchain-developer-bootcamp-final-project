const { ethers } = require("hardhat");
const { use, expect } = require("chai");
const { solidity } = require("ethereum-waffle");

use(solidity);

//Tests the deployment of YourContract, and ensures that it can easily deploy PTBallot and record each ballot


describe("YourContract", function () {

  let YourContract;
  let myContract;
  let setCandidates;
  let setParties;
  let deployedAddr;
  let setExpiration;
  let savedAddress;


  before((done) => {
    setTimeout(done, 2000);
  });

  describe("Deployment", function () {
  
  
    it("Should deploy YourContract", async function () {
      const YourContract = await ethers.getContractFactory("YourContract");
      
     
      
      myContract = await YourContract.deploy();
    });

    describe("startElec() Function", function () {
      it("Should deploy a PTBallot contract", async function () {

       const [owner] = await ethers.getSigners();
       setCandidates = ["0x666f6f0000000000000000000000000000000000000000000000000000000000", "0x6261720000000000000000000000000000000000000000000000000000000000"];
       setParties = ["0x666f6f0000000000000000000000000000000000000000000000000000000000", "0x6261720000000000000000000000000000000000000000000000000000000000"];
       setExpiration = 5;
       savedAddress = owner.address;
       await myContract.startElec(setCandidates, setParties, savedAddress, setExpiration);
 	
 });

      it("Should add the deployed PTBallot address", async function () {

  

	const myAddr = await myContract.getsDeployedBallots();

        expect(myAddr.length).to.equal(1);

      });

      it("Should increment the ballotId", async function () {



	const ballotId = await myContract.ballotId();

        expect(ballotId).to.equal(1);
      });

      it("Should match ballotIds to deployed PTBallot addresses", async function () {
      	
      	const ballotId = await myContract.ballotId();

	const myAddr = await myContract.getsDeployedBallots();

	const idToBallot = await myContract.idToBallot(ballotId);

        expect(idToBallot).to.equal(myAddr.toString());
      });

    });



//Tests the deployment of PTBallot, and ensures the election is created with the correct arguments inputted.

describe("PTBallot Contract", function () {


    describe("Deployment", function () {
      it("Should deploy and set public variables from constructor", async function () {
       const [owner] = await ethers.getSigners();
       savedAddress = owner.address	
       setCandidates = ["0x666f6f0000000000000000000000000000000000000000000000000000000000", "0x6261720000000000000000000000000000000000000000000000000000000000"];
 	setParties = ["0x666f6f0000000000000000000000000000000000000000000000000000000000", "0x6261720000000000000000000000000000000000000000000000000000000000"];
 	setExpiration = 10;
	const PTContract = await ethers.getContractFactory("PTBallot");
 	const newPTContract = await PTContract.deploy(setCandidates, setParties, savedAddress, setExpiration);
 
        expect(await newPTContract.chairperson()).to.equal(savedAddress);
      });


    });
  });
});
  });


