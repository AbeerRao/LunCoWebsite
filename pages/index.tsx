import type { NextPage } from 'next'
import Head from 'next/head'
import Header from "../components/Header"
import Banner from "../components/Banner"
import About from "../components/About"

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>LunCo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex items-center">
        <div className="bg-white h-screen w-1/2">
          <Banner />
        </div>
        <div className="bg-gradient-to-br from-[#c22e70] to-[#3a1246] h-screen w-1/2">
          <Header />
        </div>
      </div>
      <div className="flex flex-col items-start px-10 h-screen bg-black">
        <About />
      </div>
    </div>
  )
}

export default Home
