"use client"

import { Input } from '@/components/ui/input'
import { UserButton } from '@clerk/nextjs'
import { Search } from 'lucide-react'
import React from 'react'

const NavContent = () => {
    return (
        <div className="w-full flex items-center justify-between gap-2 ">
            <form>
                <div className="relative">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input type="search" placeholder="Search products..." className="w-full appearance-none bg-background pl-8 shadow-none md:w-2/3 lg:w-full" />
                </div>
            </form>
            <div className='flex items-center justify-center'>
                <UserButton />
            </div>
        </div>
    )
}

export default NavContent