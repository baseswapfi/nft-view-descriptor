import { parseEther } from '@ethersproject/units';
import { ethers } from 'hardhat';
import { toBytes32 } from './utils';
import { BigNumber } from 'ethers';

export const ZERO_ADDRESS = ethers.constants.AddressZero;
export const MAX_UINT256 = ethers.constants.MaxUint256;
export const TEN_POW_18_BN = BigNumber.from(10).pow(18);
export const ONE_SECOND_MS = 1000;

export const ZERO_BYTES_32 = toBytes32(parseEther('0'));
