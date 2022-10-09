import { WorldIDWidget } from "@worldcoin/id";

const HumanVerification = () => {
  return (
    <div className="human-verification">
      Verify me!
      <WorldIDWidget
        actionId="wid_staging_PN8fFL7V2N" // obtain this from developer.worldcoin.org
        signal="my_signal"
        enableTelemetry
        onSuccess={(proof) => console.log(proof)}
        onError={(error) => console.error(error)}
        debug={true} // to aid with debugging, remove in production
      />
      ;
    </div>
  );
};

export default HumanVerification;
