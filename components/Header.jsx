import Link from 'next/link';
import Image  from 'next/image';

const Header = () => {

  return (
    <div className='lg:px-10 md:mb-2 mb-4 '>
      <div className='container mx-auto'>
        <div className='p-2 mx-auto block max-h-[45px] max-w-[376px] lg:max-w-[730px] lg:max-h-[120px] '>
          <Image src='/ads.jpg' alt='ads-banner' height={90} width={728} layout='responsive' />
        </div>

        <div className="p-2 mx-auto mt-6 max-w-[150px] lg:max-w-xs max-h-[180px] lg:w-60">
          <Link href="/" passHref>
            <Image src='/B.png' alt='logo' height={64} width={250} priority={true} className='cursor-pointer' />
          </Link>
        </div>

      </div>
    </div>
  );
};

export default Header;