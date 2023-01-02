import React, { useState, useEffect } from 'react';
import AnkrscanProvider from '@ankr.com/ankr.js';

const provider = new AnkrscanProvider(' ');

export const getNfts = async (address: string) => {
  const { assets } = await provider.getNFTsByOwner({
    walletAddress: address,
    blockchain: [],
    pageSize: 50,
  });
  return {
    nfts: assets,
  };
};

export const getNftMetadata = async (address: string, tokenId: string) => {
  return await provider.getNFTMetadata({
    blockchain: 'polygon',
    contractAddress: address,
    tokenId: tokenId,
  });
};