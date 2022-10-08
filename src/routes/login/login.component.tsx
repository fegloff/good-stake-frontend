
import MetamaskLogo from '../../assets/imgs/logos/Metamask.svg';
import CoinbaseLogo from '../../assets/imgs/logos/Coinbase.svg';
import WalletButton from '../../components/wallet-button/wallet-button.component';
import { connectors } from "../../utils/web3/connectors";

import './login.styles.scss';
import FullLogo from '../../components/full-logo/full-logo.component';

const Login = () => {
  return (
    <div className='login'>
      <div className='login__wallet'>
        <FullLogo />
        <div className='login__wallet--buttons'>
        <h2>Connect your Wallet</h2>
          <WalletButton logo={MetamaskLogo} connector={connectors} />
          <WalletButton logo={CoinbaseLogo} connector={connectors}/>
        </div>
      </div>
    </div>
  )
}

export default Login;