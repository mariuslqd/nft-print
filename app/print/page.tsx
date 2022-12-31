'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image'
import { useSearchParams } from 'next/navigation';
import { getNftMetadata } from "../../providers/anker";
import Link from "next/link";
import { Router, useRouter } from 'next/router';

async function getNftImageUrl(address: string, tokenId: string) {
  const res = await getNftMetadata(address, tokenId);
  return res.attributes?.imageUrl ?? ""
}

export default function Print() {
  const searchParams = useSearchParams();
  const address = searchParams.get('address')!;
  const tokenId = searchParams.get('tokenId')!;
  const [nftUrl, setNftUrl] = useState("");
    // Add the Router import
  const router = useRouter();
  const [route, setRoute] = useState()
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [twitter, setTwitter] = useState('');
  const [instagram, setInstagram] = useState('');
  const [linkedin, setLinkedin] = useState('');
  
  useEffect(() => {
    async function getData() {
      const result = await getNftImageUrl(address, tokenId);

      setNftUrl(result);
    }

    getData();
  });



    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      // Create the new page with the NFT address and tokenId as the URL
      router.push(
        '/display-data',
        `/display-data?address=${address}&tokenId=${tokenId}&name=${name}&email=${email}&twitter=${twitter}&instagram=${instagram}&linkedin=${linkedin}`
      );
    };
    
  

  return (
    <div className="flex items-center min-h-screen">
        <div className="flex-1 h-full max-w-4xl mx-auto bg-white border border-black rounded-md">
          <div className="flex flex-col md:flex-row">
            <div className="h-100 md:h-auto md:w-1/2">
              <Image src={nftUrl} alt="NFT image" width={500} height={600}/>
            </div>
            <div className="flex items-center justify-center p-4 sm:p-6 md:w-1/2">
              <div className="w-full">
                <h1 className="mb-4 text-2xl font-bold text-left text-gray-700">
                  Fill in your details
                  <span className="tooltip">
                    These details will be visible to anyone who has the link of the QR-Code!
                  </span>
                </h1>
            <form onSubmit={handleSubmit}>
                <div>
                  <label className="block text-sm">
                    Name/Nickname
                  </label>
                  <input type="text" name="name"
                    className="w-full px-4 py-2 text-sm border rounded-md focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600"
                    placeholder="Name" value={name} onChange={(e) => setName(e.target.value)}/>
                </div>
                <div className="mt-4">
                  <label className="block text-sm">
                    Email
                  </label>
                  <input type="email" name="email"
                    className="w-full px-4 py-2 text-sm border rounded-md focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600"
                    placeholder="Email Address" value={email} onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div>
                    <label className="block text-sm">
                      Twitter
                    </label>
                    <input type="url" name="twitter"
                      className="w-full px-4 py-2 text-sm border rounded-md focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600"
                      placeholder="link" value={twitter} onChange={(e) => setTwitter(e.target.value)}/>
                  </div>
                <div>
                    <label className="block text-sm">
                      Instagram
                    </label>
                    <input type="url" name="instagram"
                      className="w-full px-4 py-2 text-sm border rounded-md focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600"
                      placeholder="link" value={instagram} onChange={(e) => setInstagram(e.target.value)}/>
                  </div>
                  <div>
                    <label className="block text-sm">
                      Linkedin
                    </label>
                    <input type="url" name="linkedin"
                      className="w-full px-4 py-2 text-sm border rounded-md focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600"
                      placeholder="link" value={linkedin} onChange={(e) => setLinkedin(e.target.value)}/>
                  </div>
                <div>
                <button
                      className="block w-full px-4 py-2 mt-4 text-sm font-medium leading-5 text-center text-white transition-colors duration-150 bg-blue-600 border border-transparent rounded-lg active:bg-blue-600 hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue"
                      type="submit"                      >
                      Choose the Product
                    </button>
                {/* <Link href={{pathname: '/success',}}>
                <button
                  className="block w-full px-4 py-2 mt-4 text-sm font-medium leading-5 text-center text-white transition-colors duration-150 bg-blue-600 border border-transparent rounded-lg active:bg-blue-600 hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue"
                  >
                  Choose the Product
                </button>
                </Link> */}
              </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      </div>
  );
}
