import Web3 from 'web3';

export async function mint(){
    if (!window.ethereum) {
        throw new Error('No MetaMask found!');        
    }
    const _web3 = new Web3(window.ethereum);
    const accounts = await _web3.eth.requestAccounts();
    if (!accounts || !accounts.length) {
        throw new Error('No account allowed!');
    }
    alert(accounts[0]);
}