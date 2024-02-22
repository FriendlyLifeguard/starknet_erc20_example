"use client"
import { useAccount, useContractRead, useContractWrite, useContract, useNetwork } from "@starknet-react/core";

const ContractAddress = "0x03E4273BF47991E21d0c80B8C39f71dA1274Db22534fc74F7cC4C8C14928639A";
const DECIMALS = 18;

// Credits to @PhilippeR26 for this function
function formatBalance(qty: bigint, decimals: number): string {
  const balance = String("0").repeat(decimals) + qty.toString();
  const rightCleaned = balance.slice(-decimals).replace(/(\d)0+$/gm, "$1");
  const leftCleaned = BigInt(balance.slice(0, balance.length - decimals)).toString();
  return leftCleaned + "." + rightCleaned;
}

export default function ReadBalance() {
  const { address } = useAccount();
  const { data, isError, isLoading, error } = useContractRead({
    abi: [
      {
        "type": "function",
        "name": "balanceOf",
        "inputs": [
          {
            "name": "account",
            "type": "core::starknet::contract_address::ContractAddress"
          }
        ],
        "outputs": [
          {
            "type": "core::integer::u256"
          }
        ],
        "state_mutability": "view"
      },
    ],
    functionName: "balanceOf",
    args: [address as string], 
    address: ContractAddress,
    watch: true,
  });

  if (isLoading) return <div>Loading ...</div>;
  if (isError || !data) return <div>{error?.message}</div>;
  //@ts-ignore
  return <div>{formatBalance(data, DECIMALS)}</div>

}
