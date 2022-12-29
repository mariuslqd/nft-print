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
                          <li>1. 4x upscale your NFT via AI</li>
                          <li>2. Create a QR Code, that identifies you as the owner</li>
                          <li>3. Design the Mockup and send it to you via email with the Payment instructions</li>
                          <li>4. After you approved the design and paid, we will send out your order</li>
                          <li>5. You will get the tracking details for your shipment send via Email</li>
                         </ul>
              </div>
            </div>
          </div>
          </div>
)
}