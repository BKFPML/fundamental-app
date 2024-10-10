import axios from 'axios';
import { ALCHEMY_API_KEY } from '@env';

const getEthBalance = async (address: string) => {
    const alchemyUrl = `https://eth-mainnet.g.alchemy.com/v2/${ALCHEMY_API_KEY}`;

    const data = {
      jsonrpc: "2.0",
      method: "eth_getBalance",
      params: [address, "latest"],
      id: 1
    };

    try {
      const response = await axios.post(alchemyUrl, data);
      const weiBalance = response.data.result;
      console.log('Ether balance in wei:', weiBalance);

      // Convert wei to ETH
      const ethBalance = parseFloat(weiBalance) / 1e18;
      console.log('Ether balance in ETH:', ethBalance);
      return ethBalance;
    } catch (error) {
      console.error('Error fetching ETH balance:', error);
      throw error;
    }
  };


const getTokenBalances = async (address: string) => {
  const alchemyUrl = `https://eth-mainnet.g.alchemy.com/v2/${ALCHEMY_API_KEY}`;
  const data = {
    jsonrpc: '2.0',
    method: 'alchemy_getTokenBalances',
    params: [address],
    id: 1
  };

  try {
    const response = await axios.post(alchemyUrl, data);
    const balances = response.data.result;
    console.log(balances);
    return balances;
  } catch (error) {
    console.error('Error fetching token balances:', error);
    throw error;
  }
};

export default {getTokenBalances, getEthBalance};