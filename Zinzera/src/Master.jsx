import Nav from './SECTIONS/Nav';
import Hero from "./SECTIONS/Hero"
import Footer from "./SECTIONS/Footer"
import Categories from "./SECTIONS/Categories";
import Latest from "./SECTIONS/Latest";
import Visit from "./SECTIONS/Visit";
import Bestseller from './SECTIONS/Bestseller';

const Master = () => {
  return (
    <main className="relative">
      <nav><Nav/></nav>
      <section className='xl:padding-x wide:padding-r padding-b'><Hero/></section>
      <section className='padding'><Bestseller/></section>
      <section className='padding'><Categories/></section>
      <section className='padding'><Latest/></section>
      <section className='padding'><Visit/></section>
      <footer><Footer/></footer>
    </main>
  )
}

export default Master