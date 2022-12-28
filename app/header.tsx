'use client';

import Link from "next/link";
import Wallet from './wallet';
import ClientOnly from './clientOnly';
import WagmiProvider from "../providers/wagmi";

export default function Header() {
  return (
    <nav className="flex items-center justify-between flex-wrap p-6">
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="flex-grow">
        </div>
        <div>

        </div>
      </div>
    </nav>
  )
}