import Image from 'next/image'

export const About = () => {
  return (
    <div id='about-section' className='w-full bg-white text-[#293a8a] py-16 px-4'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
            <Image
            src="/logooficial.jpeg"
            alt="logo"
            width={250}
            height={250}
            />
            <div className='flex flex-col justify-center'>
                <p className='font-bold'> SOBRE NOSOTROS</p>
                <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Domo Natural NiweNewen</h1>
                 <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                        Temporibus maxime soluta vitae quos asperiores ipsum placeat 
                        esse sint assumenda, aperiam recusandae ullam possimus hic, 
                        sit qui, numquam corrupti. Amet, eos.
                 </p>
            </div>
        </div>
    </div>
  )
}
