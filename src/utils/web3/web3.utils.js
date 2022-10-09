import { ethers } from "ethers";

// export const parseFromWei = (wei, Web3Client) => {
//   return parseFloat(Web3Client.utils.fromWei(wei)).toFixed(2); 
// }

export const parseToWei = (amount) => {
  return ethers.utils.parseEther(amount);
}