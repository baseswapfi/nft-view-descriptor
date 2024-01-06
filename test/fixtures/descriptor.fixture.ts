import { ethers } from 'hardhat';

export async function descriptorFixture() {
  await ethers.provider.ready;
  const chainId = ethers.provider.network.chainId;

  const [signer] = await ethers.getSigners();

  const NFTViewDescriptor = await ethers.getContractFactory('NFTViewDescriptor');
  const nftDescriptor = await NFTViewDescriptor.deploy();
  await nftDescriptor.deployed();

  return {
    nftDescriptor,
    chainId,
    signer,
  };
}
