// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import {ERC20} from "node_modules/@openzeppelin/contracts/token/ERC20/ERC20.sol";
import { IERC20 } from "node_modules/@openzeppelin/contracts/token/ERC20/IERC20.sol";
import { console } from "forge-std/console.sol";
import { Ownable } from "node_modules/@openzeppelin/contracts/access/Ownable.sol";


contract BridgeETH is Ownable {
    uint256 public balance;
    address public tokenAddress;

    mapping(address => uint256) public pendingBalance;

    constructor(address _tokenAddress) Ownable(msg.sender) {
        tokenAddress = _tokenAddress;
    }

    function deposit(IERC20 _tokenAddress, uint256 _amount) public {
        require(IERC20(tokenAddress).allowance(msg.sender, address(this)) >= _amount);
        IERC20(tokenAddress).transferFrom(msg.sender, address(this), _amount);
        pendingBalance[msg.sender] += _amount;

    }

    function withdraw(IERC20 _tokenAddress, uint256 _amount) public {
       uint256 remaining = pendingBalance[msg.sender];
        IERC20(tokenAddress).transfer(msg.sender, _amount);
        pendingBalance[msg.sender] = remaining - _amount;
    }
}