'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image'
import { useSearchParams } from 'next/navigation';
import Link from "next/link";

export default function Success() {

  return (
    <div className="flex items-center min-h-screen">
        <div className="flex-1 h-full max-w-4xl mx-auto bg-white rounded border">
          <div className="flex flex-col md:flex-row">
            <div className="flex items-center justify-center p-6 sm:p-12 md:w-1/2">
              <div className="w-full">
                <h1 className="mb-4 text-2xl font-bold text-left text-gray-700">
                  Success
                </h1>
                 <img src="public/giphy.gif" alt="Success gif" />
                 <h2 className="mb-4 text-2xl font-bold text-left text-gray-700">
                  Our Kitties are getting your order ready!
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
        </div>
      </div>
  )
}
