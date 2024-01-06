import { ChainId } from '../types';

export const CHAINLINK_FEEDS = {
  [ChainId.BASE]: {
    ETH_USD: {
      address: '0x71041dddad3595F9CEd3DcCFBe3D1F4b0a16Bb70',
      decimals: 8,
    },
    BTC_USD: {
      address: '0xCCADC697c55bbB68dc5bCdf8d3CBe83CdD4E071E',
      decimals: 8,
    },
    USDC_USD: {
      address: '0x7e860098F58bBFC8648a4311b374B1D669a2bc6B',
      decimals: 8,
    },
    DAI_USD: {
      address: '0x591e79239a7d679378eC8c847e5038150364C78F',
      decimals: 8,
    },
    USDT_USD: {
      address: '0xf19d560eB8d2ADf07BD6D13ed03e1D11215721F9',
      decimals: 8,
    },
    LINK_USD: {
      address: '0x17CAb8FE31E32f08326e5E27412894e49B0f9D65',
      decimals: 8,
    },
  },
  [ChainId.BASE_GOERLI]: {
    ETH_USD: {
      address: '0xcD2A119bD1F7DF95d706DE6F2057fDD45A0503E2',
      decimals: 8,
    },
    BTC_USD: {
      address: '0xAC15714c08986DACC0379193e22382736796496f',
      decimals: 8,
    },
    USDC_USD: {
      address: '0xb85765935B4d9Ab6f841c9a00690Da5F34368bc0',
      decimals: 8,
    },
    DAI_USD: {
      address: '0x440bD1535a02243d72E0fEED45B137efcC98bF7e',
      decimals: 8,
    },
    USDT_USD: {
      address: '0xd5973EB46D6fE54E82C5337dD9536B35D080912C',
      decimals: 8,
    },
    LINK_USD: {
      address: '0x907A947C5F34eC68F8D4eD87d4bac3FA6431a4D1',
      decimals: 8,
    },
  },
};
