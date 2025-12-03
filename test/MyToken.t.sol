// SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.13;

import "forge-std/Test.sol";

import "src/MyToken.sol";

contract TestContract is Test {
    MyToken    c;

    function setUp() public {
        c = new MyToken();
    }

    function testMint() public {
    //     c.mint(address(this), 100);
    //    assertEq(c.balanceOf(address(this)), 100,"ok");
    }
       


   
}
