// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;


import {ERC20} from "node_modules/@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract MyToken is ERC20 {
    uint256 public number;
    address owner;
    constructor() ERC20("MyToken", "MTK") {
        _mint(msg.sender, 1000 * 10 ** decimals());
         owner = msg.sender;
    }
    function mint(address to, uint256 amount) public {
        _mint(to, amount);
       
    }
}