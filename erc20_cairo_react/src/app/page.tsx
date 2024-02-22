"use client"
import ReadBalance from "@/components/readBalance";
import Head from "next/head";
import { useNetwork, useExplorer, useAccount} from "@starknet-react/core"
import dynamic from "next/dynamic";
import Transfer from "@/components/transfer";
import { Button } from "@/components/ui/Button";

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
        <a 
        href ={explorer.contract("0x03e4273bf47991e21d0c80b8c39f71da1274db22534fc74f7cc4c8c14928639a")} 
        target="_blank" 
        rel="noreferrer"> 
        <Button> View your Contract on {explorer.name} </Button>
        </a>
        { address ? (
        <div>
          <DisconnectModal /> 
          <div>Token Balance: <ReadBalance/></div> 
          <div>
            <Transfer />
          </div>
      </div> 
    ) : (
      <ConnectModal />
      )}
    </div>
    </>
  )
}

export default Home;