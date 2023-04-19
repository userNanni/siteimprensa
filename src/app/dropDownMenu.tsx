"use client"
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import './dropDownMenu.scss'
import { RxHamburgerMenu } from "react-icons/rx";
import Link from 'next/link';

const DropDownMenu = () => {
    return (
        <DropdownMenu.Root>
            <DropdownMenu.Trigger className='trigger'><RxHamburgerMenu /></DropdownMenu.Trigger>
            <DropdownMenu.Portal>
                <DropdownMenu.Content className="dropdownMenuContent">
                    <DropdownMenu.Item className='item'>
                        <Link href={'/news'} >Notícias</Link>
                    </DropdownMenu.Item>
                    <DropdownMenu.Separator className='separator' />
                    <DropdownMenu.Item className='item'>
                        <Link href={'/AfaMilitar'} >Vídeos</Link>
                    </DropdownMenu.Item>
                    <DropdownMenu.Separator className='separator' />
                    <DropdownMenu.Item className='item'>
                        <Link href={'/gallerie'} >Galeria</Link>
                    </DropdownMenu.Item>
                    <DropdownMenu.Separator className='separator' />
                    <DropdownMenu.Item className='item'>
                        <Link href={'/scoreboard'} >Placar</Link>
                    </DropdownMenu.Item>
                </DropdownMenu.Content>
            </DropdownMenu.Portal>
        </DropdownMenu.Root>
    );
}
export default DropDownMenu;