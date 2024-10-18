import React, { useContext } from 'react'
import "./ProductDisplay.css"
import star_image from "../Assets/star_icon.png"
import star_dull_icon from "../Assets/star_dull_icon.png"
import { ShopContext } from '../../Context/ShopContext'


const ProductDisplay = ({ product }) => {

  const { addToCart } = useContext(ShopContext)

  return (
    <div className="container mt-5">
      <div className="row d-flex justify-content-between">
        <div className="col-md-2 col-lg-1 left-side-img-main ">

          <div className="row ">
            <div className="col-12">
              <img src={product.image} alt='productImage' className='img-fluid product-leftside-img ' />
            </div>
          </div>

          <div className="row  mt-1">
            <div className="col-12">
              <img src={product.image} alt='productImage' className='img-fluid product-leftside-img ' />
            </div>
          </div>

          <div className="row  mt-1">
            <div className="col-12">
              <img src={product.image} alt='productImage' className='img-fluid product-leftside-img ' />
            </div>
          </div>

          <div className="row  mt-1">
            <div className="col-12">
              <img src={product.image} alt='productImage' className='img-fluid product-leftside-img ' />
            </div>
          </div>

        </div>
        <div className="col-md-5 ">
          <img src={product.image} alt='productImage' className='img-fluid product-rightside-img ' />
        </div>
        <div className="col-md-5 col-lg-6 ">
          <h2 className='productName'>{product.name}</h2>
          <div className=' d-flex align-items-center'>
            <img src={star_image} alt='starImage' height="50%" className='img-fluid me-1' />
            <img src={star_image} alt='starImage' height="50%" className='img-fluid me-1' />
            <img src={star_image} alt='starImage' height="50%" className='img-fluid me-1' />
            <img src={star_image} alt='starImage' height="50%" className='img-fluid me-1' />
            <img src={star_dull_icon} alt='starDullImage' height="50%" className='img-fluid me-1' />
            <p className='pt-3 '>(122)</p>
          </div>

          <p className='pt-3'>
            A simple, intuitive tool designed to help you build and maintain positive habits. Easily track daily progress, set custom goals, and view your streaks.


          </p>

          <div className='mt-3'>
            <pre className='habitMessage'><span className='text-danger'>Message : </span> {product.message} </pre>
          </div>

          <div className='mt-3'>
            <p><span className='text-danger'>Goal : </span> {product.goal} </p>
          </div>




          <div className='mt-3'>
            <p><span className='text-danger'>Date : </span> {product.date} </p>
          </div>

          <div className='mt-3'>
            <p><span className='text-danger'>Category : </span> {product.category}, Latest </p>
            <p><span className='text-danger'>Tags : </span> Modern, Latest</p>
          </div>

          <div className='mt-3'>
            <button className='btn btn-danger mt-3 ps-5 pe-5 pt-2 pb-2 fs-5' onClick={() => { addToCart(product.id) }} >Add to Habit</button>
          </div>

        </div>
      </div>






    </div>
  )
}

export default ProductDisplay