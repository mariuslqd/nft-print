'use client';

import { FormspreeProvider } from '@formspree/react';
import React, { useState, useEffect } from 'react';
import Image from 'next/image'
import { useSearchParams } from 'next/navigation';
import { getNftMetadata } from "../../providers/anker";
import Link from "next/link";
import SignupForm from '../payment';

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
  }, []);
  

  return (
    <div className='bg-gradient2'>
    <div className="flex items-center min-h-screen">
          <div className="centered-box">
              <h1 className="pb-8 text-5xl font-bold text-center text-gray-700">
              NFT Verification Details
                </h1 >
        <div className="flex-1 h-full max-w-4xl mx-auto bg-white border border-black rounded-md">
          <div className="flex flex-col md:flex-row">
            <div className="h-100 md:h-auto md:w-1/2">
              <Image src={nftUrl} alt="NFT image" width={500} height={600}/>
            </div>
            <div className="flex items-center justify-center p-4 md:w-1/2">
              <div className="w-full">
      <SignupForm />

                              </div>
                              </div>
                              </div>
              </div>
              </div>
              </div>
            </div>
  );
}
