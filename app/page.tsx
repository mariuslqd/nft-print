'use client';

import { Inter } from '@next/font/google'
import NFTs from './nfts';

import Wallet from './wallet';
import ClientOnly from './clientOnly';
import WagmiProvider from "../providers/wagmi";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <NFTs />
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
