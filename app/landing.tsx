'use client';
import React, { useState, useEffect } from 'react';
import Link from "next/link";
import { useAccount } from "wagmi";


export default function Landing() {
  const { address } = useAccount();

return (
    <div className="bg-gradient bg-fade">
   <div className="flex items-center min-h-screen">
    <div className="flex-1 h-full max-w-4xl mx-auto ">
        <div className="flex items-center justify-center p-4 sm:p-6 md:w-1/2 border rounded-r-md border-blue-400">
              <div className="w-full">
              <h1 className="mb-4 text-5xl font-bold text-center text-gray-700">
                  Create your own
                  <br>non-fungible</br>
                  NFT prints
                </h1>
              </div>
            </div>
          </div>
          </div>
          </div>
)
}