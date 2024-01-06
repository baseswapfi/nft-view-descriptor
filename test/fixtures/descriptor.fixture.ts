import { impersonateAccount } from '@nomicfoundation/hardhat-network-helpers';
import { ethers } from 'hardhat';

const TREASURY = '0xAF1823bACd8EDDA3b815180a61F8741fA4aBc6Dd';

export async function descriptorFixture() {
  await ethers.provider.ready;
  const chainId = ethers.provider.network.chainId;

  await impersonateAccount(TREASURY);
  const signer = await ethers.getSigner(TREASURY);

  const NFTViewDescriptor = await ethers.getContractFactory('NFTViewDescriptor', signer);
  const nftDescriptor = await NFTViewDescriptor.deploy();
  await nftDescriptor.deployed();

  return {
    nftDescriptor,
    chainId,
    signer,
  };
}
