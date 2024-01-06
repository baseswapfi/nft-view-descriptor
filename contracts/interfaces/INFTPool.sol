// SPDX-License-Identifier: MIT
pragma solidity ^0.8.15;

import { IMasterChef } from "./IMasterChef.sol";

interface INFTPool {
    function exists(uint256 tokenId) external view returns (bool);

    function ownerOf(uint256 tokenId) external view returns (address);

    function master() external view returns (IMasterChef);

    function isUnlocked() external view returns (bool);

    function getPoolInfo()
        external
        view
        returns (
            address lpToken,
            address protocolToken,
            address sbtToken,
            uint256 lastRewardTime,
            uint256 accRewardsPerShare,
            uint256 lpSupply,
            uint256 lpSupplyWithMultiplier,
            uint256 allocPoint
        );

    function getStakingPosition(
        uint256 tokenId
    )
        external
        view
        returns (
            uint256 amount,
            uint256 amountWithMultiplier,
            uint256 startLockTime,
            uint256 lockDuration,
            uint256 lockMultiplier,
            uint256 rewardDebt,
            uint256 boostPoints,
            uint256 totalMultiplier
        );

    function getMultiplierSettings()
        external
        view
        returns (
            uint256 maxGlobalMultiplier,
            uint256 maxLockDuration,
            uint256 maxLockMultiplier,
            uint256 maxBoostMultiplier
        );
}
