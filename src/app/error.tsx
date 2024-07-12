import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

const Error = () => {
    return (
        <div className='flex items-center justify-center flex-col'>
            <h1 className='text-2xl font-bold text-primary text-center md:text-3xl '>Error has been occured</h1>
            <p className='text-2xl text-zinc-400 font-semibold'>Page Not found</p>
            <Link href={'/'}>
                <Button>
                    Go Back
                </Button>
            </Link>
        </div>
    )
}

export default Error