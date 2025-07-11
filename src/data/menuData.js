import pizzaImage from "../assets/pictures/The Best Homemade Chorizo Pizza.jfif"
import pastaImage from "../assets/pictures/Creamy Pesto Pasta (30-Minute Meal!).jfif"
import greenTeaImage from "../assets/pictures/Green Tea Soda.jfif"
import cheeseburgursImage from "../assets/pictures/download (24).jfif"
import cakeImage from "../assets/pictures/download (23).jfif"
import frenchfriesImage from "../assets/pictures/download (21).jfif"
import lateImage from "../assets/pictures/download (20).jfif"
import breakfast2Image from "../assets/pictures/download (22).jfif"

const menu = [
    {
        id: 1,
        name: "Special Pizza",
        category: "pizza",
        price: "120,000$",
        description: "Classic pizza with tomato and cheese",
        image: pizzaImage,
    },
    {
        id: 2,
        name: "Pesto Pasta",
        category: "pasta",
        price: "100,000$",
        description: "Amazing pasta with pesto sauce",
        image: pastaImage,
    },
    {
        id: 3,
        name: "Green tea",
        category: "drink",
        price: "30,000$",
        description: "Healthy green tea",
        image: greenTeaImage,
    },
    {
        id: 4,
        name: "Cheese Burgur",
        category: "burgers",
        price: "40,000$",
        description: "SpongeBob cheese burgers",
        image: cheeseburgursImage,
    },
    {
        id: 5,
        name: "Latte",
        category: "coffee",
        price: "10,000$",
        description: "Italian Cafe",
        image: lateImage,
    },
    {
        id: 6,
        name: "French fries",
        category: "appetizer",
        price: "20,000$",
        description: "Delicious fries",
        image: frenchfriesImage,
    },
    {
        id: 8,
        name: "English Breakfast",
        category: "breakfast",
        price: "45,000$",
        description: "Stat your day with our fantastic breakfast",
        image: breakfast2Image,
    },
    {
        id: 7,
        name: "Chocolate",
        category: "cake & desserts",
        price: "15,000$",
        description: "Perfect Cake",
        image: cakeImage,
    },
    
]

export default menu;