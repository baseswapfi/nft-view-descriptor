import { ethers } from 'hardhat';
import { deployTestToken } from './utils/contract.utils';
import { formatUnits, parseUnits } from 'ethers/lib/utils';

async function main() {
  try {
    const signer = (await ethers.getSigners())[0];
    const decimals = 18;
    const mintAmount = parseUnits('100000', decimals);
    const tokie = await deployTestToken('Deez DAI', 'DAI', decimals, mintAmount, signer);
    console.log('Test balance: ' + formatUnits(await tokie.balanceOf(signer.address), decimals));
  } catch (error) {
    console.error(error);
    process.exitCode = 1;
  }
}

main();
