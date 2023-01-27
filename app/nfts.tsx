'use client';
import React, { useState, useEffect } from 'react';
import Link from "next/link";
import { getNfts } from "../providers/anker";
import { Nft } from '@ankr.com/ankr.js/dist/types';
import { useAccount } from "wagmi";


export default function NFTs() {
  const { address } = useAccount();
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
    <div>
        <div className='bg-gradient2'>
              <h1 className="pt-5 text-5xl font-bold text-center text-gray-700">
              Choose one of your NFT's
                </h1 >
                </div>
    <div className='nft-viewer mb-10 pb-10 flex font-flex-col items-center justify-center'>
      <div className='grid mt-8 gap-4 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1'>
        {nfts.map((nft) => {
          return <NFTItem key={nft.tokenId} nft={nft} />;
        })}
      </div>
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
        className='flex flex-col p-4'
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
