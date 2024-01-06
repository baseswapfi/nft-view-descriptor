// SPDX-License-Identifier: MIT
pragma solidity 0.8.15;

import "@openzeppelin/contracts/utils/Strings.sol";
import "@openzeppelin/contracts/access/AccessControl.sol";
import "base64-sol/base64.sol";

import { INFTViewDescriptor, NFTDescription } from "./interfaces/INFTViewDescriptor.sol";
import { INFTPool } from "./interfaces/INFTPool.sol";

contract NFTViewDescriptor is AccessControl, INFTViewDescriptor {
    using Strings for uint256;

    bytes32 public constant ADMIN_ROLE = keccak256("ADMIN_ROLE");

    constructor() {
        _grantRole(DEFAULT_ADMIN_ROLE, msg.sender);
        _grantRole(ADMIN_ROLE, msg.sender);
    }

    error InvalidTokenId();

    /// @notice Generate tokenURI as a base64 encoding from live on-chain values.
    function getPositionDescription(
        address nftPoolAddres,
        uint256 tokenId
    ) external view override returns (NFTDescription memory nftDescription) {
        INFTPool pool = INFTPool(nftPoolAddres);

        /**
         * TODO: Add any requireed checks.
         * So this contract has the option to be used by other systems/contracts without repetitive concerns/checks
         */
        if (!pool.exists(tokenId)) revert InvalidTokenId();

        // uint8 boostTier;

        if (pool.isUnlocked()) nftDescription.lockTier = 0;
    }
}
