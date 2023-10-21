
import { Hero, Services } from '@/components'
import FeaturesSection from '@/components/FeaturesSection'
import Image from 'next/image'


export default function Home() {
  return (
    <main className='overflow-hidden'>
      <Hero />
      <FeaturesSection />
      <Services/> 
    </main>
  )
}
