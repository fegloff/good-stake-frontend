//import Web3 from "web3";
import { ethers } from "ethers";

const REGISTER_CONTRACT = process.env.REACT_APP_REGISTER_ADDRESS;
const REGISTER_ABI = [
  {
    inputs: [
      {
        internalTyp: "address",
        name: "human",
        type: "address",
      },
      {
        internalType: "string",
        name: "worldId",
        type: "string",
      },
    ],
    name: "addWallet",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const provider = new ethers.providers.Web3Provider(window.ethereum);
const signer = provider.getSigner();

const getContract = (abi, address) => {
  const USDTContract = new ethers.Contract(address, abi, signer);
  return USDTContract;
};

export const register = async (walletAddress, worldcoinId, setResult, setValidationError) => {
  try {
    const contract = getContract(REGISTER_ABI, REGISTER_CONTRACT);
    const result = await contract.addWallet(walletAddress, worldcoinId);
    setResult(result);
    console.log("RESULT", result);
  } catch (e) {
    console.log("ERROR", { e });
    setValidationError(e);
  }
};
