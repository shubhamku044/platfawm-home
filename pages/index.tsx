import type { NextPage } from 'next'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import About from '../components/About/About'
import FunFact from '../components/FunFact/FunFact'
import Help from '../components/Help/Help'
import Footer from '../components/layout/Footer'
import OurClientsSection from '../components/OurClients/OurClientsSection'
import TypedSection from '../components/TypedSection'
import PlatfawmHome from '../components/Home/PlatfawmHome'

const Header = dynamic(() => import('../components/layout/Header'), {
  ssr: false,
})

const Home: NextPage = () => {
  return (
    <div className="relative">
      <Head>
        <title>Platfawm Home</title>
        <link rel="icon" href="/platfawmFavicon.ico" />
      </Head>
      <Header />
      <main style={{ minHeight: '100vh', paddingTop: '2rem' }}>
        <PlatfawmHome />
        <Help />
        <About />
        <FunFact />
        <OurClientsSection />
        <TypedSection />
      </main>

      <Footer />
    </div>
  )
}

export default Home
