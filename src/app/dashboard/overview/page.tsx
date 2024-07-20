import { Button } from '@/components/ui/button'
import React from 'react'

const Overview = () => {
  return (
    <div className='w-full'>
      <div className='flex gap-2 items-center justify-between'>
        <div className='mb-2 md:mb-0'>
          <Button variant='outline'>Tags</Button>
        </div>
        <div className='mb-2 '>
          
        </div>
        <div className='mb-2 md:mb-0'>
          <Button>Create snippet</Button>
        </div>
      </div>
    </div>
  )
}

export default Overview
