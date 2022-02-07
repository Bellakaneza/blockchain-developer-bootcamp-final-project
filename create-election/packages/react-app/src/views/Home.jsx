import React from "react";
import { Link } from "react-router-dom";
import { useContractReader } from "eth-hooks";
import { ethers } from "ethers";

/**
 * web3 props can be passed from '../App.jsx' into your local view component for use
 * @param {*} yourLocalBalance balance on current network
 * @param {*} readContracts contracts from current chain already pre-loaded using ethers contract module. More here https://docs.ethers.io/v5/api/contract/contract/
 * @returns react component
 */
function Home({ yourLocalBalance, readContracts }) {
  // you can also use hooks locally in your component of choice
  // in this case, let's keep track of 'purpose' variable from our contract
  const purpose = useContractReader(readContracts, "YourContract", "purpose");

  return (
    <div>
      <div style={{ margin: 32 }}>
        <span style={{ marginRight: 8 }}>🤖</span>
        Welcome to PTBallot: a smart contract voting implementation with additional features.
        <span
          className="highlight"
          style={{ marginLeft: 4, /* backgroundColor: "#f9f9f9", */ padding: 4, borderRadius: 4, fontWeight: "bolder" }}
        >
         create-election/packages/hardhat/contracts/YourContract.sol
        </span>
      </div>
      <div style={{ margin: 32 }}>
        <span style={{ marginRight: 8 }}>🌏</span>
        

        <span
          className="highlight"
          style={{ marginRight: 8  }}
        ></span>
		🤖 EXAMPLE parameters for the startElec() Function: 🤖
</div>
<div style={{ margin: 32 }}>
		["0x666f6f0000000000000000000000000000000000000000000000000000000000", "0x6261720000000000000000000000000000000000000000000000000000000000"]<br />
		 ["0x666f6f0000000000000000000000000000000000000000000000000000000000", "0x6261720000000000000000000000000000000000000000000000000000000000"] <br />
		(Enter your public ETH address here)<br />
		 5

     <span
          className="highlight"
          style={{ marginRight: 8  }}
        ></span>
        <span
          className="highlight"
          style={{ marginLeft: 4, /* backgroundColor: "#f9f9f9", */ padding: 4, borderRadius: 4, fontWeight: "bolder" }}
        ></span>   
        </div>
        <div style={{ margin: 32 }}>
         After submitting your election, go to https://rinkeby.etherscan.io/address/DEPLOYED_ADDRESS#writeContract and click "Connect to web3" using the contract owner account.
         <br />
         Example of a PTBallot Election Contract:  <Link to={{ pathname: "https://rinkeby.etherscan.io/address/0xEAdA3D055D98260b4379955C5DD0921528a3d452#writeContract" }} target="_blank" >https://rinkeby.etherscan.io/address/0xEAdA3D055D98260b4379955C5DD0921528a3d452#writeContract</Link>
        </div>
   

     
      <div style={{ margin: 32 }}>
        <span style={{ marginRight: 8 }}>💭</span>
        Check out the <Link to="/yourcontract">"Create Election"</Link> tab to start your election.
      </div>

    </div>
  );
}

export default Home;
