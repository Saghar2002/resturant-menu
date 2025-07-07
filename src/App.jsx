import { useState } from 'react'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import CategoryCard from './components/CategoryCard'
import MenuItem from './components/MenuItem'
import menu from './data/menuData'
import './design/main.css'

const categories = [
  {
    name: "coffee",
    image:""
  },
  {
    name: "breakfast",
    image: ""
  },
  {
    name: "appetizer",
    image: ""
  },
  {
    name: "burgers",
    image: ""
  },
  {
    name: "pizza",
    image: ""
  },
  {
    name: "pasta",
    image: ""
  },
  {
    name: "cake & desserts",
    image: ""
  }
]

function App() {

  const [selectedCategory, setSelectedCategory] = useState(null);
  const filteredItems = menu.filter(item => item.category === selectedCategory)
  return (
    <div >  
    <Header></Header>
    <HeroSection></HeroSection>
    <div className='max-w-6xl mx-auto p-6'>
      {!selectedCategory && (
        <>
        <h1 className='text-2xl font-bold text-center mb-6'>Explore Our Menu</h1>
        <div className='gird grid-cols-2 md:grid-cols-4 gap-6'>
          {categories.map((cat) => (
            <CategoryCard 
            key={cat.name}
            category={cat.name}
            image={cat.image}
            onclick={setSelectedCategory} />
          ))}
        </div>
        </>
      )}

      {selectedCategory && (
        <div>
          <div className='flex justify-between items-center mb-4'>
            <h2 className='text-xl font-bold capitalize'>{selectedCategory}</h2>
            <button
            onClick={() => setSelectedCategory(null)}
            className='text-red-600 underline'>
               ← Back to Categories
            </button>
          </div>
          <div className=' gird grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {filteredItems.map(item => (
              <MenuItem key={item.id} item={item}></MenuItem>
            ))}
          </div>
        </div>
      )}
    </div>
    </div>
  )
}

export default App



// className="max-w-xl mx-auto mt-10 p-4 bg-gray-100 rounded shadow"