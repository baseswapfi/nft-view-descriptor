// SPDX-License-Identifier: MIT
pragma solidity 0.8.15;

import "@openzeppelin/contracts/utils/Strings.sol";
import "@openzeppelin/contracts/access/AccessControl.sol";
import "base64-sol/base64.sol";

import { INFTViewDescriptor } from "./interfaces/INFTViewDescriptor.sol";
import { INFTPool } from "./interfaces/INFTPool.sol";

contract NFTViewDescriptor is AccessControl, INFTViewDescriptor {
    using Strings for uint256;

    bytes32 public constant ADMIN_ROLE = keccak256("ADMIN_ROLE");

    struct NFTDescription {
        // address owner;
        string image;
    }

    constructor() {
        _grantRole(DEFAULT_ADMIN_ROLE, msg.sender);
        _grantRole(ADMIN_ROLE, msg.sender);
    }

    error InvalidTokenId();

    /// @notice Generate tokenURI as a base64 encoding from live on-chain values.
    function constructTokenURI(
        address nftPoolAddres,
        uint256 tokenId
    ) external view override returns (string memory uri) {
        INFTPool pool = INFTPool(nftPoolAddres);

        /**
         * TODO: Add any requireed checks.
         * So this contract has the option to be used by other systems/contracts without repetitive concerns/checks
         */
        if (!pool.exists(tokenId)) revert InvalidTokenId();

        uint8 lockTier;
        uint8 boostTier;

        if (pool.isUnlocked()) lockTier = 0;

        uri = "";
    }
}
