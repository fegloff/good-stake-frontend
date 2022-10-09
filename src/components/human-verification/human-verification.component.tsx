import { WorldIDWidget } from "@worldcoin/id";

import './human-verification.styles.scss';

type HumanVerificationProps = {
  setRegistered : any
}
const HumanVerification = ({ setRegistered } : HumanVerificationProps) => {
  return (
    <div className="human-verification">
      <h2>Register to start earning rewards!</h2>
      <WorldIDWidget
        actionId="wid_staging_PN8fFL7V2N" // obtain this from developer.worldcoin.org
        signal="my_signal"
        enableTelemetry
        onSuccess={(proof) => console.log(proof)}
        onError={(error) => console.error(error)}
        debug={true} // to aid with debugging, remove in production
      />
    </div>
  );
};

export default HumanVerification;
