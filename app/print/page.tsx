'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image'
import { useSearchParams } from 'next/navigation';
import { getNftMetadata } from "../../providers/anker";

async function getNftImageUrl(address: string, tokenId: string) {
  const res = await getNftMetadata(address, tokenId);
  return res.attributes?.imageUrl ?? ""
}

export default function Print() {
  const searchParams = useSearchParams();

  const address = searchParams.get('address')!;
  const tokenId = searchParams.get('tokenId')!;

  const [nftUrl, setNftUrl] = useState("");

  useEffect(() => {
    async function getData() {
      const result = await getNftImageUrl(address, tokenId);

      setNftUrl(result);
    }

    getData();
  });

  return (
    <div className='flex flex-col rounded border p-4'>
      <Image src={nftUrl} width={500} height={500}/>
    </div>
  )
}
