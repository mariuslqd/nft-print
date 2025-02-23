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
              Success!
                </h1 >
    <div className="flex-1 h-full max-w-4xl mx-auto bg-white rounded-l-md">
      <div className="flex flex-col md:flex-row">
        <div className="h-100 md:h-auto md:w-1/2">
                <Image src="/giphy.gif" alt="Success gif" width={500} height={500}  />
        </div>
        <div className="flex p-4 sm:p-6 md:w-1/2 border rounded-r-md">
              <div className="w-full">
                 <h2 className="items-top mb-6 text-3xl font-bold text-center text-gray-700">
                  We will:
                 </h2>
                        <ul className="items-center mb-4 text-lg font-bold text-left text-gray-700">
                          <li>• Upscale your NFT via AI</li>
                          <li>• Create a new Page on verify.nftpod.me</li>
                          <li>• Design the QR Code and Mockup</li>
                          <li>• Send Mockup to you for approval</li>
                          <li>• Ship the print out</li>
                          <li>• Send you the Tracking link</li>
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
