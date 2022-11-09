import type { NextPage } from 'next'
import Head from 'next/head'
import Header from "../components/Header"
import Banner from "../components/Banner"
import About from "../components/About"
import ImageCard from "../components/ImageCard"
import InfoCard from "../components/InfoCard"

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
      <div className="flex items-center">
        <div className="bg-gradient-to-br from-[#EF8E88] to-[#EAE8AF] h-screen w-1/2">
          <ImageCard
            image="https://images.unsplash.com/photo-1506443432602-ac2fcd6f54e0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMTUyNjN8MHwxfHNlYXJjaHwyMXx8bW9vbnxlbnwwfDB8fHwxNjU3MTk0ODA1&ixlib=rb-1.2.1&q=80&w=1080"
            text="How we would like to see ourselves" />
        </div>
        <div className="bg-white h-screen w-1/2">
          <InfoCard
            title="Our Mission"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis egestas elit sit amet lacus ultricies malesuada. Vestibulum sagittis ante eu quam aliquet, non maximus magna sodales. Etiam venenatis diam vel neque aliquet convallis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas at tempus urna. Nam porta, ante ullamcorper ultrices tristique, leo elit fringilla magna, sit amet convallis risus nulla ut tellus. Duis auctor orci a augue dapibus ultrices id vitae elit."
            buttonText="Join Our Cause" />
        </div>
      </div>
    </div>
  )
}

export default Home
