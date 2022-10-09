// SPDX-License-Identifier: MIT LICENSE
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/utils/introspection/IERC165.sol";
import "@openzeppelin/contracts-upgradeable/security/PausableUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/security/ReentrancyGuardUpgradeable.sol";

import "./interfaces/IERC20.sol";
import "./interfaces/ISSVNetwork.sol";

contract UBI is
    ReentrancyGuardUpgradeable,
    PausableUpgradeable
{
    address SSV_NETWORK_ADDRESS = 0xb9e155e65B5c4D66df28Da8E9a0957f06F11Bc04;
    address GSK_TOKEN_ADDRESS;

    /** MEMBERS */

    /// @notice Quest definitions

    mapping(address => string) public _humans;
    address[] public _allAccounts;
    
    uint256 private _totalRewards;
    uint256 private _currentRewards;

    address public gskToken;

    /** EVENTS */

    /// @notice Emitted when a quest has been completed
    event RewardAdded(
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
     * adds a wallet
     * @param human the human to be added
     */
    function addWallet(address human, string memory worldId)
        external returns(bool)
    {
        bytes memory tempEmptyStringTest = bytes(_humans[human]);
        if(tempEmptyStringTest.length != 0) return false;
        _allAccounts.push(human);
        _humans[human] = worldId;
        return true;
    }

    /**
     * add rewards to be distributed
     * @param amount the amount to stake
     */
    function addRewards(
        uint256 amount
    ) public {
        require(
            amount > 0,
            "WRONG_AMOUNT: amount must be greater than zero"
        );
        
        _totalRewards += amount;
        _currentRewards += amount;

        // Emit reward added event
        emit RewardAdded(amount);
    }

    /**
     * distribute rewards and emits and event
     */
    function distributeRewards()
        internal
    {
        GSKToken gsk = GSKToken(GSK_TOKEN_ADDRESS);
        for (uint i=0; i < _allAccounts.length; i++) {
            gsk.mint(_allAccounts[i], calculateUBI());
        }
    }

    /**
     * calculates how much UBI will be distributed per human
     */
    function calculateUBI()
        internal
        view
        returns(uint256)
    {
        return _currentRewards / _allAccounts.length;
    }

    /** 
     * Set the address of the ERC-20 token
     * @param _erc20 the address of the ERC-20 token contract
     */
    function setGskTokenAddress(address _erc20) external nonReentrant {
        GSK_TOKEN_ADDRESS = _erc20;
    }

}
