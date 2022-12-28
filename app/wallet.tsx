import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAccount, useConnect, useDisconnect, useEnsAvatar, useEnsName } from 'wagmi'
import { Nft } from '@ankr.com/ankr.js/dist/types';
   
export default function Wallet() {
    const { address, connector, isConnected } = useAccount()
    const { connect, connectors, error, isLoading, pendingConnector } = useConnect()
    const { disconnect } = useDisconnect()
    const router = useRouter();
    const [nfts, setNfts] = useState<Nft[]>([]);

    useEffect(() => {
      if (isLoading) {
        router.refresh();
      }
    }, [isLoading]);
   
    if (isConnected) {
      return (
        <div>
            <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => disconnect()}>{address}
            </button>
        </div>
      )
    }


    return (
      <div>
        {connectors.map((connector) => (
          <button
            className=  "text-white font-bold rounded-lg gradient-button animate-gradient duration-600 ease-in-out"
            disabled={!connector.ready}
            key={connector.id}
            onClick={() => connect({ connector })}
          >
            Connect a Wallet to view your NFT's
            {!connector.ready && ' (unsupported)'}
            {isLoading && connector.id === pendingConnector?.id && ' (connecting)'}
          </button>
        ))}
      </div>
    )
}


