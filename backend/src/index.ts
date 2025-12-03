import ethers = require("ethers");
const abi = require("./abi");

const provider = new ethers.JsonRpcProvider("https://eth-mainnet.g.alchemy.com/v2/F1JgccBYwIzQNwhsyNSY5gv8kFLlOoEM");
const PRIVATE_KEY = "fba7342ef6879df2c735644c734ea69c140f423d84eb2d53fbdfd53fd5d7c586";
const CONTRACT_ADDRESS = "0xdac17f958d2ee523a2206206994597c13d831ec7";

function getWallet() {
    const wallet = new ethers.Wallet(PRIVATE_KEY, provider);
    return wallet;
}

async function pollBlock(blockNumber: number) {
    console.log("Polling block:", blockNumber);
    try {
        const logs = await provider.getLogs({
            address: CONTRACT_ADDRESS,
            fromBlock: blockNumber,
            toBlock: blockNumber,
            topics: [ethers.id("Burn(address,uint256)")]
        });

        console.log(`Found ${logs.length} Burn events in block ${blockNumber}`);

        logs.forEach(async log => {
            const from = log.topics[1];
            const amount = log.topics[2];
            console.log("Processing event:", { from, amount, transactionHash: log.transactionHash });
            if (from && amount) {
                await sendTxn(from, amount);
            }
        });
    } catch (error) {
        console.error("Error polling block:", error);
    }
}

async function sendTxn(from: string, amount: string) {
    try {
        const wallet = getWallet();
        const contract = new ethers.Contract(CONTRACT_ADDRESS, abi, wallet) as any;
        const tx = await contract.depositeOnOppositeChain(from, amount);
        await tx.wait();
        console.log("Transaction completed:", tx.hash);
    } catch (error) {
        console.error("Transaction failed:", error);
    }
}

pollBlock(21493826)