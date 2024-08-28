"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import { FaJava } from "react-icons/fa6";
import { FilterIcon, Plus } from 'lucide-react';
import { IoIosArrowDown } from "react-icons/io";
import { Button } from '@/components/ui/button';
import { FaPlus } from "react-icons/fa6";
import MySnippets from './my-snippets/page';



const page = () => {
  const [isDropDownOpen, setDropDownOpen] = useState(false);

  const handleDropDown = () => {
    setDropDownOpen(prev => !prev)
  }
  return (
    <div className='w-full'>
      <div className='flex gap-2 items-center p-3'>
        <div className=' w-8 h-8 cursor-pointer flex items-center justify-center rounded-full border border-gray-200'>
          <FaPlus className='text-gray-900' />
        </div>
        <div className=' flex items-center justify-start gap-3 flex-1'>
          <div className='flex items-center justify-center gap-2 px-3 py-1.5 rounded-full border border-gray-200'>
            <FaJava className='text-lg text-orange-600' />
            <Link className='text-sm' href="/">Java</Link>
          </div>
          <div className='flex items-center justify-center gap-2 px-3 py-1.5 rounded-full border border-gray-200'>
            <FaJava className='text-lg text-orange-600' />
            <Link className='text-sm' href="/">JavaScript</Link>
          </div>
          <div className='flex items-center justify-center gap-2 px-3 py-1.5 rounded-full border border-gray-200'>
            <FaJava className='text-lg text-orange-600' />
            <Link className='text-sm' href="/">Python</Link>
          </div>
          <div className='flex items-center justify-center gap-2 px-3 py-1.5 rounded-full border border-gray-200'>
            <FaJava className='text-lg text-orange-600' />
            <Link className='text-sm' href="/">C</Link>
          </div>
          <div className='flex items-center justify-center gap-2 px-3 py-1.5 rounded-full border border-gray-200'>
            <FaJava className='text-lg text-orange-600' />
            <Link className='text-sm' href="/">C++</Link>
          </div>
          <div className='relative'>
            <button
              onClick={handleDropDown}
              className=' cursor-pointer' ><IoIosArrowDown className={`${isDropDownOpen ? "rotate-0 transition-all duration-500" : "-rotate-90 transition-all duration-500 "} text-2xl mt-2`} /></button>
            {isDropDownOpen && <div className='absolute p-4 transition-all duration-500 bg-white w-28 rounded-md shadow-sm border' >
              <ul className='flex items-center justify-center text-gray-600  font-semibold flex-col gap-4 text-sm '>
                <li className=' cursor-pointer hover:text-gray-700'>Assembly</li>
                <li className=' cursor-pointer hover:text-gray-700'>Assembly</li>
                <li className=' cursor-pointer hover:text-gray-700'>Assembly</li>
                <li className=' cursor-pointer hover:text-gray-700'>Assembly</li>
                <li className=' cursor-pointer hover:text-gray-700'>Assembly</li>
                <li className=' cursor-pointer hover:text-gray-700'>Assembly</li>
              </ul>
            </div>
            }
          </div>
        </div>
        <div>
          <div className=' flex items-center justify-center gap-2'>
            <Button variant={'outline'} className='flex items-center justify-center text-sm text text-gray-800 gap-2 '>
              <FilterIcon className='text-xx text-gray-900' />
              filter
            </Button>
            <Link href='/dashboard/create-snips'>
              <Button className='gap-1'>
                <FaPlus className=' text-[1rem]' />
                Create snips
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <div>
        <MySnippets />
      </div>
    </div>
  )
}

export default page
