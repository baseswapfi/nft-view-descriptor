// SPDX-License-Identifier: MIT
pragma solidity ^0.8.15;

struct NFTDescription {
    address owner;
    uint8 lockTier;
    uint8 boostTier;
    string image;
}

interface INFTViewDescriptor {
    function getPositionDescription(
        address nftPoolAddres,
        uint256 tokenId
    ) external view returns (NFTDescription memory);
}
