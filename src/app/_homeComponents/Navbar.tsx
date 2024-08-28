import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    return (
        <div>
            <Link href="/sign-in">
                <Button className=''>Login</Button>
            </Link>
        </div>
    )
}

export default Navbar