// SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.13;

import "forge-std/Test.sol";
import "src/Stack.sol"; // Make sure this contains `contract SimpleStaking`

contract BridgeETHTest is Test {
    SimpleStaking c;

    // Example test user
    address user = address(0x587EFaEe4f308aB2795ca35A27Dff8c1dfAF9e3f);

    function setUp() public {
        c = new SimpleStaking();
    }

    function testStake() public {
        uint256 value = 10 ether;

        // Give test ETH to user
        vm.deal(user, value);

        // Make next call from `user`
        vm.prank(user);
        c.stake{value: value}(); // ✅ NO parameter here

        // Assertions
        assertEq(c.totalStaked(), value, "totalStaked should equal staked value");
        assertEq(c.stakedBalances(user), value, "user staked balance mismatch");
        assertEq(address(c).balance, value, "contract balance should hold ETH");
    }

    function testUnstake() public {
        uint256 value = 11 ether;

        vm.deal(user, value);
        vm.startPrank(user);

        // User stakes ETH
        c.stake{value: value}();

        // Unstake full amount
        c.unstake(value);

        // Assertions
        assertEq(c.totalStaked(), 0, "totalStaked should be zero after full unstake");
        assertEq(c.stakedBalances(user), 0, "user balance should be zero");
        assertEq(address(c).balance, 0, "contract balance should be zero");

        vm.stopPrank();
    }

    function testStakeRevertsOnZero() public {
        vm.deal(user, 1 ether);
        vm.prank(user);

        // Expect revert with "Send some ETH"
        vm.expectRevert(bytes("Send some ETH"));
        c.stake{value: 0}();
    }
}