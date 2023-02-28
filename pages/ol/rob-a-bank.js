import Footer from '../../components/Footer';
import HeadObject from '../../components/head'
import Nav from '../../components/nav';
import Balancer from 'react-wrap-balancer';

export default function Home() {
  return (
    <div className="h-screen bg-black text-white flex flex-col">
      <HeadObject />
      <Nav />
      <div className='grow my-20 flex flex-col gap-6 justify-start mx-auto w-4/5 lg:w-3/5'>
        <h1 className='text-2xl lg:text-4xl italic'><Balancer>Open Letter to Rob a Bank</Balancer></h1>
        <p className='text-[#A1A1A1] font-inter font-medium'>I’m a strong believer that bad ideas make the best memories. As a child, I loved tinkering with things and taking them apart. My parents were the most furious when I took apart our furniture. I never could put anything back together but it helped me be the person I am today. If you have any bad ideas, don’t hesitate to tell me about them so I can do them with you. I don’t care if it’s just a hike or if you’re robbing a bank, let me know. I’d love to help you get over your fears or cross items off your bucket list.
        <br /><br />
        ~sarthak
        <br />
        +1 (413) 628-1217</p>
      </div>
    </div>
  )
}
