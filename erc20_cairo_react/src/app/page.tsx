"use client"
import ReadBalance from "@/components/readBalance";
import Head from "next/head";
import { useNetwork, useExplorer, useAccount} from "@starknet-react/core"
import dynamic from "next/dynamic";
import Transfer from "@/components/transfer";
import { Button } from "@/components/ui/Button";


const ContractAddress = "0x03E4273BF47991E21d0c80B8C39f71dA1274Db22534fc74F7cC4C8C14928639A";
const DECIMALS = 18;

function Home() {
  const { chain } = useNetwork()
  const explorer = useExplorer()
  const { address } = useAccount()

  const ConnectModal = dynamic(
    () => import ("../components/connect-modal"), { ssr: false }
  );

  const DisconnectModal = dynamic(
    () => import("../components/disconnect-modal"), { ssr: false }
  );
    
  return (
    <>
      <Head>
        <title>Homepage</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <p>A basic web3 example with StarknetJS</p>
        <span>Currently Using {chain.name}</span>
        <p> Deployed Contract URL: </p>
        <a href ={explorer.contract("0x03e4273bf47991e21d0c80b8c39f71da1274db22534fc74f7cc4c8c14928639a")} target="_blank" rel="noreferrer"> <Button> View your Contract on {explorer.name} </Button></a>
        { address ?
        <div>
        <DisconnectModal /> 
        <p>
          <div>Token Balance: <ReadBalance/></div> 
        </p>
        <p>
        <Transfer />
        </p>
      </div> :
      <ConnectModal />
      }
    </div>
    </>
  );
}

export default Home;