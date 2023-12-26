import React from 'react'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import Image from 'next/image'
import { Separator } from '../ui/separator'
import NavItems from './NavItems'

  
function MobileNav() {
  return (
    <nav className='md:hidden'>
        <Sheet>
            <SheetTrigger className='align-middle'>
                <Image className='cursor-pointer' src="/assets/icons/menu.svg" alt="logo" width={24} height={24} />
            </SheetTrigger>
            <SheetContent className='flex flex-col gap-6 bg-white md:hidden'>
                <Image src="/assets/images/logo.svg" alt="logo" width={128} height={38} />
                <Separator />
                <NavItems />
            </SheetContent>
        </Sheet>
    </nav>
  )
}

export default MobileNav