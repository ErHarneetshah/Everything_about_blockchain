const { Web3 } = require('web3');

const quickstart3 = new Web3('https://eth.llamarpc.com'); // public RPC Endpoint

const start = async () => {
    const startBlockNum = await quickstart3.eth.getBlockNumber();
    const startChainId = await quickstart3.eth.getChainId();
    const startAccount = await quickstart3.eth.getAccounts();
    const startTransactionCount = await quickstart3.eth.getTransactionCount('0x642e9a7c1Fcc753E4a2FEc12C9d48fB66b2ce04A');
    const startGasPrice = await quickstart3.eth.getGasPrice();

    console.log('Block Number => ' + startBlockNum + " Chain Id => " + startChainId + " Account => " + startAccount+" Transaction Count => "+startTransactionCount+ " Gas Price => "+startGasPrice);
    console.log('\n');

    const randWallet = await quickstart3.eth.accounts.wallet.create(1);
    console.log('Random Wallet => ');
    console.log(randWallet);
};

start();
 