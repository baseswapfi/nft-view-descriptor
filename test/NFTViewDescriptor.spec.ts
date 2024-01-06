import { loadFixture } from '@nomicfoundation/hardhat-network-helpers';
import { expect } from 'chai';
import { ethers } from 'hardhat';
import { descriptorFixture } from './fixtures/descriptor.fixture';
import { BASESWAP_CONTRACTS } from '@baseswapfi/contracts';

const BSWAP_ETH_NFT_POOL = '0xaA93C2eFD8fcC07c723E19A6e78eF5d2644BF391';

describe('NFTViewDescriptor', () => {
  beforeEach(async () => {});

  it('', async () => {
    const { nftDescriptor } = await loadFixture(descriptorFixture);
    await expect(nftDescriptor.constructTokenURI(BSWAP_ETH_NFT_POOL, 100000000000)).to.be.reverted;
  });
});
