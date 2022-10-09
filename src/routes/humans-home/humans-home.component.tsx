import { useWeb3React } from "@web3-react/core";

import FullLogo from "../../components/full-logo/full-logo.component";
import Staking from "../../components/staking/staking.component";
import { truncateAddressString } from "../../utils/utils";

import './humans-home.styles.scss';

const HumansHome = () => {
  const { account } = useWeb3React();
  
  return (
    <div className='home'>
      <div className='home__content main-container'>
        <FullLogo />
        <h2>Welcome</h2>
        <h4>Here you can access your XXXX</h4>
        <input value={truncateAddressString(account!,15)} readOnly/>
        <Staking />
      </div>
    </div>
  )
}

export default HumansHome;