import React from "react";
  import "./Features.css";
  
export default function Features(){
    return (
        <div>
            <section>
            <div className="container">
            <div  className="header"> 
            <h3> Key <strong>Features</strong></h3>
            <img src="assets\line2.png" alt=""  className="img-logo"   style={{rotate:"90deg", width:"30px",marginTop:"-80px",alignItems:"center",marginLeft:"580px"}} />
            </div>

            <div className="left-box-one"></div>
             <div className="right-box-one"></div>
              <div className="left-box-three"></div>
              <div className="right-box-two"> </div>
        </div>
            </section>
    
   <section  className="contact-section"> 

    <div className="heading">
        <h3>Contact Us</h3>
        <img src="public\assets\line2.png" alt="" style={{rotate:"90deg", width:"30px",marginTop:"-70px"}}   className="img-logo"/>
         </div>

   <div className="body-content">
   <div className="left-side-content">
      
      <div class="mb-3">
    <label for="exampleFormControlInput1" className="form-label" > Name</label>
    <input type="text" class="form-control" id="exampleFormControlInput1" />
  </div>
  
    
  <div class="mb-3">
    <label for="exampleFormControlInput1" className="form-label">Mobile Number</label>
    <input type="Number" class="form-control" id="exampleFormControlInput1" />
  </div>
    
  <div class="mb-3">
    <label for="exampleFormControlInput1" className="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleFormControlInput1"/>
  </div>
    
  <div class="mb-3">
    <label for="exampleFormControlInput1" className="form-label"> You are a ?</label>
    <input type="text" class="form-control" id="exampleFormControlInput1" />
  </div>
  <div class="mb-3">
    <label for="exampleFormControlTextarea1" className="form-label">Comments</label>
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
  </div>
   <button   className="bttn">Submit</button>
  </div>
   <img src="assets\line2.png" alt="" />
  <div className="right-content">
          <div>
              <h5><strong>Head Office:</strong></h5>
              <p>H.no-3-11-368/Flat no; 401, 4th<br />Floor, above old Indusind <br />Finance Bank, Back side of Axi<br />Bank, L.B Nagar, Hyderabad,<br />Telangana 500068</p>
          </div>
          <div>
              <h5><strong>Contact us:</strong></h5>
              <p>
                  Email- truridetaxi@gmail.com<br />
                  Helpline No. +91 9346467553<br />
                  -truridetaxi.com
              </p>
          </div>
          </div>
    
    </div>      

   
   </section>


       
</div>  

)
}