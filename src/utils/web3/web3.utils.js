import { ethers } from "ethers";

export const parseFromWei = (wei) => {
  return ethers.utils.formatEther(wei);// .parse .parseBytes32String(wei); // .pa parseUnits(wei,'eth');// .parseFromWei(wei);//  parseFloat(Web3Client.utils.fromWei(wei)).toFixed(2); 
}

export const parseToWei = (amount) => {
  return ethers.utils.parseEther(amount);
}


export const getContract = (abi, address) => {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();
  const USDTContract = new ethers.Contract(address, abi, signer);
  return USDTContract;
};

// export const getBalance = async (address) => {
//   const provider = new ethers.providers.Web3Provider(window.ethereum);
//   console.log(provider);
//   const balance = await provider.getBalance(address);
//   const balanceInEth = ethers.utils.formatEther(balance);
//   console.log(balanceInEth);
//   return '0.32'; //balanceInEth; 
// }