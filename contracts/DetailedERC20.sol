pragma solidity ^0.4.24;

import "./ERC20.sol";

/**
 * @title DetailedERC20 token
 * @dev The decimals are only for visualization purposes.
 * All the operations are done using the smallest and indivisible token unit,
 * just as on Ethereum all the operations are done in wei.
 */
contract DetailedERC20 is ERC20 {
  string public name = "YanLuoCoin";
  string public symbol = "YLC";
  uint8 public decimals = 18;
}