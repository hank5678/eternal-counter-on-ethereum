import Web3 from "web3";

const RPC_URL = process.env.SEPOLIA_RPC_URL;
const PRIVATE_KEY = process.env.DEPLOYER_PRIVATE_KEY;
const CONTRACT_ADDRESS = process.env.CONTRACT_ADDRESS;

if (!RPC_URL || !PRIVATE_KEY || !CONTRACT_ADDRESS) {
  throw new Error(
    "Missing env: SEPOLIA_RPC_URL, DEPLOYER_PRIVATE_KEY, CONTRACT_ADDRESS",
  );
}

const ABI = [
  {
    inputs: [],
    name: "get",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "increment",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "newValue",
        type: "uint256",
      },
    ],
    name: "Incremented",
    type: "event",
  },
];

const web3 = new Web3(RPC_URL);
const account = web3.eth.accounts.privateKeyToAccount(PRIVATE_KEY);
web3.eth.accounts.wallet.add(account);

const contract = new web3.eth.Contract(ABI, CONTRACT_ADDRESS);

export { web3, account, contract };
