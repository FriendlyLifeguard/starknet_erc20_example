"use client";
import { useAccount, useConnect, useDisconnect } from "@starknet-react/core"
import { Button } from "./ui/Button"
import * as DialogPrimitive from '@radix-ui/react-dialog';
import { Dialog } from "@radix-ui/themes";



export default function ConnectWallet() {
  const { connectors, connect } = useConnect();

  return (

    <Dialog.Root>
      <Dialog.Trigger>
        <Button>Connect Wallet</Button>
      </Dialog.Trigger>
    </Dialog.Root>

    <Dialog.Content style={{ maxWidth: 400}}>
      <Dialog.Header>Connect Wallet</Dialog.Title>
    </Dialog.Content>

    <div className="w-full flex justify-end">
      <
      <span>Choose a wallet: </span>
      {connectors.map((connector) => {
        return (
          <Button
            key={connector.id}
            onClick={() => connect({ connector })}
            className="gap-x-2 mr-2"
          >
            {connector.id}
          </Button>
        );
      })}
    </div>
  );

}


