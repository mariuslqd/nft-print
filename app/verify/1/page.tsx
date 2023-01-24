'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image'
import Link from "next/link";

export default function Success() {

  return (
    <div className='bg-gradient2'>
    <div className="flex items-center min-h-screen">
          <div className="centered-box">
              <h1 className="pb-8 text-5xl font-bold text-center text-gray-700">
              NFT Verification
                </h1 >
    <div className="flex-1 h-full max-w-4xl mx-auto bg-white rounded-l-md">
      <div className="flex flex-col md:flex-row">
        <div className="h-100 md:h-auto md:w-1/2">
        <Link href="https://opensea.io/assets/matic/0x5c4e5ae2adead056fd39badce6a5a0e4cebec3ee/3"><Image src="/3.webp" alt="Success gif" width={500} height={500}  /> </Link>
        </div>
        <div className="flex p-4 sm:p-6 md:w-1/2 border rounded-r-md">
              <div className="w-full">
                <Link href="https://opensea.io/assets/matic/0x5c4e5ae2adead056fd39badce6a5a0e4cebec3ee/3" className="items-top text-3xl font-bold text-center text-gray-700">
                  <p  className="mb-10">Build: AI writer w/ GPT-3</p>
                  </Link>
                        <ul className=" mb-4 text-lg font-bold text-left text-gray-700">
                          <li className="mb-4">NICKNAME: Marius Smith </li>
                          <li className="mb-4">TWITTER:  <Link href="https://www.instagram.com/mariussm1th/">@mariussm1th</Link></li>
                          <li className="mb-4">INSTAGRAM: <Link href="https://twitter.com/MariusSm1th">@mariussm1th</Link></li>
                          <li className="mb-4">LINKEDIN: <Link href="https://www.linkedin.com/in/mariussmith/">Marius Schmidt</Link></li>
                         </ul>
              </div>
            </div>
          </div>
          </div>
          </div>
          </div>
          </div>
  )
}
