import { useWeb3React } from "@web3-react/core";
import { useState } from "react";

import FullLogo from "../../components/full-logo/full-logo.component";
import HumanVerification from "../../components/human-verification/human-verification.component";
import Staking from "../../components/staking/staking.component";
import { truncateAddressString } from "../../utils/utils";

import "./humans-home.styles.scss";

const HumansHome = () => {
  const [registered, setRegistered] = useState(false); //migrate to Redux
  const { account } = useWeb3React();

  return (
    <div className="humans-home">
      <div className="humans-home__content main-container">
        <FullLogo />
        {registered ? (
          <>
            <h2>You've got rewards!</h2>
            <input value={truncateAddressString(account!, 15)} readOnly />
            <Staking />
          </>
        ) : (
          <HumanVerification setRegistered={setRegistered} />
        )}
      </div>
    </div>
  );
};

export default HumansHome;
