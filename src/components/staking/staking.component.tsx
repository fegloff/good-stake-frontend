import CurrencyInput from "react-currency-input-field";

import "./staking.styles.scss";

const Staking = () => {
  return (
    <div className="staking">
      <CurrencyInput
        id="input-example"
        name="input-name"
        placeholder="How much do you want to contribute"
        //defaultValue={1000}
        decimalsLimit={18}
        suffix=' ETH'
        onValueChange={(value, name) => console.log(value, name)}
      />
      <div className="staking__button">
        <button className="good-button">Stake</button>
      </div>
    </div>
  );
};

export default Staking;
