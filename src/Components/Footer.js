import React from "react";
const current = new Date();
const date = `${current.getFullYear()}`;

function Footer() {
  return (
    
      <div className="footer">
        <center> Chaz Cosby &copy;{date} </center>
      
    </div>
  );
}

export default Footer;
