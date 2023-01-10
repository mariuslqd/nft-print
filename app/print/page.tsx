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
              Fill in your Details
                </h1 >
        <div className="flex-1 h-full max-w-4xl mx-auto bg-white border border-black rounded-md">
          <div className="flex flex-col md:flex-row">
            <div className="h-100 md:h-auto md:w-1/2">
              <Image src={nftUrl} alt="NFT image" width={500} height={600}/>
            </div>
            <div className="flex items-center justify-center p-4 md:w-1/2">
              <div className="w-full">
                <FormspreeProvider stripePK="pk_test_517MznnB8Wt7Kjp0upmeeqVrvhNwCo1i8JpQ5p2sJafRz2yTFinef2jFnSwhcwl0Z4FuKTY4Ve8DbRg6yT2Hc3pLH003kNKe7UY">
      <SignupForm />
    </FormspreeProvider>
                {/* <div>
                  <label>
                    Name/Nickname
                  </label>
                  <input type="text" name="name"
                    className="w-full px-4 py-2 text-sm border rounded-md focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600"
                    placeholder="Name"/>
                </div>
                <div>
                  <label>
                    Email
                  </label>
                  <input type="email" name="email"
                    className="w-full px-4 py-2 text-sm border rounded-md focus:border-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-600"
                    placeholder="Email Address"/>
                </div>
                <div>
                    <label>
                      Twitter
                    </label>
                    <input type="url" name="twitter"
                      className="w-full px-4 py-2 text-sm border rounded-md focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600"
                      placeholder="Twitter link"/>
                  </div>
                <div>
                    <label>
                      Instagram
                    </label>
                    <input type="url" name="instagram"
                      className="w-full px-4 py-2 text-sm border rounded-md focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600"
                      placeholder=" Instagramlink" />
                  </div>
                  <div>
                    <label>
                      Linkedin
                    </label>
                    <input type="url" name="linkedin"
                      className="w-full px-4 py-2 text-sm border rounded-md focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600"
                      placeholder="link" />
                  </div>
                <Link href={{pathname: '/success',}}>
                <button
                  className="block w-full px-4 py-2 mt-4 text-sm font-medium leading-5 text-center text-white transition-colors duration-150 bg-blue-600 border border-transparent rounded-lg active:bg-blue-600 hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue"
                  >
                  Choose the Product
                </button>
                </Link> */}

                              </div>
                              </div>
                              </div>
              </div>
              </div>
              </div>
            </div>
  );
}
