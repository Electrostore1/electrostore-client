import './Style.Module.css';
import Header from "../Header"
import Footer from "../Footer";
import { useState } from "react";


import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Cookies from "js-cookie";
const Productpload=()=>{
    
  const jwt=Cookies.get();
  console.log('ttttttttttttttt',jwt.token)

    const defaultvalue={
   
 
    }
  
      const [user,setuser]=useState(defaultvalue)
      const [image, setImage] = useState(null);
  
      const onvaluechange= (e)=>{
      //console.log(e.target.name,e.target.value)
      setuser({...user,[e.target.name]:e.target.value})
      console.log('nameeebbbbbbbbbbbbbbee',user)
      }
  
      function handleChange(e) {
  
  
          setImage(e.target.files[0]);
          console.log(image);
      }
  
      const handleSubmit = e => {
          e.preventDefault();
          
          const formData = new FormData();
          formData.append('image', image);
          formData.append('productName', user.productName);
          formData.append('productPrice', user.productPrice);
          formData.append('productDescription', user.productDescription);
          formData.append('productQuanitity', user.productQuanitity);
          formData.append('catagory', user.catagory);
          fetch('http://localhost:8080/api/product/store-data', {       //phala 5000 port pa req ja rahe thi http://localhost:5000/upload
            method: 'POST',
            body: formData
           
          })
            .then(response => response.text())
            .then(response => {
            
              toast.success("Product upload successfully!");
            });
        };
  
    
    
    
    
    
    
    return(

    <>

<Header></Header>

<ToastContainer />
<div className="page-wrapper bg-dark p-t-100 p-b-50">
        <div >          
          <div className="card card-6">
            
            <div className="card-heading">
              <h2 className="title">product upload</h2>
            </div>
            <div className="card-body">
              <form method="POST">
                <div className="form-row">
                  <div className="name">product name</div>
                  <div className="value">
                    <input className="input--style-6" placeholder="productName" type="text"  name="productName" onChange={(e)=> onvaluechange(e)} />
                  </div>
                </div>
                <div className="form-row">
                  <div className="name">product price</div>
                  <div className="value">
                    <div className="input-group">
                      <input className="input--style-6" type="number"name="productPrice"  placeholder="product price" onChange={(e)=> onvaluechange(e)} />
                    </div>
                  </div>
                </div>
                <div className="form-row">
                  <div className="name">product Description</div>
                  <div className="value">
                    <div className="input-group">
                      <textarea className="textarea--style-6" name="productDescription"  placeholder="productDescription"  onChange={(e)=> onvaluechange(e)} defaultValue={""} />
                    </div>
                  </div>
                </div>
                <div className="form-row">
                  <div className="name">product quantity</div>
                  <div className="value">
                    <div className="input-group">
                      <input className="input--style-6" type="text" name="productQuanitity"  placeholder="product quantity" onChange={(e)=> onvaluechange(e)} />
                    </div>
                  </div>
                </div>
                <div className="form-row">
                  <div className="name">product catagory</div>
                  <div className="value">
                    <input className="input--style-6" placeholder="product catagory" type="text"  name="catagory" onChange={(e)=> onvaluechange(e)} />
                  </div>
                </div>
               
                <div className="form-row">
                  <div className="name">Upload image</div>
                  <div className="value">
                    <div className="input-group js-input-file">
                      <input className="input-file" type="file" name="image"onChange={handleChange} id="file" />
                     
                    </div>
                    <div className="label--desc">Upload your product data</div>
                  </div>
                </div>
              </form>
            </div>
            <div className="card-footer">
              <button className="btn btn-primary" type="submit" onClick={handleSubmit}>upload product </button>
            </div>
          </div>
        </div>
      </div>
      {/* Jquery JS*/}
      {/* Main JS*/}
    




<Footer></Footer>
</>

    )
}
export default Productpload;