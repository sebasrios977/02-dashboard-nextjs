import { SimpleWidget } from '@/components'
import WidgetsGrid from '@/components/dashboard/WidgetsGrid';
import React from 'react'


export const metadata = {
 title: 'Admin Dashboard',
 description: 'SEO Title',
};


const MainPage = () => {
  return (
    <div className='text-black p-2'>
      <h1 className='mt-2 text-3xl'>Dashboard</h1>
      <span className='text-3xl'>Informacion General</span>

      <WidgetsGrid />
    </div>
  )
}

export default MainPage
