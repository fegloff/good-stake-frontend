import CurrencyInput from "react-currency-input-field";
import { useWeb3React } from "@web3-react/core";

import { stake } from "../../utils/web3/contracts/staking.contract";

import "./staking.styles.scss";
import { useEffect, useState } from "react";

export type receiptType = {
  blockHash?: string;
  blockNumber?: number;
  contractAddress?: string;
  cumulativeGasUsed?: number;
  events?: any
  from?: string;
  gasUsed?: number;
  logsBloom?: string;
  status?: boolean;
  to?: string;
  transactionHash?: string;
  transactionIndex?: number;
  errorMessage?: string;
}

type validationErrorType = {
  code : string; // "INSUFFICIENT_FUNDS"
  error? : any;
  method? : string; // "estimateGas"
  reason?: string; //"insufficient funds for intrinsic transaction cost"
  transaction? : any;
  message? : string;
  stack? : string; 
}

const Staking = () => {
  const [amount, setAmount] = useState('');
  const { account } = useWeb3React();
  const [validationError, setValidationError] = useState<validationErrorType>({ code: ''});
  const [result, setResult] = useState<receiptType>({
    status: true,
    transactionHash: "",
    blockHash: "",
    errorMessage : ""
  });

  const stakeAmount = async () => {
    await stake(account,amount,setResult,setValidationError);
  }
  
  console.log('VALUE',amount);
  console.log('YAHUUA',{result},{validationError});

  useEffect(() => {
    if (!validationError.code && result) {
      console.log('hola');
    }
  }, [result,validationError]);


  return (
    <div className="staking">
      <CurrencyInput
        id="input-example"
        name="input-name"
        placeholder="How much do you want to contribute"
        value={amount}
        //defaultValue={1000}
        decimalsLimit={18}
        suffix=' ETH'
        onValueChange={(value, name) => setAmount(value!)}
      />
      <div className="staking__button">
        <button className="good-button" onClick={stakeAmount}>Stake</button>
      </div>
      {validationError && <div className="staking__error">{validationError.message}</div>}
    </div>
  );
};

export default Staking;
