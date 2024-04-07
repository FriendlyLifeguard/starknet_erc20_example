"use client";
import React from "react";
import { InjectedConnector } from "starknetkit/injected";
import { publicProvider, StarknetConfig } from "@starknet-react/core";
import { sepolia, mainnet } from "@starknet-react/chains";
import { voyager } from "@starknet-react/core";

export function StarknetProvider({children}: { children: React.ReactNode }) {

const chains = [mainnet, sepolia]
const provider = publicProvider()
const connectors = [
  new InjectedConnector({ options: {id: "argentX", name: "Argent X" }}),
  new InjectedConnector({ options: {id: "braavos", name: "Braavos" }})
]

  return (
    <StarknetConfig
      chains={chains}
      provider={provider}
      connectors={connectors}
      explorer={voyager}
    >
      {children}
    </StarknetConfig>
  );
}

