'use client';

import Wallet from './wallet';
import WagmiProvider from "../providers/wagmi";

export default function Header() {
  return (
    <header>
        <nav>
            <div className="flex items-center">
                <WagmiProvider>
                    <Wallet />
                </WagmiProvider>
            </div>
            <div className="flex items-center justify-between border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10"></div>
        </nav>
    </header>
  )
}
