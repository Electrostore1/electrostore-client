import { useState,useEffect } from 'react';
import {useParams} from 'react-router-dom';
import axios from "axios";
import './Main.css';
import { useNavigate  } from 'react-router-dom';

import Cookies from "js-cookie";


const Updataproduct=()=>{
  const jwt=Cookies.get();
  console.log('ttttttttttttttt',jwt.token)

    const [singleproductdata,setsingleproduct]=useState([])
    const [updateddata, setupdateddata] = useState({});

    const {id}=useParams()

    const navigate = useNavigate();
    useEffect(  ()=>{

        const getUserById= async ()=>{
          
           const apiurl='http://localhost:8080/api/singleproduct';
           try{
               const response= await  axios.get(`${apiurl}/${id}`,{
                headers: {
                  authorization: `${jwt.token}`, 
                  "Content-Type": "application/json"
                }
              })
              
               // setsingleproduct(response.data.singledata)
               setsingleproduct(response.data)
           }catch (error){
               console.log("error while calling api",error)
           }
           
           }
           getUserById()
       
       },[]);
     
       console.log('single producttttttt',singleproductdata);
    

       const onvaluechange= (e)=>{
        //console.log(e.target.name,e.target.value)
        setupdateddata({...updateddata,[e.target.name]:e.target.value})
        console.log('updateddd dataaa infoooo',updateddata)
        }
        const handleUpdate = (e) => {
            e.preventDefault();
            axios.patch(`http://localhost:8080/api/productupdata/${id}`, updateddata,{
              headers: {
                authorization: `${jwt.token}`,
                "Content-Type": "application/json"
              }
            })
              .then(response => {
                
                 navigate('/admin/productinfo');
              })
              .catch(error => console.error(error));
          };


    return(

        <>
           
        {singleproductdata.map((row, index) => (
        <section className="get-in-touch">
        
        <h1 className="title">update the product </h1>
        <form className="contact-form row">
       
          <div className="form-field col-lg-6">
            <input name='productName'   type="text"  onChange={(e)=> onvaluechange(e)} />
            <label className="label" htmlFor="name">Product name</label>
          </div>
          <div className="form-field col-lg-6 ">
            <input name='productPrice'  className="input-text js-input" onChange={(e)=> onvaluechange(e)} />
            <label className="label" >product Price</label>
          </div>
          <div className="form-field col-lg-6 ">
            <input name='productDescription' className="input-text js-input"  type="text"  onChange={(e)=> onvaluechange(e)} />
            <label className="label" htmlFor="company">product Description</label>
          </div>
          <div className="form-field col-lg-6 ">
            <input name='productQuanitity' className="input-text js-input" type="text"  onChange={(e)=> onvaluechange(e)}  />
            <label className="label" htmlFor="phone">product Quanitity</label>
          </div>
          <div className="form-field col-lg-12">
            <input name='catagory' className="input-text js-input"  type="text"  onChange={(e)=> onvaluechange(e)}  />
            <label className="label" htmlFor="message">catagory</label>
          </div>
          <div className="form-field col-lg-12">
            <button className="submit-btn"  onClick={handleUpdate}  >save product info</button>
            
          </div>
          
        </form>
      
      </section>
        ))}
        </>
    )
}

export default Updataproduct;