import { useState } from 'react'
// import CategoryFilter from './components/CategoryFilter'
import Header from './components/Header'
import Menu from './components/Menu'
import MenuItem from './components/MenuItem'
import './design/main.css'
import menu from './data/menuData'
import HeroSection from './components/HeroSection'
function App() {
 
  // const [selectedCategories , setSelectedCategories] = useState("All");
  // const categories = ["all" , ...new Set (menu.map((item) => item.category))];
  // const filteredMenu = 
  // selectedCategories === "all"
  // ? menu 
  // : menu.filter((item) => item.category === selectedCategories);
  return (
    <div >  
    <Header></Header>
    <HeroSection></HeroSection>
    <Menu ></Menu>
    {/* <CategoryFilter 
    categories={categories}
    onSelectedCategories={setSelectedCategories}
    ></CategoryFilter> */}
    </div>
  )
}

export default App



// className="max-w-xl mx-auto mt-10 p-4 bg-gray-100 rounded shadow"