import { useWeb3React } from "@web3-react/core";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import "./wallet-button.styles.scss";

type WalletButtonProps = {
  logo: any;
  connector: any;
};
const WalletButton = ({ logo, connector }: WalletButtonProps) => {
  const { activate, deactivate, active, account } = useWeb3React();
  const navigate = useNavigate();

  const handleClick = () => {
    if (!active) {
      activate(connector.injected, (error) => {
        console.log(error.toString());
      });
    } else {
      deactivate();
    }
  };

  useEffect(() => {
    if (active && account) {
      navigate("stake/");
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active, account]);
  
  return (
    <div className="wallet-button">
      <button onClick={handleClick}>
        <img src={logo} alt="wallet logo" />
      </button>
    </div>
  );
};

export default WalletButton;
