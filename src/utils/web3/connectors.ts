import { InjectedConnector } from "@web3-react/injected-connector";
import { WalletLinkConnector } from "@web3-react/walletlink-connector";
//import { WalletConnectConnector } from "@web3-react/walletlink-connector";

/**
 * Array of supported Chains
 */
const supportedChainIds = [1, 3, 4, 5, 42];

const injected = new InjectedConnector({
  supportedChainIds
});

const coinbaseWallet = new WalletLinkConnector({
  url: `${process.env.REACT_APP_INFURA_API_KEY}${process.env.REACT_APP_INFURA_API_KEY}`,
  appName: "GoodStake",
  supportedChainIds
});

export const connectors = {
  injected: injected,
  coinbase: coinbaseWallet
}

