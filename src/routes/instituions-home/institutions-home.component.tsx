import { useWeb3React } from "@web3-react/core";

import FullLogo from "../../components/full-logo/full-logo.component";
import Staking from "../../components/staking/staking.component";
import { truncateAddressString } from "../../utils/utils";

import './institutions-home.styles.scss';

const InstitutionsHome = () => {
  const { account } = useWeb3React();
  
  return (
    <div className='institutions-home'>
      <div className='institutions-home__content main-container'>
        <FullLogo />
        <h2>Welcome</h2>
        <h4>Your contribution is part of the growth of our Society</h4>
        <input value={truncateAddressString(account!,15)} readOnly/>
        <Staking />
      </div>
    </div>
  )
}

export default InstitutionsHome;