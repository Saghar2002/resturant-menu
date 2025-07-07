import pizzaImage from "../assets/pictures/The Best Homemade Chorizo Pizza.jfif";
import pastaImage from "../assets/pictures/Creamy Pesto Pasta (30-Minute Meal!).jfif";
import greenTeaImage from "../assets/pictures/Green Tea Soda.jfif"
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

]

export default menu;