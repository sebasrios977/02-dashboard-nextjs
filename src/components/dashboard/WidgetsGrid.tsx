'use client';
import React from 'react'
import { SimpleWidget } from './SimpleWidget'
import { useAppSelector } from '@/store';
import { IoAccessibility, IoCartOutline } from 'react-icons/io5';

const WidgetsGrid = () => {
  const counter = useAppSelector(state => state.counter.count);
  const icon: React.ReactNode = <IoCartOutline size={70} className='text-blue-600' />
  return (
    <div className="flex flex-wrap p-2 items-center justify-center">
      <SimpleWidget 
        title={counter.toString()}
        subTitle="This is a simple counter"
        label="Contador"
        icon={icon} 
        href="/dashboard/counter"
      />
    </div>
  )
}

export default WidgetsGrid
