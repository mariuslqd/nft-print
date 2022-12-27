'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image'
import { useSearchParams } from 'next/navigation';
import Link from "next/link";

export default function Success() {

  return (
    <div className="flex items-center min-h-screen">
    <div className="flex-1 h-full max-w-4xl mx-auto bg-white ">
      <div className="flex flex-col md:flex-row">
        <div className="h-100 md:h-auto md:w-1/2">
                <Image src="/giphy.gif" alt="Success gif" width={600} height={600}  />
        </div>
        <div className="flex items-center justify-center p-4 sm:p-6 md:w-1/2 border rounded-r-md border-blue-400">
              <div className="w-full">
              <h1 className="mb-4 text-5xl font-bold text-center text-gray-700">
                  Success!
                </h1 >
                 <h2 className="mb-4 text-2xl font-bold text-center text-gray-700">
                  Next we will:
                 </h2>
                       <h2 className="mb-4 text-lg font-bold text-left text-gray-700">
                        <ul>
                          <li>1. 4x upscale your NFT via AI</li>
                          <li>2. Create a QR Code, that identifies you as the owner</li>
                          <li>3. Design the Mockup and send it to you via email with the Payment instructions</li>
                          <li>4. After you approved the design and paid, we will send out your order</li>
                          <li>5. You will get the tracking details for your shipment send via Email</li>
                         </ul>
                      </h2>
              </div>
            </div>
          </div>
          </div>
          </div>
  )
}
