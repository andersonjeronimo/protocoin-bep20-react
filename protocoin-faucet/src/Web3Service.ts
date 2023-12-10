import Web3 from 'web3';
import ABI from './abi.json';
const CONTRACT_ADDRESS = `${process.env.REACT_APP_CONTRACT_ADDRESS}`;

export async function mint() {
    if (!window.ethereum) {
        throw new Error('No MetaMask found!');
    }
    const _web3 = new Web3(window.ethereum);
    const accounts = await _web3.eth.requestAccounts();
    if (!accounts || !accounts.length) {
        throw new Error('No account allowed!');
    }
    //const contract = new _web3.eth.Contract(ABI, '0xc45FD1bC5991672465480BA95081F9e7c58129A0', { from: accounts[0] });
    const contract = new _web3.eth.Contract(ABI, CONTRACT_ADDRESS, { from: accounts[0] });
    const tx = await contract.methods.mint().send();
    return tx.transactionHash;    
}