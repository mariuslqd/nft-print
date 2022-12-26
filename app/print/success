'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image'
import { useSearchParams } from 'next/navigation';
import { getNftMetadata } from "../../providers/anker";
import Link from "next/link";

export default function Print() {
  const searchParams = useSearchParams();
  const [nftUrl, setNftUrl] = useState("");

  return (
    <div className="flex items-center min-h-screen">
        <div className="flex-1 h-full max-w-4xl mx-auto bg-white rounded border">
          <div className="flex flex-col md:flex-row">
            <div className="flex items-center justify-center p-6 sm:p-12 md:w-1/2">
              <div className="w-full">
                <h1 className="mb-4 text-2xl font-bold text-left text-gray-700">
                  Fill in your details
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}
