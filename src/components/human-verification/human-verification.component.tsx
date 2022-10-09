import { useWeb3React } from "@web3-react/core";
import { WorldIDWidget } from "@worldcoin/id";
import { useState } from "react";
import { register } from "../../utils/web3/contracts/register.contract";

import './human-verification.styles.scss';

type HumanVerificationProps = {
  setRegistered : any
}

type validationErrorType = {
  code: string; // "INSUFFICIENT_FUNDS"
  error?: any;
  method?: string; // "estimateGas"
  reason?: string; //"insufficient funds for intrinsic transaction cost"
  transaction?: any;
  message?: string;
  stack?: string;
};

const HumanVerification = ({ setRegistered } : HumanVerificationProps) => {
  const [validationError, setValidationError] = useState<validationErrorType>({
    code: "",
  });
  const [result, setResult] = useState(false);
  const { account } = useWeb3React();
  
  const verificationSuccess = (proof: any) => {
    console.log(proof);
    register(account,proof.nullifier_hash,setResult,setValidationError);
    setRegistered(true);
  }

  return (
    <div className="human-verification">
      <h2>Register to start earning rewards!</h2>
      <p>With GoodStake, you will receive rewards that will help you with your daily expenses, including utility bills, taxes, groceries, etc.</p>
      <WorldIDWidget
        actionId="wid_staging_e57d9f2c651a1c949797d5a36bbc4c29" // obtain this from developer.worldcoin.org
        signal={account!}
        enableTelemetry
        onSuccess={(proof) => verificationSuccess(proof)}
        onError={(error) => console.error(error)}
        debug={true} // to aid with debugging, remove in production
      />
    </div>
  );
};

export default HumanVerification;
