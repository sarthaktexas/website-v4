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
        <h1 className='text-2xl lg:text-4xl italic'><Balancer>Open Letter about Art</Balancer></h1>
        <p className='text-[#A1A1A1] font-inter font-medium'>Taking art history and taking time to learn about art pieces has really helped me learn to pay attention to the little things. It’s also helped me rekindle my childish passion for being creative. We never talked about Keith Haring as part of the curriculum, but Haring is one of my favorite artists for so many reasons. He drew everywhere, broke rules, and made pop art accessible to the masses like Basquiat and Warhol. Haring’s art was simple, but sent a message about current events. During the AIDS epidemic, Haring drew sexual cartoons that brought attention to homosexuals like Haring himself and emphasized the real problem at hand: HIV, not the gays. His anti-drug drawings also resonated with mass population after crack became widespread in the neighborhood where Haring helped at-risk high schoolers who just needed someone to believe in them. Haring was inspirational to the point where he rose mass art to the level of renaissance art. Take an art history class. Be inspired by artists. Learn to see the details and the whole.
        <br /><br />
        ~sarthak
        <br />
        +1 (413) 628-1217</p>
      </div>
    </div>
  )
}
