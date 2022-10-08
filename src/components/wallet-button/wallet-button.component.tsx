import './wallet-button.styles.scss';

type WalletButtonProps = {
  logo : any
}
const WalletButton = ({ logo } : WalletButtonProps) => {
  return (
    <div className='wallet-button'>
      <button>
        <img src={logo} alt='wallet logo'/>
      </button>
    </div>
  )
}

export default WalletButton;