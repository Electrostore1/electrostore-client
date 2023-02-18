import './style.css'
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Cookies from "js-cookie";
function Table(){
  const jwt=Cookies.get();
  console.log('ttttttttttttttt',jwt.token)

    const [info, setinfo] = useState([]);
    const [rerenderKey, setRerenderKey] = useState(0);

    useEffect(() => {
        fetch("http://localhost:8080/api/product/productDetails",{
     
        headers: {
          "authorization":`${jwt.token}`,
          
        }
      })
          .then((response) => response.json())
          .then((data) => setinfo(data.productDetails));
      }, [rerenderKey]);

      console.log("table information loaded",info)




const handleDelete=(productId)=>{
    fetch(`http://localhost:8080/api/product/deleteproduct/${productId}`, {
        method: 'DELETE',
        headers: {
          "authorization": ` ${jwt.token}`,
          "Content-Type": "application/json"
        }
      })
      .then(response => {
        toast.success("Product deleted successfully!");
        setRerenderKey(rerenderKey + 1);// handle the response
      })
      .catch(error => {
        // handle the error
      });

}


    return(
        <>
          <ToastContainer />
        <section className="ftco-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6 text-center mb-4">
              <h2 className="heading-section">product updata and delete</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <h3 className="h5 mb-4 text-center">Table</h3>
              <div className="table-wrap">
                <table className="table">
                  <thead className="thead-primary">
                    <tr>
                      <th>&nbsp;</th>
                      <th>&nbsp;</th>
                      <th>Product</th>
                      <th>Price</th>
                      <th>update</th>
                      <th>delete</th>
                      <th>&nbsp;</th>
                    </tr>
                  </thead>
                  <tbody>
                    {info.map((row, index) => (
                    <tr   key={row._id}    className="alert" role="alert">
                    
                      
                      <td>
                        <div className="img" style={{backgroundImage: `url(http://localhost:8080/public/images/${row.image})`}} />
                       
                      </td>
                      <td>
                        <div className="email">
                          <span>{row.productName} </span>
                          <span></span>
                        </div>
                      </td>
                      <td>{row.productPrice}</td>
                      <td className="quantity">
                        <div className="input-group">
                        <Link to={`/admin/productinfo/updata/${row._id}`}><button type="button" class="btn btn-primary">update</button></Link>
                        </div>
                      </td>
                      
                      <td>
                      <td><button onClick={() => handleDelete(row._id)} type="button" class="btn btn-danger">delete</button></td>
                        
                      </td>
                    </tr>
                   ))}
                    
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
        </>
    )
}

export default Table;