import type { NextPage } from 'next'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import Footer from '../components/layout/Footer'
import TypedSection from '../components/TypedSection'

const Header = dynamic(() => import('../components/layout/Header'), {
  ssr: false,
})

const Home: NextPage = () => {
  return (
    <div className="relative">
      <Head>
        <title>Platfawm Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main style={{ minHeight: '100vh', paddingTop: '100px' }}>
        <TypedSection />
      </main>

      <Footer />
    </div>
  )
}

export default Home
