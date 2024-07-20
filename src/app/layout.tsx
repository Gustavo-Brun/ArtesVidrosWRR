import type { Metadata } from 'next'

import { GoogleAnalytics } from '@next/third-parties/google'
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from '@vercel/speed-insights/next';

import './globals.css'

export const metadata: Metadata = {
    title: 'Artes Vidros W.R.R',
    description: 'Vidraçaria Profissional em São Paulo',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="pt" className='scroll-smooth scroll-p-4'>
            <head>
                <link rel="icon" href="/logo/logopic.png" sizes="any" />
            </head>
            <body className='min-h-screen py-4 bg-gray-600'>
                <>
                    {children}
                </>
                <SpeedInsights />
                <Analytics />
                <GoogleAnalytics gaId="G-NRH9Z2EG3Q" />
            </body>
        </html>
    )
}
