import React,{useState , useRef} from 'react'
import HeroSection from './HeroSection'
import CategoryCard from './CategoryCard'
import MenuItem from './MenuItem'
import menu from '../data/menuData'
import coffeeImage from "../assets/pictures/coffee.jfif"
import breakfastImage from "../assets/pictures/download (19).jfif"
import pastaImage from "../assets/pictures/Rigatoni.jfif"
import burgurImage from "../assets/pictures/Burger Clipart_ 4K & Vector in Minimalist Art Style.jfif"
import pizzaImage from "../assets/pictures/pizza.jfif"
import appetizerImage from "../assets/pictures/nacho food mexican cartoon nacho food mexican png.jfif"
import cakeImage from "../assets/pictures/Cheesecake Clipart PNG _ 10 JPG _ Watercolor Cake Baking Clipart Food Clipart Kawaii Dessert Strawberry Oreo Nutella Cake Dessert Cake.jfif"
import drinkImage from "../assets/pictures/drink.jfif"
import Cart from '../pages/Cart'
const categories = [
  { name: "coffee", image: coffeeImage },
  { name: "breakfast", image: breakfastImage },
  { name: "appetizer",image: appetizerImage },
  { name: "burgers", image: burgurImage },
  { name: "pizza", image: pizzaImage },
  { name: "pasta", image: pastaImage },
  { name: "cake & desserts", image: cakeImage },
  { name: "drink", image: drinkImage }
]
const MenuCategoryPage = () => {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const filteredItems = menu.filter((item) => item.category === selectedCategory)
    const categorySectionRef = useRef(null)

    const handleBack = () => {
        setSelectedCategory(null)     
    }
  return (
    <div>
    <div className='max-w-6xl mx-auto p-6'>
      {!selectedCategory && (
        <div>
        <h1 className='text-2xl font-bold text-center mb-6'>Explore Our Menu</h1>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-6'>
          {categories.map((cat) => (
            <CategoryCard 
            key={cat.name}
            category={cat.name}
            image={cat.image}
            onClick={setSelectedCategory} />
          ))}
        </div>
        </div>
      )}

     

      {selectedCategory && (
        <div>
          <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10'>
            {filteredItems.map((item) => (
              <MenuItem key={item.id} items={item}></MenuItem>
            ))}
          </div>
          <div className='flex justify-between items-center mb-4'>
            {/* <h2 className='text-xl font-bold capitalize'>{selectedCategory}</h2> */}
            <button
            onClick={handleBack}
            className='text-gray-50 bg-red-950 mt-9 rounded-md p-2'>
               ← Back to Categories
            </button>
          </div>
        </div>
      )}
    </div>
    </div>
  )
}


export default MenuCategoryPage