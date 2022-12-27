'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image'
import { useSearchParams } from 'next/navigation';
import Link from "next/link";

export default function Success() {

  return (
    <div className="flex items-center">
        <div className="flex-1 h-full max-w-4xl mx-auto bg-white rounded border">
              <div className="w-full">
                <h1 className="mb-4 text-4xl font-bold text-center text-gray-700">
                  Success!
                </h1 >
                <div className="mb-4 block text-center">
                 <Image src="/giphy.gif" alt="Success gif" width={300} height={300} />
                 </div>
                 <h2 className="mb-4 text-1xl font-bold text-center text-gray-700">
                  Our Kitties are getting your order ready!
                 </h2>
                 <h2 className="mb-4 text-2xl font-bold text-center text-gray-700">
                  What happens next
                 </h2>
                       <h2 className="mb-4 text-2xl font-bold text-left text-gray-700">
                        <ul>
                          <li>1. We will 4x upscale your NFT via AI</li>
                          <li>2. Create a QR Code, that identifies you as the owner </li>
                          <li>3. Design the Mockup and send it to you via email with the Payment instructions</li>
                          <li>4. After you approved the design and paid, we will send out your order</li>
                          <li>5. You will get the tracking details for your shipment send via Email</li>
                         </ul>
                      </h2>
              </div>
            </div>
          </div>
  )
}
