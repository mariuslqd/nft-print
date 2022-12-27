'use client';
import React, { useState, useEffect } from 'react';
import Link from "next/link";
import { getNfts } from "../providers/anker";
import { Nft } from '@ankr.com/ankr.js/dist/types';
import { useAccount } from "wagmi";

export default function NFTs() {
  const { address, isConnected } = useAccount();
  const [nfts, setNfts] = useState<Nft[]>([]);

  useEffect(() => {
    (async () => {
      if (address) {
      const { nfts } = await getNfts(address ?? "");
      setNfts(nfts);
    } else {
      setNfts([]);
    }})();
  }, [address]);

  return (
    <div className='p-10 flex flex-col items-center'>
      <div className='grid grid-cols-4 mt-8 gap-4'>
        {nfts.map((nft) => {
          return <NFTItem key={nft.tokenId} nft={nft} />;
        })}
      </div>
    </div>
  );
};

function NFTItem({ nft }: any) {
  return (
    <Link href={{
      pathname: '/print',
      query: {
        address: nft.contractAddress,
        tokenId: nft.tokenId
      }
    }}
    >
      <div
        key={`${nft.contractAddress}/${nft.tokenId}`}
        className='flex flex-col rounded border p-4'
      >
        <img
          className='w-[200px] h-[200px] rounded shadow'
          src={nft.imageUrl}
          alt={nft.name}
        />
        <span className='font-bold mt-8'>{nft.name}</span>
        <span>{nft.collectionName}</span>
      </div>
    </Link>
  );
}
