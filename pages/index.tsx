import type { NextPage } from 'next'
import Head from 'next/head'
import Dashboard from '../components/Dashboard'
// import Image from 'next/image'

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Spotify Design App 🎧 | Home </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Dashboard />
    </div>
  )
}
