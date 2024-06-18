import React from 'react';
import bar from '../assets/bar.png';
import playb from '../assets/playB.png';
import line from '../assets/line.png';
import './HowItWorks.css';

function Howitworks() {
  return (
    <div className='outer-container'>
      <div className='inner-container'>
        <div className='heading'>
          <div className='hiw'>
            <h1>How <span>It works</span></h1> 
          </div>
          <div>
            <img style={{width:'150px',height:'5px'}} src={bar} alt='bar' />
          </div>
        </div>       
      </div>
      <div className='rectangle'>
        <img className='playB' src={playb} alt='play button' />
      </div>
      <div className='hiw'>
        <h1 style={{marginTop:'86px'}}>Problem & Solution <span>Demo Video</span></h1>
      </div>
      <div>
        <img style={{width:'500px',height:'5px',marginLeft:'375px'}} src={bar} alt='bar' />
      </div>
      <div className='container-1'>
        <div className='left'>
          <div className='problem'>
            <img className='play' src={playb} alt='play button' />
          </div>
          <div><h3 style={{color:'#100062'}}>Users Problem Demo Video</h3></div>
        </div>
        <div className='middle'> 
          <img className='line' src={line} alt='line' />
        </div>
        <div className='right'>
          <div className='solution'>
            <img className='play' src= {playb} alt='play button' />
          </div>
          <div><h3 style={{color:'#FF2E00'}}>Solution Demo Video</h3></div>
        </div>
      </div>
      
      <section className="contact-section"> 
        <div className="heading2">
          <h3 style={{color:'#100062'}}>Contact Us</h3>
        </div>
        <div>
          <img style={{width:'200px',height:'5px',marginLeft:'520px'}} src={bar} alt='bar' />
        </div>
        <div className="body-content">
          <div className="left-side-content">
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label"> Name</label>
              <input type="text" className="form-control" id="exampleFormControlInput1" />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">Mobile Number</label>
              <input type="number" className="form-control" id="exampleFormControlInput1" />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
              <input type="email" className="form-control" id="exampleFormControlInput1"/>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label"> You are a ?</label>
              <input type="text" className="form-control" id="exampleFormControlInput1" />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleFormControlTextarea1" className="form-label">Comments</label>
              <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <button className="bttn">Submit</button>
          </div>
          <div className='middle1'> 
            <img className='line1' src={line} alt='line' />
          </div>
          <div className="right-content">
            <div>
              <p style={{color:'#FF2E00',fontSize:'30px'}}><span>Head Office:</span></p>
              <p style={{color:'#100062',fontSize:'25px'}}>H.no-3-11-368/Flat no; 401, 4th<br />Floor, above old Indusind <br />Finance Bank, Back side of Axis<br />Bank, L.B Nagar, Hyderabad,<br />Telangana 500068</p>
            </div>
            <div>
              <p style={{color:'#FF2E00',fontSize:'30px'}}><span>Contact us:</span></p>
              <p style={{color:'#100062',fontSize:'25px'}}>
                Email- truridetaxi@gmail.com<br />
                Helpline No. +91 9346467553<br />
                -truridetaxi.com
              </p>
            </div>
          </div>
        </div>      
      </section>
    </div>
  );
}

export default Howitworks;
