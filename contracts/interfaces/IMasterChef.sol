// SPDX-License-Identifier: MIT
pragma solidity ^0.8.15;

interface IMasterChef {
    function getPoolInfo(
        address _poolAddress
    )
        external
        view
        returns (
            address poolAddress,
            uint256 allocPoints,
            uint256 allocPointsWETH,
            uint256 lastRewardTime,
            uint256 reserve,
            uint256 reserveWETH,
            uint256 poolEmissionRate,
            uint256 poolEmissionRateWETH
        );
}
