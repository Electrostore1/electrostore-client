import './Style.Module.css'
import Footer from './Footer';
import Header from './Header';
import Copyright from './Copyright';
import {useParams} from 'react-router-dom';
import axios from "axios";
import { useState,useEffect } from 'react';
import Cookies from "js-cookie";
function Singleproductdetail(){
 


  const[arraydata,setarraydata] = useState([])
  const [singleproductdata,setsingleproduct]=useState([])
  const {id}=useParams()
  console.log(id);
  const jwt=Cookies.get();
  console.log('ttttttttttttttt',jwt.token)
  useEffect(  ()=>{

   const getUserById= async ()=>{
     
      const apiurl='http://localhost:8080/api/singleproduct';
      try{
          const response= await  axios.get(`${apiurl}/${id}`,{
            headers: {
              Authorization: ` ${jwt.token}`, 
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
   console.log('qqqqqqqqqqqqqqqqqqqqqqqqqqqqq',singleproductdata[0]);

   //const data = Object.entries(singleproductdata);
   console.log('arrayyyyyyyyyyyyyyyyyyyyyyyyyyy',singleproductdata)
   
   

    return(

        <>
        <Header></Header>
        <div className="super_container">
        <header className="header" style={{display: 'none'}}>
          <div className="header_main">
            <div className="container">
              <div className="row">
                <div className="col-lg-6 col-12 order-lg-2 order-3 text-lg-left text-right">
                  <div className="header_search">
                    <div className="header_search_content">
                      <div className="header_search_form_container">
                        <form action="#" className="header_search_form clearfix">
                          <div className="custom_dropdown">
                            <div className="custom_dropdown_list"> <span className="custom_dropdown_placeholder clc">All Categories</span> <i className="fas fa-chevron-down" />
                              <ul className="custom_list clc">
                                <li><a className="clc" href="#">All Categories</a></li>
                              </ul>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
        
        <div className="single_product">
          
      
          <div className="container-fluid" style={{backgroundColor: '#fff', padding: '11px'}}>
          {singleproductdata.map((row, index) => (
            <div className="row">
           
              <div className="col-lg-2 order-lg-1 order-2">
               
                <ul className="image_list">
                  <li data-image="https://i.imgur.com/21EYMGD.jpg"><img src={`http://localhost:8080/public/images/${row.image}`} alt="" /></li>
         
                </ul>
              </div>
              <div className="col-lg-4 order-lg-2 order-1">
                <div className="image_selected"><img src={`http://localhost:8080/public/images/${row.image}`} alt="" /></div>
              </div>
              <div className="col-lg-6 order-3">
                <div className="product_description">
                 
                  <div className="product_price">{row.productName}</div>
                  <div className="product-rating"><span className="badge badge-success"><i className="fa fa-star" /> 4.5 Star</span> <span className="rating-review">35 Ratings &amp; 45 Reviews</span></div>
                  <div> <span className="product_price">{row.productPrice}</span> <strike className="product_discount"></strike> </div>
                  <div> <span className="product_saved">You Saved:</span> <span style={{color: 'black'}}>₹ 2,000<span> </span></span></div>
                  <hr className="singleline" />
                  <h3 style={{color:'blue'}}>product productDescription</h3>
                  <div> <span className="product_info">{row.productDescription}<span><br /> <span className="product_info">Warranty: 6 months warranty<span><br /> <span className="product_info">7 Days easy return policy<span><br /> <span className="product_info">7 Days easy return policy<span><br /> <span className="product_info">IN STOCK {row.productQuanitity}<span> </span></span></span></span></span></span></span></span></span></span></div>
                  <div>
                    <div className="row">
                      <div className="col-md-5">
                        <div className="br-dashed">
                          <div className="row">
                            <div className="col-md-3 col-xs-3"> <img src="https://img.icons8.com/color/48/000000/price-tag.png" /> </div>
                            <div className="col-md-9 col-xs-9">
                              <div className="pr-info"> <span className="break-all">Get 5% instant discount + 10X rewards @ RENTOPC</span> </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-7"> </div>
                      
                    </div>
                    <div className="row" style={{marginTop: '15px'}}>

        <div className="col-xs-6" style={{marginLeft: '55px'}}> <span className="product_options">Storage Options</span><br /><a href="#"> <button className="btn btn-primary btn-sm">Buy now this product </button> </a> </div>
      </div>
                  </div>
                 
                  
                </div>
                
              </div>
              
            </div>
          
          ))}
          
           
          </div>
         
        </div>
        <Footer></Footer>
        <Copyright></Copyright>
      </div>
   
  

        
        </>
    )
}
export default Singleproductdetail;