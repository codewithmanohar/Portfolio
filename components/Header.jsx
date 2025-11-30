import React from 'react'
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuViewport,
} from "@/components/ui/navigation-menu";

import { CodeXml, Github, Home, User } from 'lucide-react';
import { ThemeToggleButton } from './ThemeToggleButton';
import { FaLinkedinIn, FaXTwitter } from 'react-icons/fa6';
import { RiCodeSSlashFill } from "react-icons/ri";
import Link from 'next/link';



const Header = () => {
    return (
        <div className="max-w-7xl px-4 sm:px-6 md:px-8 flex items-center justify-center sm:gap-16 shadow-2xl my-5 rounded-lg py-3 w-11/12 sm:w-[57%] fixed left-1/2 -translate-x-1/2 backdrop-blur-md bg-white/30 border border-white/20 z-10 dark:bg-zinc-900/30 dark:border-white/10 dark:backdrop-blur-md top-0">
            <NavigationMenu>
                <NavigationMenuList className="flex gap-4">
                    <NavigationMenuItem>
                        <NavigationMenuLink asChild>
                            <Link href="/">
                                <Home className="w-5 h-5 sm:w-6 sm:h-6" />
                            </Link>
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                    
                    

                    <NavigationMenuItem>
                        <NavigationMenuLink asChild>
                            <Link href="/project">
                                <RiCodeSSlashFill className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400" />

                            </Link>
                        </NavigationMenuLink>
                    </NavigationMenuItem>

                    <NavigationMenuItem>
                        <NavigationMenuLink asChild>
                            <Link href="/profile">
                                <User className="w-5 h-5 sm:w-6 sm:h-6" />
                            </Link>
                        </NavigationMenuLink>
                    </NavigationMenuItem>

                    <NavigationMenuItem>
                        <NavigationMenuLink asChild>
                            <a href="https://github.com/codewithmanohar" target='_blank' rel="noopener noreferrer" >
                                <Github className="w-5 h-5 sm:w-6 sm:h-6" />
                            </a>
                        </NavigationMenuLink>   
                    </NavigationMenuItem>

                    <NavigationMenuItem>
                        <NavigationMenuLink asChild>
                            <a href="https://x.com/Manoharkum86163" target='_blank'>
                                <FaXTwitter className="w-5 h-5 sm:w-6 sm:h-6" />
                            </a>
                        </NavigationMenuLink>
                    </NavigationMenuItem>

                    <NavigationMenuItem>
                        <NavigationMenuLink asChild>
                            <a href="https://www.linkedin.com/in/manoharkumardev" target='_blank'>
                                <FaLinkedinIn className="w-5 h-5 sm:w-6 sm:h-6" />
                            </a>
                        </NavigationMenuLink>
                    </NavigationMenuItem>


                    <NavigationMenuItem>
                        <ThemeToggleButton />
                    </NavigationMenuItem>
                </NavigationMenuList>

                <NavigationMenuViewport />
            </NavigationMenu>
        </div>

    )
}

export default Header