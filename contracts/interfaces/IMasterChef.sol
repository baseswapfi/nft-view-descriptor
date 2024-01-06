// SPDX-License-Identifier: MIT
pragma solidity ^0.8.15;

interface IMasterChef {
    function yieldBooster() external view returns (address);

    function getPoolInfo(
        address _poolAddress
    )
        external
        view
        returns (
            address poolAddress,
            uint256 allocPoint,
            uint256 lastRewardTime,
            uint256 reserve,
            uint256 poolEmissionRate
        );
}
