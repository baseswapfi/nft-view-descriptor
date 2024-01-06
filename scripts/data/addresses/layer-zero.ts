// Chain id in this case is propreitary to LayerZero endpoints

import { ChainId } from '../../types';

// Not related to EVM or any chain type id
export const LAYER_ZERO_TESTNET_ENDPOINTS = {
  [ChainId.BASE_GOERLI]: {
    chainId: 10160,
    endpoint: '0x6aB5Ae6822647046626e83ee6dB8187151E1d5ab',
  },
  [ChainId.ARBITRUM_GOERLI]: {
    chainId: 10143,
    endpoint: '0x6aB5Ae6822647046626e83ee6dB8187151E1d5ab',
  },
  OPTIMISM_GOERLI: {
    chainId: 10132,
    endpoint: '0xae92d5aD7583AD66E49A0c67BAd18F6ba52dDDc1',
  },
  SEPOLIA_TESTNET: {
    chainId: 10161,
    endpoint: '0xae92d5aD7583AD66E49A0c67BAd18F6ba52dDDc1',
  },
};

// Chain id in this case is propreitary to LayerZero endpoints
// Not related to EVM or any chain type id
export const LAYER_ZERO_MAINNET_ENDPOINTS = {
  BASE: {
    chainId: 184,
    endpoint: '0xb6319cC6c8c27A8F5dAF0dD3DF91EA35C4720dd7',
  },
  ARBITRUM: {
    chainId: 110,
    endpoint: '0x3c2269811836af69497E5F486A85D7316753cf62',
  },
  OPTIMISM_GOERLI: {
    chainId: 111,
    endpoint: '0x3c2269811836af69497E5F486A85D7316753cf62',
  },
  ZKSYNC: {
    chainId: 165,
    endpoint: '0x9b896c0e23220469C7AE69cb4BbAE391eAa4C8da',
  },
};
