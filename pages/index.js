import Footer from '../components/Footer';
import HeadObject from '../components/head'
import Nav from '../components/nav';
import RainbowBar from '../components/RainbowBar';
import Balancer from 'react-wrap-balancer';
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <div className="h-screen bg-black text-white flex flex-col">
      <HeadObject />
      <Nav />
      <motion.div
        className='grow flex flex-col justify-center mx-8 md:mx-16 lg:ml-32 lg:w-3/5'
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "easeInOut", duration: 1}}
      >
        <h1 className='text-2xl lg:text-4xl italic'><Balancer>Sarthak Mohanty is a design engineer based out of San Antonio, Texas. He likes to work on new projects with experimental technology.</Balancer></h1>
        <h3 className='text-lg lg:text-xl italic mt-10'>You can contact him via email, above.</h3>
      </motion.div>
      <Footer />
      <RainbowBar />
    </div>
  )
}
