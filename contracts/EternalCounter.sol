// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract EternalCounter {
    uint256 private counter;

    event Incremented(uint256 newValue);

    function get() external view returns (uint256) {
        return counter;
    }

    function increment() external {
        counter += 1;
        emit Incremented(counter);
    }
}
