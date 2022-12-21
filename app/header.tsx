'use client';

import Wallet from './wallet';
import WagmiProvider from "../providers/wagmi";

export default function Header() {
  return (
    <nav class="flex items-center justify-between flex-wrap p-6">
        <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
            <div class="flex-grow">
            </div>
            <div>
                <WagmiProvider>
                    <Wallet />
                </WagmiProvider>
            </div>
        </div>
    </nav>
  )
}

{/*  */}
