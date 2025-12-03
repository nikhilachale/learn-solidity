// SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.13;

import "forge-std/Test.sol";

import "src/WhomeCoin.sol";

contract TestContract is Test {
    WhomeCoin c;

    function setUp() public {
        c = new WhomeCoin();
    }

    function testInc() public {
       assertEq((uint(2)), uint(2),"ok");
    }
       


   
}
