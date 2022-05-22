import Image from 'next/image';
import Link from 'next/link';
import moonyLogo from '../public/images/moony-logo.png';

const Header = ({ home }) => {

    return (
        <header className={`sticky top-0 z-10 bg-[#4e4ed4] cursor-pointer flex flex-col justify-center  
            ${home? 'h-44' : 'h-24' } 
            md:flex-row md:justify-between md:h-20`} >
            <Link href='/'>
                <a className="mx-auto pr-5 my-5 
                    md:mx-0 md:px-5 md:my-auto">
                    <Image
                        src={moonyLogo}
                        alt="Moony Logo"
                        width={200}
                        height={50}
                    />
                </a>
            </Link>
            {home && (
                <button className="font-semibold text-white 
                    border rounded tracking-wide mx-24 mb-7 py-5
                    hover:bg-white hover:text-[#4e4ed4] hover:font-bold
                    md:mx-8 md:my-5 md:px-5 md:py-0">
                    Add a Post
                </button>
            )}
        </header>
    );
};

export default Header;