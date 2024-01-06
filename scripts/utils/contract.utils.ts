import { SignerWithAddress } from '@nomiclabs/hardhat-ethers/signers';
import { BigNumber } from 'ethers';
import { ethers } from 'hardhat';

export async function deployTestToken(
  name: string,
  symbol: string,
  decimals: number,
  mintAmount: BigNumber,
  signer: SignerWithAddress
) {
  const fact = await ethers.getContractFactory('TestToken', signer);
  const instance = await fact.deploy(name, symbol, decimals, mintAmount);
  await instance.deployed();
  console.log(`${name} deployed to : ${instance.address}`);

  return instance;
}
