import Image from 'next/image';
import HeaderItem from './HeaderItem';

export default function Header(){
    return(
        <header className="">
            <div>
                <HeadererItem/>
            </div>
            <h1>This is the header</h1>
            <Image
                className="object-contain"
                src="https://links.papareact.com/ua6"
                width={200}
                height={100}
            />
        </header>
    )
}

