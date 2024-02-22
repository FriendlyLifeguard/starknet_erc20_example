import { useState, useMemo } from "react"
import { contractABI } from "@/components/lib/abi"
import { useAccount, useContract, useContractWrite } from "@starknet-react/core"
import { Uint256, cairo } from "starknet"
import { Button } from "./ui/Button"



const ContractAddress = "0x03E4273BF47991E21d0c80B8C39f71dA1274Db22534fc74F7cC4C8C14928639A";
const DECIMALS = 18;

export default function Transfer() {

  const { address } = useAccount();
  const [ recipient, setRecipient ] = useState('');
  const [ amount, setAmount ] = useState('')

  const { contract } = useContract({
    abi: contractABI,
    address: ContractAddress
});

  const newAmount: Uint256 = cairo.uint256((amount as any) * (10 ** DECIMALS))
    
  const calls = useMemo(() => {
    if (!address || !contract || !recipient) return [];
    return contract.populateTransaction["transfer"]!(recipient, newAmount);
  }, [contract, address, recipient, newAmount])


  const {
    writeAsync,
    data, 
    isPending, 
  } = useContractWrite({
    calls,
  });

  return (
    <>
    <p>
        </p>
        <p>Recipient:
              <input
              type="text"
              value={recipient}
              onChange={e => setRecipient(e.target.value)}
              style={{ padding: '2px', border: '1px solid green', borderRadius: '5px' }}
              />
        </p>
        <p>Amount:
            <input
            type="number"
            value={amount}
            onChange={e => setAmount(e.target.value)}
            style={{ padding: '2px', border: '1px solid green', borderRadius: '5px' }}
            />
        </p>
        <Button onClick={() => writeAsync()}>Transfer</Button>
        <p>status: {isPending && <div>Submitting...</div>}</p>
			  <p>hash: {data?.transaction_hash}</p>
    </>
  );
}