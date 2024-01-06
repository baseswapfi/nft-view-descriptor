// SPDX-License-Identifier: MIT
pragma solidity 0.8.15;

import "@openzeppelin/contracts/utils/Strings.sol";
import "@openzeppelin/contracts/access/AccessControl.sol";
import "base64-sol/base64.sol";

import { INFTViewDescriptor, NFTDescription } from "./interfaces/INFTViewDescriptor.sol";
import { INFTPool } from "./interfaces/INFTPool.sol";
import { IMasterChef } from "./interfaces/IMasterChef.sol";

contract NFTViewDescriptor is AccessControl, INFTViewDescriptor {
    using Strings for uint256;

    bytes32 public constant ADMIN_ROLE = keccak256("ADMIN_ROLE");

    constructor() {
        _grantRole(DEFAULT_ADMIN_ROLE, msg.sender);
        _grantRole(ADMIN_ROLE, msg.sender);
    }

    error InvalidTokenId();
    error InvalidPool();

    /// @notice Generate a NFTDescription from live on-chain values.
    function getPositionDescription(
        address nftPoolAddress,
        uint256 tokenId
    ) public view override returns (NFTDescription memory nftDescription) {
        /**
         * TODO: Add any requireed checks.
         * So this contract has the option to be used by other systems/contracts without repetitive concerns/checks
         */
        INFTPool pool = INFTPool(nftPoolAddress);
        IMasterChef chef = pool.master();

        _validatePosition(pool, tokenId);

        uint8 lockTier = 10;
        uint8 boostTier = 10;

        if (pool.isUnlocked()) lockTier = 0;
        if (chef.yieldBooster() == address(0)) boostTier = 0;

        nftDescription.lockTier = lockTier;
        nftDescription.boostTier = boostTier;
        nftDescription.owner = pool.ownerOf(tokenId);
    }

    function _validatePosition(INFTPool pool, uint256 tokenId) internal view {
        if (!pool.exists(tokenId)) revert InvalidTokenId();

        // Check for active pool
        (, uint256 allocPoints, uint256 allocPointsWETH, , , , , ) = pool.master().getPoolInfo(address(pool));

        if (allocPoints == 0 && allocPointsWETH == 0) revert InvalidPool();
    }

    // function getPositionLockTier(INFTPool pool) public view returns (uint8) {
    //     uint8 lockTier = 10;

    //     if (pool.isUnlocked()) lockTier = 0;

    //     return lockTier;
    // }

    // function getPositionBoostTier(INFTPool pool, IMasterChef chef) public view returns (uint8) {
    //     uint8 boostTier = 10;

    //     if (chef.yieldBooster() == address(0)) boostTier = 0;

    //     return 0;
    // }
}
