import { ethers } from 'ethers';
import abi from '../utils/Baumkuchen.json';

const contractABI = abi.abi;

export const getBalance = async () => {
  try {
    const { ethereum } = window as any;
    if (ethereum) {
      const provider = new ethers.providers.Web3Provider(ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(
        process.env.REACT_APP_CONTRACT_ADDRESS || '',
        contractABI,
        signer
      );
      const balance = await contract.getBalance();
      console.log('balance: ', balance);
      return ethers.utils.formatEther(balance);
    } else {
      console.log("Ethereum object doesn't exist!");
    }
  } catch (error) {
    console.log(error);
  }
};

export const send = async (to: string, amount: string) => {
  try {
    const { ethereum } = window as any;
    if (ethereum) {
      const provider = new ethers.providers.Web3Provider(ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(
        process.env.REACT_APP_CONTRACT_ADDRESS || '',
        contractABI,
        signer
      );
      await contract.send(to, ethers.utils.parseEther(amount));
    } else {
      console.log("Ethereum object doesn't exist!");
    }
  } catch (error) {
    console.log(error);
  }
};

export const deposit = async (amount: string) => {
  try {
    const { ethereum } = window as any;
    if (ethereum) {
      const provider = new ethers.providers.Web3Provider(ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(
        process.env.REACT_APP_CONTRACT_ADDRESS || '',
        contractABI,
        signer
      );
      await contract.deposit({ value: ethers.utils.parseEther(amount) });
    } else {
      console.log("Ethereum object doesn't exist!");
    }
  } catch (error) {
    console.log(error);
  }
};
