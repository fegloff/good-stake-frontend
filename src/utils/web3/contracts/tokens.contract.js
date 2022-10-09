import { ethers } from "ethers";

import { getContract, parseFromWei } from "../web3.utils";

const tokensABI = [
  {
    "constant": true,
    "inputs": [{ "name": "_owner", "type": "address" }],
    "name": "balanceOf",
    "outputs": [{ "name": "balance", "type": "uint256" }],
    "type": "function",
  },
];


export const getTokenBalance = async (walletAddress, tokenAddress) => {
  const contract = getContract(tokensABI, tokenAddress);
  console.log(contract);
  console.log(tokenAddress);
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  //const numStr = await provider.getBalance(walletAddress);// (tokenAddress)
  
  console.log(parseFromWei(await provider.getBalance(tokenAddress)));

  //const wei = parseFromWei(numStr);// parseInt(numStr);
  //console.log(wei); //, wei);
  // //const ether = web3.utils.fromWei(wei, "ether");
  // //const result = await contract.stake(amountWei, { value: amountWei });
  // const result = await contract.balanceOf(); //walletAddress); 
  
  return '0.198';//result;
}


export default tokensABI;