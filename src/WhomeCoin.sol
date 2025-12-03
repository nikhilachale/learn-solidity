// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.19;

import "node_modules/@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "node_modules/@openzeppelin/contracts/access/Ownable.sol";

contract WhomeCoin is ERC20, Ownable {
    uint8 private constant _DECIMALS = 18;

    constructor() ERC20("Whome", "WM") {}

    function decimals() public pure override returns (uint8) {
        return _DECIMALS;
    }

    // Mint to owner
    function mint(uint256 amount) public onlyOwner {
        require(amount > 0, "Invalid amount");
        _mint(_msgSender(), amount);
    }

    // Mint to specific address
    function mintTo(address to, uint256 amount) public onlyOwner {
        require(to != address(0), "Invalid address");
        require(amount > 0, "Invalid amount");
        _mint(to, amount);
    }

  
}