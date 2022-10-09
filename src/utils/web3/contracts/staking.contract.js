//import Web3 from "web3";
import { ethers } from "ethers";
import { parseToWei } from "../web3.utils";

const STAKING_CONTRACT = process.env.REACT_APP_STAKING_ADDRESS;
const STAKING_ABI = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "stake",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
];

const provider = new ethers.providers.Web3Provider(window.ethereum);
const signer = provider.getSigner();

const getContract = (abi, address) => {
  const USDTContract = new ethers.Contract(address, abi, signer);
  return USDTContract;
};

export const stake = async (wallet, amount, setResult, setValidationError) => {
  try {
    const amountWei = parseToWei(amount);
    const contract = getContract(STAKING_ABI, STAKING_CONTRACT);
    const result = await contract.stake(amountWei, { value: amountWei });
    setResult(result);
    console.log("RESULT", result);
  } catch (e) {
    console.log('ERROR',{e});
    setValidationError(e);
  }
};
