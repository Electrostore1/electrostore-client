import React, { useState, useEffect } from "react";
import Header from "./Header";
import Slider from "./Slider";
import Shopwithus from "./Shopwithus";
import Bestdevices from "./Bestdevices";
import Copyright from "./Copyright";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addItems } from "../redux/action/itemAction";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Cookies from "js-cookie";
const Mainpage = () => {
  const dispatch = useDispatch();
  const [info, setinfo] = useState([]);
  const [query, setquery] = useState("");
  const jwt=Cookies.get();
  console.log('ttttttttttttttt',jwt.token)
  useEffect(() => {
    fetch("http://localhost:8080/api/product/productDetails",{
     
      headers: {
        "authorization":`${jwt.token}`,
        
      }
    })
      .then((response) => response.json())
      .then((data) => setinfo(data.productDetails));
  }, []);

  const handleProductClick = (item) => {
    dispatch(addItems(item));
    toast.success("Product is added to cart!");
  };

  return (
    <div>
      <ToastContainer />
      <div className="hero_area">
        {/* header section strats */}
        <Header></Header>
        {/* end header section */}
        {/* slider section */}
        <Slider></Slider>
        {/* end slider section */}
      </div>
      {/* why section */}
      <Shopwithus></Shopwithus>
      {/* end why section */}
      {/* arrival section */}
      <Bestdevices></Bestdevices>
      {/* end arrival section */}
      {/* search bar */}
      {/* <form class="search" action="">
        <input
          style={{
            width: "50%",
            padding: "20px",
            fontSize: "x-large",
            margin: "25px 300px",
          }}
          type="search"
          placeholder="Search here..."
          onChange={(e) => setquery(e.target.value)}
        />
      </form> */}
      <section className="subscribe_section" style={{ margin: "15px " }}>
        <div className="container-fuild">
          <div className="box">
            <div className="row">
              <div className="col-md-6 offset-md-3">
                <div className="subscribe_form ">
                  <div className="heading_container heading_center">
                    <h3>Search Product</h3>
                  </div>

                  <form action>
                    <input
                      type="search"
                      placeholder="Search "
                      onChange={(e) => setquery(e.target.value)}
                    />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* end search bar  */}
      {/* product section */}
      <section className="product_section layout_padding">
        <div className="container">
          <div className="heading_container heading_center">
            <h2>
              Our <span>products</span>
            </h2>
          </div>
          <div className="row">
            {info
              .filter((info) => info.productName.toLowerCase().includes(query))
              .map((info, index) => (
                <div className="col-sm-6 col-md-4 col-lg-4">
                  <div className="box">
                    <div className="option_container">
                      <div className="options">
                        <Link className="option1" to={info._id}>
                          details
                        </Link>

                        <button
                          className="buyNow"
                          onClick={() => handleProductClick(info)}
                        >
                          Buy Now
                        </button>
                      </div>
                    </div>
                    <div className="img-box">
                      <img
                        src={`http://localhost:8080/public/images/${info.image}`}
                        alt=""
                      />
                    </div>
                    <div className="detail-box">
                      <h5>{info.productName}</h5>
                      <h5>{info.productPrice}</h5>
                    </div>
                  </div>
                </div>
              ))}
          </div>
          <div className="btn-box">
            <a href>View All products</a>
          </div>
        </div>
      </section>
      {/* end product section */}
      {/* subscribe section */}

      {/* end subscribe section */}
      {/* client section */}

      {/* end client section */}
      {/* footer start */}
      <Footer></Footer>
      {/* footer end */}
      <Copyright></Copyright>
      {/* jQery */}
      {/* popper js */}
      {/* bootstrap js */}
      {/* custom js */}
    </div>
  );
};

export default Mainpage;
