import Logo from '../../assets/imgs/logos/Goodstake (logo).svg';

import './full-logo.styles.scss';

const FullLogo = () => {
  return (
    <div className='full-logo'>
        <img src={Logo} alt='Good Stake'/>
    </div>
  )
}

export default FullLogo;