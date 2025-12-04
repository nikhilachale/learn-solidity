// SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.13;

contract SimpleStaking {
    uint256 public totalStaked;
    mapping(address => uint256) public stakedBalances;

    // Not required but helpful
    event Staked(address user, uint256 amount);
    event Unstaked(address user, uint256 amount);

    // User sends ETH with the transaction
    function stake() public payable {
        require(msg.value > 0, "Send some ETH");

        stakedBalances[msg.sender] += msg.value;
        totalStaked += msg.value;

        emit Staked(msg.sender, msg.value);
    }

    // User withdraws their ETH
    function unstake(uint256 amount) public {
        require(amount > 0, "Amount must be > 0");
        require(amount <= stakedBalances[msg.sender], "Not enough balance");

        stakedBalances[msg.sender] -= amount;
        totalStaked -= amount;

        payable(msg.sender).transfer(amount);

        emit Unstaked(msg.sender, amount);
    }
}