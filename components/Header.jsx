import React from 'react'
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import Link from 'next/link';
import { CodeXml, Github, Home, User } from 'lucide-react';
import { ModeToggle, ThemeToggleButton } from './ThemeToggleButton';



const Header = () => {
    return (
        <div className="max-w-7xl px-4 sm:px-6 md:px-8 flex items-center justify-center gap-5 shadow-2xl my-5 rounded-lg py-3 w-10/12 sm:w-3/4 md:w-2/3 lg:w-1/2 fixed sm:left-96 left-10 backdrop-blur-md bg-white/30 border border-white/20 z-10 ">
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
                            <Link href="/">
                                <CodeXml className="w-5 h-5 sm:w-6 sm:h-6" />
                            </Link>
                        </NavigationMenuLink>
                    </NavigationMenuItem>

                    <NavigationMenuItem>
                        <NavigationMenuLink asChild>
                            <Link href="/">
                                <User className="w-5 h-5 sm:w-6 sm:h-6" />
                            </Link>
                        </NavigationMenuLink>
                    </NavigationMenuItem>

                    <NavigationMenuItem>
                        <NavigationMenuLink asChild>
                            <Link href="/">
                                <Github className="w-5 h-5 sm:w-6 sm:h-6" />
                            </Link>
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <ThemeToggleButton />
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
        </div>

    )
}

export default Header