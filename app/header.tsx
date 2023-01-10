'use client';

import Link from "next/link";
import Wallet from './wallet';
import ClientOnly from './clientOnly';
import WagmiProvider from "../providers/wagmi";

export default function Header() {
  return (
    <nav className="flex items-center justify-between flex-wrap p-6">
        <div className="logo">
          <Link href="/" className="mb-4 text-3xl font-extrabold tracking-tight leading-none text-white">NFT Pod </Link>
          <span className="logo-beta">Beta</span>
        </div>
        <div className="flex-grow">
        </div>
        <div>
        </div>
    </nav>
  )
}