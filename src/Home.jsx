import { useEffect } from 'react'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import MenuCategoryPage from './components/MenuCategoryPage'
import './design/main.css'


function Home() {

  useEffect(() => {
    window.scrollTo({top:0 , behavior: 'smooth'})
  } , [])

  return (
    <div >  
    <Header></Header>
    <HeroSection></HeroSection>
    <MenuCategoryPage></MenuCategoryPage>
    </div>
  )
}


export default Home


