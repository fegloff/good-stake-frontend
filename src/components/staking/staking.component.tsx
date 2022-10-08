import './staking.styles.scss';

const Staking = () => {
  return (
    <div className='staking'>
      <input placeholder="How much do you want to contribute"/>
      <div className='staking__button'>
        <button className='good-button'>Stake</button>
      </div>
      
    </div>
  )
} 

export default Staking;