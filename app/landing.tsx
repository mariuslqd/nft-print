'use client';
import React, { useState, useEffect } from 'react';
import Link from "next/link";
import { useAccount } from "wagmi";


export default function Landing() {
  const { address } = useAccount();

return (
    <div className='bg-gradient'>
    <div className=" bg-fade">
   <div className="flex items-center min-h-screen">
    <div className="centered-box">
              <h1 className="mb-4 text-5xl font-bold text-center text-gray-700">
                  Create your own
                  <br/><span className="highlight-stroke">non-fungible</span>
                  NFT prints
                </h1 >
                        <ul className="pt-5 text-lg font-bold text-center text-white">
                          <li>🤳🏻 Each print has a unique QR Code that verifies you as the Owner!</li>
                          <li>🎴 Choose from a range of products like trading cards, 👕 shirts, 🖼️ canvasses...</li>
                          <li></li>
                         </ul>
              </div>
            </div>
          </div>
          </div>
)
}