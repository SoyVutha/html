
//import suoabse
import { supabase } from '@/lib/supabaseClient'
import ProductsComponent from '../component/ProductsComponent'
import Hero from '@/component/Hero'
import Detail from '@/component/Detail'
import Detail2 from '@/component/Detail2'
import Detail3 from '@/component/Detail3'
import Subscript from '@/component/Subscript'
import '@/app/globals.css'
import fetchtesting from '../fetchtesting'


const { data: products, error } = await supabase.from('products').select('*')

export const revalidate = 0  
export default async function Home() {


  return (
    <>
    
        <section className="xl:padding-1 wide:padding-r paading-b px-5 max-sm:px-1"><Hero/></section>
        <section className="px-5"><ProductsComponent /></section>
        <section className="px-5"><Detail /></section>
        <section className="px-5"><Detail2 /></section>
        <section className="px-5"><Detail3 /></section>
        <section className="px-5"><Subscript /></section>
    </>
  )
}
  //this hihlighted code is to fetch data from supabase (products table)
  

  // if (error) {
  //   console.error(error)
  //   return <p>Error loading products</p>
  // }
