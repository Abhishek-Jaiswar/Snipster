import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    return (
        <div>
            <Link href="/dashboard">
                <Button className=''>Dashbaord</Button>
            </Link>
        </div>
    )
}

export default Navbar