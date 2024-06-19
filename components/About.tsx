import Image from 'next/image';

export const About = () => {
  return (
    <div id='about-section' className='w-full bg-[#F3EDDD] text-[#002315] py-16 px-4'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2 gap-8'>
        <div className='flex justify-center md:justify-start'>
          <Image
            src="/logooficial.jpeg"
            alt="logo"
            width={250}
            height={250}
          />
        </div>
        <div className='flex flex-col justify-center'>
          <p className='font-bold'>SOBRE NOSOTROS</p>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Domo Natural NiweNewen</h1>
          <p>
          Niwe Newen, fundada por María Alejandra Villavicencio Lara en 2021, 
          es un refugio dedicado a la salud y el bienestar. Ubicada en San Pedro
           de Melipilla, ofrece servicios de yoga, masajes, terapias alternativas y 
           actividades familiares en un entorno natural, promoviendo la relajación y 
           el equilibrio.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
