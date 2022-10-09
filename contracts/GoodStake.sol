// SPDX-License-Identifier: MIT LICENSE

pragma solidity ^0.8.9;

import "@openzeppelin/contracts/utils/introspection/IERC165.sol";
import "@openzeppelin/contracts-upgradeable/security/PausableUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/security/ReentrancyGuardUpgradeable.sol";

import "./interfaces/ISSVNetwork.sol";

contract GoodStake is
    ReentrancyGuardUpgradeable,
    PausableUpgradeable
{
    address SSV_NETWORK_ADDRESS = 0xb9e155e65B5c4D66df28Da8E9a0957f06F11Bc04;

    bytes private _publicKey;
    uint32[] private _operatorIds;
    bytes[] private _sharesPublicKeys; 
    bytes[] private _sharesEncrypted; 
    uint256 private _amount;

    /** MEMBERS */

    /// @notice Quest definitions
    mapping(address => uint256) public _stakers;

    uint256 private _poolAmount;

    /** EVENTS */

    /// @notice Emitted when a quest has been completed
    event AmountStaked(
        address account,
        uint256 amount
    );

    /**
     * Initializer for this upgradeable contract
     *
     */
    function initialize() public initializer {
        __Pausable_init();
        __ReentrancyGuard_init();
        _pause();
    }

    /**
     * stakes to ethereum, emits event
     */
    function stakeToEthereum()
        public
        pure
        returns(uint256)
    {
        // stake to ethereum here
        return 0;
    }

    /**
     * pre-stakes and amount internal amount
     * @param amount the amount to stake
     */
    function stake(
        uint256 amount
    ) public {
        require(
            amount > 0,
            "WRONG_AMOUNT: amount must be greater than zero"
        );
        // add amount to staker
        _stakers[msg.sender] += amount;
        _poolAmount += amount;

        if (verifyPoolStatus()) stakeToEthereum();

        // Emit amount staked event
        emit AmountStaked(msg.sender, amount);
    }

    /**
     * pre-stakes and amount internal amount
     * @return boolean positive if the pool amount is greater than 32
     */
    function verifyPoolStatus()
        internal
        view
        returns (bool)
    {
        return _poolAmount > 32 ? true : false;
    }

    /**
     * registers SSV validator, emits event
     */
    function setValidatorData(bytes memory publicKey, uint32[] memory operatorIds, bytes[] memory sharesPublicKeys, bytes[] memory sharesEncrypted, uint256 amount)
        external
    {
        _publicKey = publicKey;
        _operatorIds = operatorIds;
        _sharesPublicKeys = sharesPublicKeys;
        _sharesEncrypted = sharesEncrypted;
        _amount = amount;
    }

    /**
     * registers SSV validator, emits event
     */
    function resgisterValidator()
        external
    {
        ISSVNetwork i = ISSVNetwork(SSV_NETWORK_ADDRESS);
        i.registerValidator(_publicKey, _operatorIds, _sharesPublicKeys, _sharesEncrypted, _amount);
    }
}
