'use client';
import { useState, useMemo } from "react"
import { connect, disconnect } from "get-starknet"
import { Contract, RpcProvider, Uint256, cairo, BigNumberish} from "starknet"

const contractAddress = "0x015157a72040b9cf73ee2cfad421a72b04f06b09032e6ee968be1ab7aba4477a";
const RpcNetwork = new RpcProvider({ nodeUrl: "https://starknet-goerli.g.alchemy.com/v2/" + process.env.NEXT_PUBLIC_API_KEY});
const DECIMALS = 18;

// Credits to @PhilippeR26 for this function
function formatBalance(qty: bigint, decimals: number): string {
  const balance = String("0").repeat(decimals) + qty.toString();
  const rightCleaned = balance.slice(-decimals).replace(/(\d)0+$/gm, "$1");
  const leftCleaned = BigInt(balance.slice(0, balance.length - decimals)).toString();
  return leftCleaned + "." + rightCleaned;
}

function App() {
  const [provider, setProvider] = useState({} as RpcProvider)
  const [address, setAddress] = useState('')
  const [currentBlockHash, setCurrentBlockHash] = useState('')
  const [balance, setBalance] = useState('')
  const [isConnected, setIsConnected] = useState(false)
  const [recipient, setRecipient] = useState('0x')
  const [amount, setAmount] = useState('')
  

  const disconnectWallet = async () => {
    try {
      await disconnect({ clearLastWallet: true })
      setProvider({} as RpcProvider)
      setAddress('')
      setIsConnected(false)
    }
    catch (error: any) {
      alert(error.message)
    }
  }

  const connectWallet = async () => {
    try {
      const starknet = await connect()
      if (!starknet) throw new Error("Failed to connect to wallet.")
      await starknet.enable({ starknetVersion: "v5" })
      setProvider(starknet.account)
      setAddress(starknet.selectedAddress || '')
      setIsConnected(true)
    }
    catch (error: any) {
      alert(error.message)
    }
  }

  const checkBalance = async () => {
    try {
      // initialize contract using abi, address and provider
      const { abi: testAbi } = await provider.getClassAt(contractAddress);
      if (testAbi === undefined) { throw new Error("no abi.") };
      const contract = new Contract(testAbi, contractAddress, provider)
      // make contract call
      const data: bigint = await contract.balanceOf(address)
      
      const newData = formatBalance(data, DECIMALS)
    
      setBalance(newData);
    }
    catch (error: any) {
      alert(error.message)
    }
  }

  const transfer = async () => {
    try {
      // initialize contract using abi, address and provider
      const { abi: testAbi } = await provider.getClassAt(contractAddress);
      if (testAbi === undefined) { throw new Error("no abi.") };
      const contract = new Contract(testAbi, contractAddress, provider)

      const newAmount: Uint256 = cairo.uint256((amount as any) * (10 ** DECIMALS))

      const myCall = contract.populate("transfer", [recipient, newAmount]);
      const res = await contract.transfer(myCall.calldata);
      
    }
    catch (error: any) {
      alert(error.message)
    }
  }

  const current_block_hash = async () => {
    try {
      const block = await RpcNetwork.getBlockLatestAccepted()
      setCurrentBlockHash(block.block_hash);
      
    }
    
    catch (error: any) {
      alert(error.message)
    }
  }

  current_block_hash()

  const shortenedAddress = useMemo(() => {
    if (!isConnected) return ''
    return `${address.slice(0, 6)}...${address.slice(-4)}`
  }, [isConnected, address])

  const handleAmountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setAmount(event.target.value);
  };

  return (
    <div>
      <p>Latest block hash: {currentBlockHash}</p>
      <p>Deployed Contract Address: {contractAddress}</p>
      {isConnected ?
        <div>
          <span>Connected: {shortenedAddress}</span>
          <p><button onClick={()=> {disconnectWallet()}}>Disconnect</button></p>
          <hr />
          <p>Balance:</p>
          <p>{balance}</p>
          <p><button onClick={() => checkBalance()}>Check Balance</button></p>
          <hr />
          <p>Transfer</p>
          <p>Recipient:
              <input
              type="text"
              value={recipient}
              onChange={e => setRecipient(e.target.value)}
              />
          </p>
          <p>Amount:
            <input
            type="number"
            value={amount}
            onChange={e => setAmount(e.target.value)}
            />
          </p>
          <p>
            <button onClick={() => transfer()}>Transfer</button>
          </p>
          <hr/>
        </div> :
        <div>
          <span>Choose a wallet:</span>
          <p>
            <button onClick={() => connectWallet()}>Connect a Wallet</button>
          </p>
        </div>
      }
    </div>
  );
}

export default App;