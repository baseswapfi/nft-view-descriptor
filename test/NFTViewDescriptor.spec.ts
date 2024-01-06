import { loadFixture } from '@nomicfoundation/hardhat-network-helpers';
import { expect } from 'chai';
import { ethers } from 'hardhat';
import { descriptorFixture } from './fixtures/descriptor.fixture';
import { BASESWAP_CONTRACTS } from '@baseswapfi/contracts';

const BSWAP_ETH_NFT_POOL = '0xaA93C2eFD8fcC07c723E19A6e78eF5d2644BF391';

describe('NFTViewDescriptor', () => {
  describe('Deployment', () => {
    it('sets authorizations', async () => {
      const { nftDescriptor, signer } = await loadFixture(descriptorFixture);

      expect(await nftDescriptor.hasRole(await nftDescriptor.DEFAULT_ADMIN_ROLE(), signer.address)).to.be.true;
      expect(await nftDescriptor.hasRole(await nftDescriptor.ADMIN_ROLE(), signer.address)).to.be.true;
    });
  });

  describe('getPositionDescription', () => {
    it('reverts for invalid token ID', async () => {
      const { nftDescriptor } = await loadFixture(descriptorFixture);
      await expect(nftDescriptor.getPositionDescription(BSWAP_ETH_NFT_POOL, 100000000000)).to.be.reverted;
    });
  });
});
