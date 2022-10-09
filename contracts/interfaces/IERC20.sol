// SPDX-License-Identifier: MIT LICENSE

pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

interface GSKToken is IERC20 {
  function balanceOf(address account) external view override returns (uint256);
  function allowance(address owner, address spender) external view returns (uint256);
  function approve(address spender, uint256 amount) external returns (bool);
  function transfer(address to, uint256 amount) external returns (bool);
  function transferFrom(address from, address to, uint256 amount) external returns (bool); 
  function totalSupply() external view override returns (uint256);
  function mint(address to, uint256 amount) external;
  function burn(uint256 amount) external;
  function grantRole(bytes32 role, address account) external;
  function setMinterRole(address account) external;
  function burnFrom(address account, uint256 amount) external;
}