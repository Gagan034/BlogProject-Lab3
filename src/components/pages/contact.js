import React from "react";

const divStyle = {
  margin: '60px',
  border: '12px groove LightCoral',
  padding: '15px'
};
const style = {
  backgroundColor: ' DarkSlateGrey',
  padding: '10px 400px 15px 400px'
};
const cStyle = {
  fontSize: '20px',
  textAlign: 'center',
  color: 'white'
};

function Contact() {
  return (
    <header>
      <br/><br/>
      <div style = {style}>
      <div style={divStyle}>
      <p style={cStyle}>Gagandeep Kaur</p>
      <p style={cStyle}>Student ID:200390598</p>
      <p style={cStyle}>Email: kgagandeep034@gmail.com</p>
      </div>
      <div style={divStyle}>
      <p style={cStyle}>Dhruvi Tank</p>
      <p style={cStyle}>Student ID:200382855</p>
      <p style={cStyle}>Email: dhruvitank2000@gmail.com</p>
      </div>
      <div style={divStyle}>
      <p style={cStyle}>Thomas Tranthe</p>
      <p style={cStyle}>Student ID:200376589</p>
      <p style={cStyle}>Email: Thuong.tranthe@gmail.com</p>
      </div>
      <div style={divStyle}>
      <p style={cStyle}>Dante</p>
      <p style={cStyle}>Student ID:200389752</p>
      <p style={cStyle}>Email: dantecanada10@yahoo.com</p>
      </div>
      </div>
    </header>
    )
  };
      
  

export default Contact;

