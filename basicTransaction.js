const { Web3 } = require('web3');
const web3 = new Web3('https://1rpc.io/sepolia');
const sendTransaction = async () => {
    try {
        const nonce = await web3.eth.getTransactionCount( '0x642e9a7c1Fcc753E4a2FEc12C9d48fB66b2ce04A', 'latest');
        const tx = {
            from: '0x642e9a7c1Fcc753E4a2FEc12C9d48fB66b2ce04A',
            to: '0xCA35afdB811D6c249dA00b66b1e510560a9ab726',
            value: web3.utils.toWei('0.001', 'ether'),
            gas: 21000, 
            nonce: nonce,
            gasPrice: await web3.eth.getGasPrice() 
        };

        const signedTx = await web3.eth.accounts.signTransaction(tx, 'edbd5317549b9bece91464e92ddac22003de01dac1cfd3d45dd88e478a78416f');
        const receipt = await web3.eth.sendSignedTransaction(signedTx.rawTransaction);

        const TransactionHash = receipt.transactionHash
        const TransactionDetails = await web3.eth.getTransactionReceipt(TransactionHash);
        console.log('Transaction successful with hash:', TransactionHash);
        console.log('\n');
        console.log('Transaction Reciept => ');
        console.log(TransactionDetails);
    } catch (error) {
        console.error('Error sending transaction:', error);
    }
};

sendTransaction();
