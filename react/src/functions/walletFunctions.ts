export const checkIfWalletIsConnected = async (
) => {
  try {
    const { ethereum } = window as any;
    console.log(ethereum || 'Make sure you have MetaMask!');

    const accounts = await ethereum.request({ method: 'eth_accounts' });

    if (accounts.length !== 0) {
      console.log('Found an authorized account:', accounts[0]);
    } else {
      console.log('No authorized account found');
    }
  } catch (error) {
    console.log(error);
  }
};

export const connectWallet = async (
) => {
  try {
    const { ethereum } = window as any;
    if (!ethereum) {
      alert('Get MetaMask!');
      return;
    }
    const accounts = await ethereum.request({
      method: 'eth_requestAccounts',
    });
    console.log(accounts[0])
  } catch (error) {
    console.log(error);
  }
};
