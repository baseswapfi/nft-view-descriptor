// SPDX-License-Identifier: MIT
pragma solidity ^0.8.15;

interface INFTViewDescriptor {
    function constructTokenURI(address nftPoolAddres, uint256 tokenId) external view returns (string memory);
}
