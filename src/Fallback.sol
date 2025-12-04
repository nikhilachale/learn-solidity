// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.0;

contract Proxy {
    address public implementation;

    constructor(address _implementation) {
        implementation = _implementation;
    }

    fallback() external  {
        // Forward the call to the implementation contract
        (bool success, ) = implementation.delegatecall(msg.data);
        if(!success) {
            revert("Delegate call failed");
        }
    }
}

contract ImplementationV1 {
    uint public num;
    address public implementation;

    function setNum(uint _num) public {
        num = _num;
    }
}
