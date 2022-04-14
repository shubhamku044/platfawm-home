import type { NextPage } from 'next'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import Footer from '../components/layout/Footer'

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
      <main style={{ minHeight: '300vh', paddingTop: '70px' }}></main>

      <Footer />
    </div>
  )
}

export default Home
