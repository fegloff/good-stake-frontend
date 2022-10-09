import { useWeb3React } from "@web3-react/core";
import { useEffect, useState } from "react";
import CurrencyInput from "react-currency-input-field";

import FullLogo from "../../components/full-logo/full-logo.component";
import HumanVerification from "../../components/human-verification/human-verification.component";
import Staking from "../../components/staking/staking.component";
import { truncateAddressString } from "../../utils/utils";
import { getTokenBalance } from "../../utils/web3/contracts/tokens.contract";
//import { getBalance } from "../../utils/web3/web3.utils";

import "./humans-home.styles.scss";

const HumansHome = () => {
  const [balance, setBalance] = useState("0.0");
  const [registered, setRegistered] = useState(false); //migrate to Redux
  const { account } = useWeb3React();
  const gskAddress = process.env.REACT_APP_GSK_CONTRACT; //ETH temporary
  
  useEffect(() => {
    const getWalletBalance = async () => {
      const amount = await getTokenBalance(account, gskAddress);
      setBalance(amount);
    };

    if (balance === "0.0") {
      getWalletBalance();
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="humans-home">
      <div className="humans-home__content main-container">
        <FullLogo />
        {registered ? (
          <>
            <h2>You've got rewards!</h2>
            <CurrencyInput
              id="input-balance"
              name="input-balance"
              value={balance}
              decimalsLimit={2}
              suffix=" ETH"
              readOnly
            />
            <div className="humans-home__content--payments">
              <button className="good-button">Pay Services</button>
              <button className="good-button">Withdraw</button>
            </div>
          </>
        ) : (
          <HumanVerification setRegistered={setRegistered} />
        )}
      </div>
    </div>
  );
};

export default HumansHome;
