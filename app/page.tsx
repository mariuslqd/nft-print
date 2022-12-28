'use client';

import { Inter } from '@next/font/google'
import NFTs from './nfts';
import Landing from './landing';

import Wallet from './wallet';
import ClientOnly from './clientOnly';
import WagmiProvider from "../providers/wagmi";
import { useAccount } from "wagmi";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const { address } = useAccount();

  return (
    <div>
    <div className="header-promo">
      <p>🎁 You're getting 50% off for being one of the first 100 Customers! ✨ Use Code: "C100"</p>
      </div>
    <div>
      <NFTs />
      {!address &&  <Landing />}
      </div>
      <div className="floating-nft-wallet">
        <ClientOnly>
          <WagmiProvider>
              <Wallet />
          </WagmiProvider>
        </ClientOnly>
    </div>
    </div>
  )
}
