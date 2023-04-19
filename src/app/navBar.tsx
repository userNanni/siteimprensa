import Link from "next/link";
import Image from "next/image";

import Logo from './public/Logo.png';
import RightIcon from './public/icon.png';

import './navBar.scss'
import DropDownMenu from "./dropDownMenu";

const navBar = () => {
  return (
    <nav className='navBar'>
      <div className='line' />
      <Link href={`/`} className='Logo'>
        <Image src={Logo} alt="Logo" width={300} />
      </Link>
      <Image className='rightWaffer' src={RightIcon} alt='Icon' width={100} height={100} />
      <div className="dropDown">
        <DropDownMenu />
      </div>
    </nav>
  );
}

export default navBar;
