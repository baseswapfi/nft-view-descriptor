import {
  impersonateAccount,
  loadFixture,
  setBalance,
  stopImpersonatingAccount,
} from '@nomicfoundation/hardhat-network-helpers';
import { expect } from 'chai';
import { ethers } from 'hardhat';
import { descriptorFixture } from './fixtures/descriptor.fixture';
import { BASESWAP_CONTRACTS } from '@baseswapfi/contracts';
import { MasterChef__factory, NFTPool__factory } from '@baseswapfi/contracts/dist/types/factories/contracts';
import { parseEther } from 'ethers/lib/utils';
import { ZERO_ADDRESS } from './constants';

const BSWAP_ETH_NFT_POOL = '0xaA93C2eFD8fcC07c723E19A6e78eF5d2644BF391';
const VALID_TOKEN_ID = 2000;

// const TREASURY = '0xAF1823bACd8EDDA3b815180a61F8741fA4aBc6Dd';

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

    it('reverts for pools without allocations', async () => {
      const { nftDescriptor, chainId } = await loadFixture(descriptorFixture);

      const TIMELOCK = BASESWAP_CONTRACTS['Timelock'][chainId];
      await impersonateAccount(TIMELOCK);
      await setBalance(TIMELOCK, parseEther('1'));

      const chef = MasterChef__factory.connect(
        BASESWAP_CONTRACTS['MasterChef'][chainId],
        await ethers.getSigner(TIMELOCK)
      );

      await chef.set(BSWAP_ETH_NFT_POOL, 0, 0, false);

      await stopImpersonatingAccount(TIMELOCK);

      await expect(nftDescriptor.getPositionDescription(BSWAP_ETH_NFT_POOL, VALID_TOKEN_ID)).to.be.reverted;
    });

    it('sets lock tier to zero for unlocked pool', async () => {
      const { nftDescriptor, chainId } = await loadFixture(descriptorFixture);

      let description = await nftDescriptor.getPositionDescription(BSWAP_ETH_NFT_POOL, VALID_TOKEN_ID);
      expect(description.lockTier).to.equal(10);

      const TIMELOCK = BASESWAP_CONTRACTS['Timelock'][chainId];
      // Timelock owns Chef/Pools
      await impersonateAccount(TIMELOCK);
      await setBalance(TIMELOCK, parseEther('1'));
      const pool = NFTPool__factory.connect(BSWAP_ETH_NFT_POOL, await ethers.getSigner(TIMELOCK));
      await pool.setEmergencyUnlock(true);
      await stopImpersonatingAccount(TIMELOCK);

      description = await nftDescriptor.getPositionDescription(BSWAP_ETH_NFT_POOL, VALID_TOKEN_ID);

      expect(description.lockTier).to.equal(0);
    });

    // @note Can't set YieldBooster to zero address once already set
    // it('sets boost tier to zero if yield booster is not set', async () => {
    //   const { nftDescriptor, chainId } = await loadFixture(descriptorFixture);

    //   const TIMELOCK = BASESWAP_CONTRACTS['Timelock'][chainId];
    //   await impersonateAccount(TIMELOCK);
    //   await setBalance(TIMELOCK, parseEther('1'));

    //   const chef = MasterChef__factory.connect(
    //     BASESWAP_CONTRACTS['MasterChef'][chainId],
    //     await ethers.getSigner(TIMELOCK)
    //   );

    //   await chef.setYieldBooster(ZERO_ADDRESS);

    //   await stopImpersonatingAccount(TIMELOCK);

    //   await expect(nftDescriptor.getPositionDescription(BSWAP_ETH_NFT_POOL, VALID_TOKEN_ID)).to.be.revertedWithCustomError;
    // });
  });
});
