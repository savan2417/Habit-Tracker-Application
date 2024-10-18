import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import ShopCategory from "./Pages/ShopCategory"
import Product from "./Pages/Product"
import Cart from "./Pages/Cart"
import LoginSignup from "./Pages/LoginSignup"
import Shop from "./Pages/shop"
import Footer from "./Components/Footer/Footer"
import daily_habit from "./Components/Assets/daily-habit.jpg"
import weekly_habit from "./Components/Assets/weekly-habit.jpg"
import monthly_habit from "./Components/Assets/monthly-habbit.jpeg"

function App() {


  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} > </Route>
          <Route path="/daily" element={<ShopCategory banner={daily_habit} category="daily" />} > </Route>
          <Route path="/weekly" element={<ShopCategory banner={weekly_habit} category="weekly" />} > </Route>
          <Route path="/monthly" element={<ShopCategory banner={monthly_habit} category="monthly" />} > </Route>
          <Route path="/product" element={<Product />} >
            <Route path=":productId" element={<Product />} ></Route>
          </Route>

          <Route path="/cart" element={<Cart />} ></Route>
          <Route path="/login" element={<LoginSignup />} ></Route>

        </Routes>
        <Footer />
      </BrowserRouter>


    </>
  )
}

export default App
