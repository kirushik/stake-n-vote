'use client'

import { SubstrateChain, UseInkathonProvider } from '@scio-labs/use-inkathon'
import { QueryClient, QueryClientProvider } from 'react-query'
import { useEffect, useState } from 'react'
import { ParallaxProvider } from 'react-scroll-parallax'
import { polkadotRelay } from '@/config/chains'
import { supportedWallets } from '@/config/wallets'
import { AppProvider } from './app-provider'

import { NextUIProvider } from '@nextui-org/system'

export function Providers({ children }: { children: React.ReactNode }) {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        cacheTime: 1000 * 60 * 60 * 12, // 12 hours
      },
    },
  })

  return (
    <UseInkathonProvider
      appName="The Kus"
      defaultChain={polkadotRelay}
      supportedWallets={supportedWallets}
    >
      <QueryClientProvider client={queryClient}>
        <AppProvider>
          <NextUIProvider>
            <ParallaxProvider>{children}</ParallaxProvider>
          </NextUIProvider>
        </AppProvider>
      </QueryClientProvider>
    </UseInkathonProvider>
  )
}
