'use client';
import React, { useState, useEffect } from 'react';
import Link from "next/link";
import { getNfts } from "../providers/anker";
import { Nft } from '@ankr.com/ankr.js/dist/types';
import { useAccount } from "wagmi";


export default function Landing() {
  const { address } = useAccount();

return (
    <div className="bg-gradient bg-fade">
<h1 className="text-white">Please connect a wallet to view your NFTs.</h1>
</div>
)
}