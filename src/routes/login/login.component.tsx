import MetamaskLogo from "../../assets/imgs/logos/Metamask.svg";
import CoinbaseLogo from "../../assets/imgs/logos/Coinbase.svg";
import WalletButton from "../../components/wallet-button/wallet-button.component";
import { connectors } from "../../utils/web3/connectors";

import "./login.styles.scss";
import FullLogo from "../../components/full-logo/full-logo.component";
import { useEffect, useState } from "react";
import { IoAccessibilityOutline  } from "react-icons/io5";
import { TbHeartHandshake  } from "react-icons/tb";

//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import { solid } from "@fortawesome/fontawesome-svg-core/import.macro"; // <-- import styles to be used
import { useWeb3React } from "@web3-react/core";

type LoginButtonProps = {
  children: any;
  to: string;
  setTo: any;
  text: string;
};

type ConnectWalletProps = {
  to: string;
}
const ConnectWallet = ({to} : ConnectWalletProps) => {
  return (
    <div className="connect-wallet">
      <h2>Please connect your Wallet</h2>
      <div className='connect-wallet__buttons'>
        <WalletButton logo={CoinbaseLogo} connector={connectors.coinbase} to={to}/>
        <WalletButton logo={MetamaskLogo} connector={connectors.injected} to={to}/>
      </div>
    </div>
  );
};

const LoginButton = ({ children, to, setTo, text }: LoginButtonProps) => {
  const handleClick = () => {
    setTo(to);
  };

  return (
    <div className="login-button">
      <div className="login-button__icon" onClick={handleClick}>
        {children}
      </div>
      <span>{text}</span>
    </div>
  );
};

const Login = () => {
  const [to, setTo] = useState("");
  const { active, account } = useWeb3React();
  console.log('TO',to);

  return (
    <div className="login">
      <div className="login__wallet">
        <FullLogo />
        {!to ? (
          <>
            <h2>How do you want to participate?</h2>
            <div className="login__wallet--buttons">
              <LoginButton
                //children={<FontAwesomeIcon icon={solid("person")} />}
                children={<IoAccessibilityOutline />}
                text="As Human"
                to="good"
                setTo={setTo}
              />
              <LoginButton
              children={<TbHeartHandshake />}
                // children={
                //   <FontAwesomeIcon icon={solid("hands-holding-circle")} />
                // }
                text="As Staker"
                to="stake"
                setTo={setTo}
              />
            </div>
          </>
        ) : <ConnectWallet to={to} />}
      </div>
    </div>
  );
};

export default Login;

// return (
//   <div className='login'>
//     <div className='login__wallet'>
//       <FullLogo />
//       <div className='login__wallet--buttons'>
//       <h2>Connect your Wallet</h2>
//         <WalletButton logo={MetamaskLogo} connector={connectors.injected} />
//         <WalletButton logo={CoinbaseLogo} connector={connectors.coinbase}/>
//       </div>
//     </div>
//   </div>
// )
