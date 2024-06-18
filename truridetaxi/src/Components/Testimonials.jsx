
import React from 'react';
import "./Testimonials.css";

export default function Testimonials(){
    return(
        <div className='div'>
            <section  className='testominals-body'>  
            <div className="testimonials-heading">
                <h3> Our Drivers & Riders  <strong> Testimonials </strong>    </h3>
                <div>

                
                <img src="assets\line2.png" alt=""  className="img-logo"   style={{rotate:"90deg", width:"30px",marginTop:"100px",alignItems:"center", marginLeft:"-350px" }} />
                </div>
                {/* <img src="assets\line2.png" alt=""    className='img-logo'   style={{rotate:"90deg", marginTop:"-30px", marginRight:"100px"}} /> */}
            </div>
              
              <div  className='image-body'>
                 <div> <img src="public\Group 481961.png" alt="" /></div>
                 </div>
                <div  className='para-body'>
                    
                    <img src="public\Group (1).png" alt=""   className='colon-img'  style={{marginBottom:"100px", marginRight:"10px"}} />
                    <p>Excited to join TruRide as a driver! Fair earnings, community<br></br>support, and perks like insurance and ad-based extra income<br></br> make it a game-changer. Can't wait for the launch! 🚗💼</p>
                    <img src="public\Group.png" alt=""   className='colon-img'  style={{marginTop:"100px", marginLeft:"10px"}}  />
                </div>
            </section>

            <section  className="contact-section"> 

<div className="heading">
    <h3>Contact Us</h3>
    <img src="assets\line2.png" alt=""  className="img-logo"   style={{rotate:"90deg", width:"30px",marginTop:"-80px",alignItems:"center",marginRight:"20px"}} />
     </div>

<div className="body-content">
<div className="left-side-content">
  
  <div class="mb-3">
<label for="exampleFormControlInput1" class="form-label"> Name</label>
<input type="text" class="form-control" id="exampleFormControlInput1" />
</div>


<div class="mb-3">
<label for="exampleFormControlInput1" class="form-label">Mobile Number</label>
<input type="Number" class="form-control" id="exampleFormControlInput1" />
</div>

<div class="mb-3">
<label for="exampleFormControlInput1" class="form-label">Email address</label>
<input type="email" class="form-control" id="exampleFormControlInput1"/>
</div>

<div class="mb-3">
<label for="exampleFormControlInput1" class="form-label"> You are a ?</label>
<input type="text" class="form-control" id="exampleFormControlInput1" />
</div>
<div class="mb-3">
<label for="exampleFormControlTextarea1" class="form-label">Comments</label>
<textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
</div>
<button   className="bttn">Submit</button>
</div>
<img src="public\assets\line2.png" alt="" />

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