import Link from 'next/link';
import Image from 'next/image'

import CustomButton from './CustomButton';


const Navbar = () => {
    const handleClick = "app/page.tsx"
  return (
    <header className='w-full absolute z-10'>
        <nav className='max-w-[1440px] mx-auto flex justify-between items-center 
        sm:px-16 px-6 py-4'>
            <Link href="/" className='flex justify-center items-center'>
                <Image
                    src="/logo.svg"
                    alt="/LCR Logo"
                    width={331}
                    height={90}
                    className='object-contain'
                /> 
            </Link>

            <CustomButton
                title="Home"
                btnType="button"
                containerStyles="text-xl"
            
            />
            

        </nav>
    </header>
  )
}

export default Navbar