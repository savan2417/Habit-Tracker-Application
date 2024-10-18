import React, { useState } from "react"
import "./AddProduct.css"
import upload_image from "../../assets/upload_area.svg"
const AddProduct = () => {

  const [image, setImage] = useState(false);

  const imageHandler = (e) => {
    console.log(e);
    setImage(e.target.files[0])
  }

  const [productDetails, setProductDetails] = useState({
    name: "",
    image: "",
    goal: "",
    category: "weekly",
    message: "",
    date: ""
  })

  const changeHandler = (e) => {

    setProductDetails({ ...productDetails, [e.target.name]: e.target.value })
  }

  const AddProduct = async () => {
    console.log(productDetails);

    let responseData;
    let product = productDetails;

    let formData = new FormData();
    formData.append("product", image);

    await fetch("http://localhost:4000/upload", {
      method: "POST",
      headers: {
        Accept: "application/json"
      },
      body: formData
    }).then((resp) => resp.json()).then((data) => { responseData = data });

    if (responseData.success) {
      product.image = responseData.image_url;
      console.log(product);

      await fetch("http://localhost:4000/addProduct", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(product)
      }).then((resp) => resp.json()).then((data) => {
        data.success ? alert("Product Added") : alert("Failed")
      })
    }

    setProductDetails({
      name: "",
      image: "",
      goal: "",
      category: "weekly",
      message: "",
      date: ""


    })
    setImage(false); // Reset the image state
    if (fileInputRef.current) {
      fileInputRef.current.value = ""; // Clear the file input field
    }

  }

  return (
    <>
      <div className="add-product-container pt-5 pb-2 ps-3 pe-3">
        <div className="container addProductMain pt-3 ps-3 pe-3  pb-3">

          <div className="row">
            <div className="col-12 text-center fw-bold"><h2 className="fw-bold pt-3 pb-2"> Add Habit</h2></div>
          </div>

          <div className="row mt-3 ">
            <div className="col-12">
              <label htmlFor="name" >Habit Titel</label><br />
              <input type="text" placeholder="Type here" name="name" id="name" value={productDetails.name}
                onChange={changeHandler}></input>
            </div>
          </div>

          <div className="row mt-3 d-flex justify-content-between">
            <div className="col-6">
              <label htmlFor="goal">Goal</label>
              <input type="text" placeholder="Type here" name="goal" value={productDetails.goal} onChange={changeHandler}></input>
            </div>
            <div className="col-6">
              <label htmlFor="date">Date</label>
              <input type="date" placeholder="Type here" name="date" value={productDetails.date} onChange={changeHandler}></input>
            </div>
          </div>

          <div className="row mt-3">
            <div className="col-6 col-md-6">
              <label htmlFor="category">Product Category</label>
              <select name="category" value={productDetails.category} onChange={changeHandler}>
                <option value="daily">Daily</option>
                <option value="weekly">Weekly</option>
                <option value="monthly">Monthly</option>
              </select>
            </div>

            <div className="col-6 col-md-6" >
              <label htmlFor="message">Motivational Message</label><br></br>
              <textarea text="text" placeholder="Enter Message" name="message" value={productDetails.message} onChange={changeHandler}></textarea>
            </div>
          </div>

          <div className="row mt-3">
            <div className="col-6 col-md-4">
              <label htmlFor="file-input">
                <img src={image ? URL.createObjectURL(image) : upload_image} className="addproduct-thumnail-img img-fluid overflow-hidden" height="150px" width="150px" />
              </label>

              <input type="file" name="image" id="file-input" onChange={imageHandler} hidden />

            </div>
          </div>

          <div className="row mt-3">
            <div className="col-2">
              <button type="submit" className="btn addbtn" onClick={() => AddProduct()}>ADD</button>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default AddProduct