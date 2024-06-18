import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
// import './Gettheapp.css';

function Gettheapp (props) {

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button color='white' onClick={toggle}>
        Get the App
      </Button>
      <Modal isOpen={modal} toggle={toggle} fullscreen>
        <ModalHeader toggle={toggle}>Modal title</ModalHeader>
        <ModalBody>
        <p id='top'>Download The <span style={{color:'#ff2e00'}}>TruRide</span> Application Here</p>
          <div className='container'>
            <div className='div-android'>
              <p id='orange'>For Android</p>
              <p style={{color:'white'}}>android 8.0+</p>
              <p id='blue'>Download the TruRide Taxi app for the</p>
              <p id='blue'>latest Android devices! Enjoy easy</p>
              <p id='blue'>booking, real-time tracking, and secure,</p>
              <p id='blue'>affordable rides.</p>
              <Button color="white" onClick={toggle}>
                Download App
              </Button>
            </div>
            <div className='div-apple'>
              <p id='orange'>For iOS</p>
              <p style={{color:'white'}}>iOS 15.6+</p>
              <p id='blue'>Get the TruRide Taxi app on your latest </p>
              <p id='blue'>iOS device! Experience seamless </p>
              <p id='blue'>booking, real-time tracking, and secure</p>
              <p id='blue'>affordable rides.</p>
              <Button color="white" onClick={toggle}>
                Download App
              </Button>
            </div>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>
            Do Something
          </Button>{' '}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default Gettheapp;